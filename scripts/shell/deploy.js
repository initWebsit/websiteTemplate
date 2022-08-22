/*
 + -------------------------------------------------------------------------------
 | 说明
 | @example
 | node /xxx/veeka-web/scripts/shell/deploy.js			// 按预定规则进行构建
 | node /xxx/veeka-web/scripts/shell/deploy.js compile  // 强制编译并构建
 | node /xxx/veeka-web/scripts/shell/deploy.js depend   // 强制安装依赖并构建
 + ------------------------------------------------------------------------------- 
 */
Log('Info', '开始构建')


const { execSync, spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const https = require('https');

const scriptFilePath = path.resolve(__dirname);
const pathArr = scriptFilePath.split('/');
pathArr[pathArr.length - 1] === 'shell' && pathArr.pop();
pathArr[pathArr.length - 1] === 'scripts' && pathArr.pop();
const productDir = pathArr.join('/');
const productName = pathArr.pop();
// const productDirP = pathArr.join('/');

const ProjectName = "official-prod";
const BranchDeploy = "master";
const RobotUrl = "/cgi-bin/webhook/send?key=4f39338d-36cb-4f2e-8877-5740d0f23334";
let branchCurrent = null;
let branchHead = null;
let branchLocalHead = null;
let branchRemoteHead = null;

process.chdir(productDir);


const checkBranch = function () {
    Log('Info', "检查环境")
    let msg = null;
    let code = 1;
    try {
        branchCurrent = execSync(`git branch | grep "*" | sed "s/\* //"`, { encoding: 'utf-8' });
        typeof branchCurrent === 'string' && (branchCurrent = branchCurrent.trim());
        if (branchCurrent !== BranchDeploy) {
            msg = `当前脚本仅可运行于 ${BranchDeploy} 分支`;
            code = 0;
        }
    } catch (err) {
        msg = err.stack;
        code = 2;
    }
    return { code, msg };
}


const compileCode = function () {
    let msg = null;
    let code = 1;
    try {
        Log('Info', '拉取代码')
        let packageHashB = crypto.createHash('md5');
        let packageBufferB = fs.readFileSync(path.join(process.cwd(), 'package.json'));
        let packageMd5B = packageHashB.update(packageBufferB, 'utf8').digest('hex');

        execSync(`git fetch origin ${branchCurrent}`);

        let isExistRemoteHeadFile = fs.existsSync(`${productDir}/\.git/refs/remotes/origin/${branchCurrent}`);
        if (!isExistRemoteHeadFile) execSync(`cp ${productDir}/\.git/refs/heads/${branchCurrent} ${productDir}/\.git/refs/remotes/origin/`);

        branchLocalHead = fs.readFileSync(`${productDir}/\.git/refs/heads/${branchCurrent}`, 'utf8');
        branchRemoteHead = fs.readFileSync(`${productDir}/\.git/refs/remotes/origin/${branchCurrent}`, 'utf8');
        typeof branchLocalHead === 'string' && (branchLocalHead = branchLocalHead.trim());
        typeof branchRemoteHead === 'string' && (branchRemoteHead = branchRemoteHead.trim());

        if (branchLocalHead === branchRemoteHead) {
            branchHead = branchLocalHead;
            if (!['compile', 'depend'].includes(process.argv[2])) {
                return { code: 0, msg: '已是最新代码' }
            }
        } else {
            execSync(`git merge origin/${branchCurrent}`)
            branchHead = branchRemoteHead;
        }

        let packageHashA = crypto.createHash('md5');
        let packageBufferA = fs.readFileSync(path.join(process.cwd(), 'package.json'));
        let packageMd5A = packageHashA.update(packageBufferA, 'utf8').digest('hex');

        if (packageMd5B !== packageMd5A || process.argv[2] === 'depend') {
            Log('Info', '安装依赖包')
            spawnSync('yarn', ['install'], {
                stdio: [process.stdin, process.stdout, process.stderr]
            });
        }

        Log('Info', '开始编译')
        let deployResult = spawnSync('yarn', ['run', 'deploy'], {
            stdio: [process.stdin, process.stdout, process.stderr],
        });
        Log('Info', deployResult)

    } catch (err) {
        code = 2;
        msg = err.stack;
    }

    return { code, msg }
}


const deployCode = function () {
    let msg = null;
    let code = 1;

    try {
        Log('Info', '删除历史备份')
        execSync(`rm -rf backup/${ProjectName}`, { encoding: 'utf-8' });

        let isExistBackupDir = fs.existsSync(`./backup/${ProjectName}`);
        let isExistDistDir = fs.existsSync(`./dist/${ProjectName}`);
        if (!isExistBackupDir) execSync(`mkdir ./backup/${ProjectName}`)
        if (!isExistDistDir) execSync(`mkdir ./dist/${ProjectName}`)

        Log('Info', '开始备份')
        execSync(`rsync -zrtopg --delete --progress ${productDir}/dist/${ProjectName}/ ${productDir}/backup/${ProjectName}/`);

        Log('Info', '开始布署')
        execSync(`rsync -zrtopg --delete --progress ${productDir}/build/${ProjectName}/ ${productDir}/dist/${ProjectName}/`);
        msg = '发布成功'
    } catch (err) {
        Log('Error', err)
        code = 0;
        msg = err.stack;
    }
    return { code, msg }
}


let checkBranchRes = {};
let compileCodeRes = {};
let deployCodeRes = {};

checkBranchRes = checkBranch();

// 执行方法，返回值。code=0 警告、 code=1 成功、code=2 失败。成功与失败的消息输出至机器人，警告消息只做打印处理。
if (checkBranchRes.code === 0) {
    Log('Warn', checkBranchRes.msg);
}
else if (checkBranchRes.code === 2) {
    Log('Error', msg);
    finishDeploy(https, checkBranchRes.code, checkBranchRes.msg);
}
else if (checkBranchRes.code === 1) {
    compileCodeRes = compileCode();

    if (compileCodeRes.code === 0) {
        Log('Warn', compileCodeRes.msg)
    }
    else if (compileCodeRes.code === 2) {
        Log('Error', compileCodeRes.msg)
        finishDeploy(https, compileCodeRes.code, compileCodeRes.msg)
    }
    else if (compileCodeRes.code === 1) {
        deployCodeRes = deployCode();

        if (deployCodeRes.code === 0) {
            Log('Warn', deployCodeRes.msg);
        }
        else if (deployCodeRes.code === 2) {
            Log('Error', deployCodeRes.msg)
            finishDeploy(https, deployCodeRes.code, deployCodeRes.msg)
        } else {
            finishDeploy(https, deployCodeRes.code, deployCodeRes.msg)
        }
    }
}



//--------------------- helps ---------------
function dateFormat(date, fstr, utc) {
    utc = utc ? 'getUTC' : 'get';
    return fstr.replace(/%[YmdHMS]/g, function (m) {
        switch (m) {
            case '%Y': return date[utc + 'FullYear']();
            case '%m': m = 1 + date[utc + 'Month'](); break;
            case '%d': m = date[utc + 'Date'](); break;
            case '%H': m = date[utc + 'Hours'](); break;
            case '%M': m = date[utc + 'Minutes'](); break;
            case '%S': m = date[utc + 'Seconds'](); break;
            default: return m.slice(1);
        }
        return ('0' + m).slice(-2);
    });
}


function Log(type, msg, typeTitle) {
    typeTitle = typeTitle || 'Deploy'
    let time = dateFormat(new Date(), "%Y-%m-%d %H:%M:%S", false);
    console.log(`[${time}][${typeTitle} ${type}]:`, msg)
}


function finishDeploy(ajax, code, msg) {
    const options = {
        hostname: 'qyapi.weixin.qq.com',
        port: 443,
        path: RobotUrl,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const req = ajax.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            Log('Info', chunk, 'Notice');
        });
    });
    req.on('error', (e) => Log('Error', 'problem with request: ' + e.message, 'Notice'));

    let content = '';

    if (branchHead) {
        let commitAuthor = execSync(`git log --pretty=format:"%ae" ${branchHead} -1`)
        if (commitAuthor) {
            content = `<@${commitAuthor}>`
        }
    }

    content = content + '\n' + `<font color="${code === 1 ? '#52c41a' : '#ff4d4f'}">${code === 1 ? '✅ 发布成功' : '❌ 发布失败'}</font>`;
    content = content + '\n' + `><font color="comment">项目：${productName}</font>`;
    content = content + '\n' + `> <font color="comment">时间：${dateFormat(new Date(), "%Y-%m-%d %H:%M:%S", false)}</font>`;

    if (branchHead) {
        content = content + '\n' + `><font color="comment">版本：${branchHead}</font>`;
        let commitDesc = execSync(`git log --pretty=format:"[%h]：%s" ${branchRemoteHead}...${branchLocalHead}`, { encoding: 'utf-8' });
        let commitDescArr = commitDesc.split('\n')
        if (Array.isArray(commitDescArr) && commitDescArr.length > 0) {
            content = content + '\n\n' + `<font color="warning">💡 提交记录</font>`;
            commitDescArr.forEach((s, idx) => {
                if (!/Merge branch .* into/.test(s)) {
                    content = content + '\n' + `><font color="comment">${s}</font>`;
                }
            })
        }
    }

    if (code >= 1) {
        if (code == 2) {
            content = content + '\n\n' + `<font color="#ff4d4f">❗原因</font>`
            content = content + '\n' + `><font color="comment">${msg}</font>`
        }
    }
    req.write(JSON.stringify({
        msgtype: "markdown",
        markdown: { content, }
    }));
    req.end();
}