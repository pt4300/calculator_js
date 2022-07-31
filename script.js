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

function operate(a,b,f,...args){
    return f(a,b)
}

console.log(operate(81,3,multiply));