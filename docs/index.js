function score2gpa(score){
    score = parseInt(score);
    if(score<60){
        data = 0.0;
    }else if(score <64){
        data = 1.0;
    }else if(score < 66){
        data = 1.5;
    }else if(score < 68){
        data = 1.7;
    }else if(score < 72){
        data = 2.0;
    }else if(score < 75){
        data = 2.3;
    }else if(score < 78){
        data = 2.7;
    }else if(score < 82){
        data = 3.0;
    }else if(score < 85){
        data = 3.3;
    }else if(score < 90){
        data = 3.7;
    }else if(score <=100){
        data = 4.0;
    }else{
        data = NaN;
    }
    return data
}

const cal = document.getElementById('cal');
const input = document.getElementsByTagName('input');

const res = document.getElementById('result');

cal.addEventListener('click',()=>{
    let score=[],credit=[];
    for(i=0;i<input.length;i++){
        if(i<input.length/2){
            if(parseInt(input[i].value) != NaN){
                score[i] = input[i].value*1;
            }
        }else{
            if((input[i].value*1) != NaN){
                credit[i-input.length/2] = input[i].value*1;
            }
        }
    }
    let allGPA = [],sumcredit = 0,gpa = 0;
    for(i=0;i<score.length;i++){
        allGPA[i] = score2gpa(score[i]);
        sumcredit += credit[i];
    }
    for(j=0;j<score.length;j++){
        if(allGPA[j] != NaN){
            gpa += allGPA[j]*(credit[j]/sumcredit);
        }
    }
    res.textContent = "你的绩点是：" + gpa.toFixed(4);
})

const clc = document.getElementById('clean');
clc.addEventListener('click',()=>{
    res.textContent = "";
    for(i=0;i<input.length;i++){
        input[i].value = "";
    }
})

const rule = document.getElementById('rule');
rule.addEventListener('click',()=>{
    window.open('https://github.com/can-dy-jack/css/blob/main/docs/GPA.md');
})
