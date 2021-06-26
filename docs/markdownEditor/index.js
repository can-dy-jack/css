const mdTxtArea = document.getElementById('md-txt-area');
const md = document.getElementById("md");

mdTxtArea.addEventListener('keyup',()=>{
    var converter = new showdown.Converter({
            tables: true,optionKey: 'value',tasklists: true
    });
    var html = converter.makeHtml(mdTxtArea.value);
    md.innerHTML = html;
})
