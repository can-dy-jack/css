const circle = document.getElementById('circle');
const input = document.getElementById('percent');
const number = document.querySelector('.card-number');
const tooltip = document.querySelector('.tooltip');

function circlePercent(){
    var change = 565.2 - 565.2*input.value /100;
    circle.style.strokeDashoffset = change;
}

function isNumberic(event){
    if(event.keyCode<48 || event.keyCode >57){ // 只能输入数字
        return false;
    }
}

function changePercent(){
    if(input.value>100){
        tooltip.style.opacity = 1;
        tooltip.classList.add('fade-in');
    }else{
        tooltip.style.opacity = 0;
        tooltip.classList.remove('fade-in');
        number.innerHTML = Number(input.value) + '%';
        circlePercent();input.value = '';
    }
    
}