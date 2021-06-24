function score2gpa(score){
    if(score<60){
        data = 0.0
    }else if(score <64){
        data = 1.0
    }else if(score < 66){
        data = 1.5
    }else if(score < 68){
        data = 1.7
    }else if(score < 72){
        data = 2.0
    }else if(score < 75){
        data = 2.3
    }else if(score < 78){
        data = 2.7
    }else if(score < 82){
        data = 3.0
    }else if(score < 85){
        data = 3.3
    }else if(score < 90){
        data = 3.7
    }else{
        data = 4.0
    }
    return data
}

const cal = document.getElementById('cal');
const input = document.getElementsByTagName('input');

const res = document.getElementById('result');

cal.addEventListener('click',()=>{
    // let len = input.length
    // for(i=0;i<len;i++)
    if(res.textContent == "你的绩点是：" & input[0].value != null){
        data = score2gpa(input[0].value)
        res.textContent += data;
        // input[0].value
        // res.innerHTML += input[1].value; 
    }
})

const clc = document.getElementById('clean');
clc.addEventListener('click',()=>{
    res.textContent = "你的绩点是：";
})


