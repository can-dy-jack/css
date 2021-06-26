const mdTxtArea = document.getElementById('md-txt-area');
const md = document.getElementById("md");

mdTxtArea.addEventListener('keyup',()=>{
    var converter = new showdown.Converter();
    var html = converter.makeHtml(mdTxtArea.value);
    md.innerHTML = html;
})
