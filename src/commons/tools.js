/*
 + ------------------------------------------------------------------
 | 封装了一些常用的工具函数
 + ------------------------------------------------------------------ 
 */

export function removeURLParameter(url, parameter) {
	var urlparts = url.split('?')
	if (urlparts.length >= 2) {
		//参数名前缀
		var prefix = encodeURIComponent(parameter) + '='
		var pars = urlparts[1].split(/[&;]/g)

		//循环查找匹配参数
		for (var i = pars.length; i-- > 0;) {
			if (pars[i].lastIndexOf(prefix, 0) !== -1) {
				//存在则删除
				pars.splice(i, 1)
			}
		}

		return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '')
	}
	return url
}


export function dateFormat(fmt, date) {
	date = date && new Date(date);
	const opt = {
		"Y+": date.getFullYear().toString(),        // 年
		"m+": (date.getMonth() + 1).toString(),     // 月
		"d+": date.getDate().toString(),            // 日
		"H+": date.getHours().toString(),           // 时
		"M+": date.getMinutes().toString(),         // 分
		"S+": date.getSeconds().toString()          // 秒
	};
	let ret;
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		};
	};
	return fmt;
}

export function getCycleList() {
	let start = new Date(2022, 6, 1);
	let end = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
	let nowDate = start;
	let arr = [];
	while(1) {
		if(nowDate.getTime() > end.getTime()) {
			break;
		}
		let temp = nowDate;
		let json = {
			label: dateFormat('YYYY-mm-dd', temp.setDate(1)) + ' -> ' + dateFormat('YYYY-mm-dd', new Date(temp.getFullYear(),temp.getMonth() + 1,1) - 1000*60*60*24),
			value: dateFormat('YYYY-mm-dd', temp.setDate(1))
		};
		arr.push(json);
		// json = {
		// 	label: dateFormat('YYYY-mm-dd', temp.setDate(16)) + ' -> ' + dateFormat('YYYY-mm-dd', new Date(new Date(temp.getFullYear(),temp.getMonth() + 1,1) - 1000*60*60*24)),
		// 	value: dateFormat('YYYY-mm-dd', temp.setDate(16))
		// };
		// arr.push(json);
		nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1);
	}
	console.log(arr);
	return arr;
}


export function dealPlusMinus(num) {
	num = Number(num);
	if (!$_.isNumber(num)) return '';
	if (num > 0) return '+';
	if (num === 0) return '';
	if (num < 0) return '';
}

// 深克隆方法
export function deepClone(temp) {
	if (Object.prototype.toString.call(temp) === '[object Object]') {
		let json = {};
		for (let key in temp) {
			json[key] = deepClone(temp[key]);
		}
		return json;
	} else if (Object.prototype.toString.call(temp) === '[object Array]') {
		let arr = [];
		temp.forEach((res) => {
			arr.push(deepClone(res));
		});
		return arr;
	} else {
		return temp;
	}
}