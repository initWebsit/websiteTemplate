/*
 + ------------------------------------------------------------------
 | 多语言工具
 + ------------------------------------------------------------------ 
 */
import kiwiIntl from 'kiwi-intl'
import arLangs from '~/.kiwi/ar/'
import enUsLangs from '~/.kiwi/en-US/'
import idLangs from '~/.kiwi/id/'
import koLangs from '~/.kiwi/ko/'
import msLangs from '~/.kiwi/ms/'
import thLangs from '~/.kiwi/th/'
import trLangs from '~/.kiwi/tr/'
import viLangs from '~/.kiwi/vi/'
import zhCNLangs from '~/.kiwi/zh-CN/'
import zhTWLangs from '~/.kiwi/zh-TW/'
import { getSession } from './storage'

const Langs = {
	'ar': arLangs,
	'en': enUsLangs,
	'id': idLangs,
	'ko': koLangs,
	'ms': msLangs,
	'th': thLangs,
	'tr': trLangs,
	'vi': viLangs,
	'zh-CN': zhCNLangs,
	'zh-TW': zhTWLangs,
}

export const langDict = [
	{ key: 'ar', text: 'لغة عربية', value: 'ar' },
	{ key: 'en-US', text: 'English', value: ['en-US', 'en'] },
	{ key: 'id', text: 'Indonesia', value: 'id' },
	{ key: 'ko', text: '한국어', value: 'ko' },
	{ key: 'ms', text: 'Bahasa Melayu', value: 'ms' },
	{ key: 'th', text: 'ไทย', value: 'th' },
	{ key: 'tr', text: 'Türkçe', value: 'tr' },
	{ key: 'vi', text: 'Tiếng Việt', value: 'vi' },
	{ key: 'zh-S', text: '简体中文', value: ['zh-CN', 'zh'] },
	{ key: 'zh-T', text: '繁体中文', value: ['zh-TW', 'zh-HK'] },
]

/**
 * 获取当前语言的Cookie
 */
export function getCurrentLang() {
	const urlLang = new URL(window.location.href).searchParams.get('lang');
    const sessionLang = getSession('lang');
    const systemLang = window.navigator.language;

    let langKeyArr = Object.keys({ ...Langs, 'zh': zhCNLangs });
    let lang;
    langKeyArr.some(s => new RegExp(s).test(systemLang) ? (lang = s, true) : false);
    if (sessionLang) langKeyArr.some(s => new RegExp(s).test(sessionLang) ? (lang = s, true) : false);
    if (urlLang) langKeyArr.some(s => new RegExp(s).test(urlLang) ? (lang = s, true) : false);
    return lang || 'en';
}

/**
 * 获取当前语言环境（专供接口）
 */
 export function getCurrentLangForRequest() {
    let _lang = getCurrentLang();
    if (_lang === 'zh' || _lang === 'zh-CN') _lang = 'zh_cn';
    if (_lang === 'zh-HK' || _lang === 'zh-TW') _lang = 'zh_tw';
    return _lang;
}

let curLang = getCurrentLang();
let curLangForKiwi = curLang
if (curLangForKiwi === 'zh') curLangForKiwi = 'zh-CN';
if (curLangForKiwi === 'zh-HK') curLangForKiwi = 'zh-TW';

export const I18N = kiwiIntl.init(curLangForKiwi, Langs);
export default I18N;
