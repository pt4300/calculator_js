const displayText = document.querySelector('.display-text');
const displayHistory = document.querySelector('.display-history');
const inputNumber = document.querySelectorAll('.number');
const inputOperand = document.querySelectorAll('.operand');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const equalButton = document.querySelector('#equal');
let previous_val='', current_val='', cached_operation='';

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
    cached_operation='';
    previous_val = '';
    current_val = '';
    displayText.innerText = '';
    displayHistory.innerText = '';
}

function delete_number(){
    current_val = current_val.slice(0,-1);
    updateDisplay();
}
function select_operation(oper){
    //do not record operand if there is no value input
    cached_operation = oper;
    if(!current_val)return;
    if(previous_val){
        operate(cached_operation);
    }
    console.log(cached_operation);
    previous_val = current_val;
    current_val = '';
}

function appendNumber(num){
    if(displayText.textContent.includes('.')&&num.textContent===".") return;
    current_val += num;
    displayText.textContent = current_val;
}

function update(){

    inputNumber.forEach(key=>{
        key.addEventListener('click',()=>{
            appendNumber(key.innerText);
        });
    })
    inputOperand.forEach(key=>{
        key.addEventListener('click',()=>{
            select_operation(key.innerText);
        });
    })
    clearButton.addEventListener('click',()=>{
        clear();
    });
    deleteButton.addEventListener('click',()=>{
        delete_number();
    });
    equalButton.addEventListener('click',()=>{
        operate(cached_operation);
    });

}
function updateDisplay(){
    displayText.textContent = current_val;
}

function operate(operation){
    displayHistory.textContent += previous_val + operation + current_val;

    switch(operation){
        case '+':
            current_val = add(parseFloat(previous_val),parseFloat(current_val)).toString();
            break;
        case 'x':
            current_val = multiply(parseFloat(previous_val),parseFloat(current_val)).toString();
            break;
        case '-':
            current_val = subtract(parseFloat(previous_val),parseFloat(current_val)).toString();
            break;
        case '/':
            current_val = divide(parseFloat(previous_val),parseFloat(current_val)).toString();
            if(current_val===Infinity){
                displayText.textContent = "∞";
            }
            break;
        default:
            break;
    }
    updateDisplay();
}

update();
