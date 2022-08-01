const displayText = document.querySelector('.display-text');
const displayHistory = document.querySelector('.display-history');
const inputNumber = document.querySelectorAll('.number');
const inputOperand = document.querySelectorAll('.operand');
const clearButton = document.querySelector('#clear');
let previous_val='', current_val='', operation='';

function add(...args){
    sum = 0;
    for(let num of args){
        sum+=num;
    }
    return sum;
}


function subtract(a,b,...args){
    let initial= a-b;
    if(args.length===0){
        return initial;
    }
    for(let num of args){
        initial -=num;
    }
    return initial
}

function multiply(a,b,...args){
    let initial = a*b;
    if(args.length===0){
        return initial
    }
    for(let num of args){
        initial *=num;
    }
    return initial
}

function divide(a,b,...args){
    let initial = a/b;
    if(args.length===0){
        return initial
    }
    for(let num of args){
        initial /=num;
    }
    return initial
}
function clear(){
    operation='';
    previous_val = '';
    current_val = '';
    displayText.innerText = '';
    displayHistory.innerText = '';
}

function delete_number(){
    return 
}
function select_operation(oper){
    //do not record operand if there is no value input
    if(!current_val)return;
    operate(oper);
}

function appendNumber(num){
    if(displayText.textContent.includes('.')&&num.textContent===".") return;
    current_val += num;
    displayText.textContent = current_val;
}
function showDisplay(){

    inputNumber.forEach(key=>{
        key.addEventListener('click',()=>{
            appendNumber(key.innerText);
        });
    })
    inputOperand.forEach(key=>{
        key.addEventListener('click',()=>{
            select_operation(key.innerText);
            previous_val = current_val;
            current_val = '';
        });
    })
    clearButton.addEventListener('click',()=>{
        clear();
    });

}

function operate(operation){
    if(!previous_val||!current_val)return
    displayHistory.textContent += previous_val + operation + current_val;
    switch(operation){
        case '+':
            console.log(current_val);
            current_val = add(parseFloat(previous_val),parseFloat(current_val)).toString();
            displayText.textContent = current_val;
        default:
            return
    }
}

showDisplay();
