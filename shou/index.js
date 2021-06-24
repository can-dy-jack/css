const cal = document.getElementById('cal');
const input = document.getElementsByTagName('input');

const res = document.getElementById('result');

cal.addEventListener('click',()=>{
    // let len = input.length
    // for(i=0;i<len;i++)
    if(res.textContent == "你的绩点是：" & input[0].value != null){
        res.textContent += input[0].value
    }
    // res.innerHTML += input[1].value; 
})

const clc = document.getElementById('clean');
clc.addEventListener('click',()=>{
    res.textContent = "你的绩点是：";
})


