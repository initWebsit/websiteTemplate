/*
 + ------------------------------------------------------------------
 | 用于测试环境官网的服务 
 + ------------------------------------------------------------------ 
 */
const path = require("path");
const express = require("express");
const app = express();
const setupProxy = require("../setupProxy");
const PORT = 6122; // 服务启动端口号
const Env = process.env.NODE_ENV || 'prod';
// const compression = require('compression');


// app.use(compression());

app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else {
        next();
    }
})

// 注册代理
setupProxy(app);

console.log('[Official Env]', Env);

app.use(express.static("dist/official-" + Env));
app.get("*", function (req, res) {
    let filename = path.join(__dirname, '../dist/', '/official-' + Env, "index.html");
    res.sendFile(filename);
});

/** 启动服务 **/
app.listen(PORT, () => {
    console.log("官网项目-启动地址: http://localhost:%s", PORT);
});
