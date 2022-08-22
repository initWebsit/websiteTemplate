/**
 * 文件下载方法
 * @param {y} url
 * @param {*} filename
 * type = 1则需要携带_language参数
 */
export default function fileDownload(url, filename, type = 0) {
    let tempLink = document.createElement("a")
    tempLink.style.display = "none"
    tempLink.href = url
    if (type) {
        tempLink.href += '&_language=' + locales.getLanguage()
    }
    tempLink.setAttribute("download", filename)
    if (typeof tempLink.download === "undefined") {
        tempLink.setAttribute("target", "_blank")
    }
    document.body.appendChild(tempLink)
    tempLink.click()
    setTimeout(function () {
        document.body.removeChild(tempLink)
    }, 200)
}