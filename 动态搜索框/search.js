// 搜索 - 跳转至百度
var searchInput = document.getElementsByClassName("search-input")[0];
function search() {
    var keywords = searchInput.value;
    var url = "https://www.baidu.com/s?wd=" + keywords;
    window.open(url);
}
// 