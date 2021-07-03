const mdTxtArea = document.getElementById('md-txt-area');
const md = document.getElementById("md");

mdTxtArea.addEventListener('keyup', markdown2html);

function markdown2html() {
    let converter = new showdown.Converter({
        tables: true,
        optionKey: 'value',
        tasklists: true
    });
    let html = converter.makeHtml(mdTxtArea.value);
    md.innerHTML = html;
}



const csBtn = document.getElementById('btn-test');
csBtn.addEventListener('click', () => {
    mdTxtArea.value = '# 测试案例\n## 标题\n### 标题\n#### 标题\n`code`\n'+
    '- one\n- two\n- three\n\n'+
    '|表头|列1|列2|\n|:---:|:---:|:---:|\n|行|row|column|\n|行|row|column|\n'+
    '> 引用文本\n\n'+
    '[link](https://kartjim/css/markdownEditor/)\t\n'+
    '<center>![img](https://z3.ax1x.com/2021/06/26/R87Rkq.png)</center>\n'+
    '- [x] list\n- [ ] list\n- [x] 已完成\n- [ ] 未完成\n'+
    '### 可以使css好看的属性\n- border + border-radius\n- border-shadow\n- box-shadow\n- transform\n- animation + @keyframes + transition\n- font\n\t* font-family\n\t* font-size\n\t* font-weight\n- padding + margin\n- ...'+
    '';
    markdown2html();
})

