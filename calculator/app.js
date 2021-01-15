const display = document.querySelector('#display');

const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operations');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const decimal = document.querySelector('#decimal');

let num1 = "";
let num2 = "";
let operator ;

// numbers 
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',() => {
        if (display.value === "0"){
            display.value = numbers[i].textContent;
        } else if (operator) {
            display.value += numbers[i].textContent;
            num2 += numbers[i].textContent;
            console.log("num2: " + num2);
            return num2;
        } else {
            display.value += numbers[i].textContent;
            num1 += numbers[i].textContent;
            console.log("num1: " + num1);
            return num1;
        }
    });
}

// operations
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', (e)=> {
        if (!num1) return;
        else {
            operator = operations[i].textContent;
            console.log("operator: " + operator);
            display.value = "";
            return operator;
        }
    });
}

function calculate() {
    let result;
    if (!operator) alert('NO OPERATOR');
    if (!num1) alert('NO NUM1');
    if (!num2) alert('NO NUM2');
    else if (operator === '÷') {
        result = num1 / num2;
    } else if (operator === '×') {
        result = num1 * num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '+') {
        result = +num1 + +num2;
    } else alert('Unknown operator!');
    display.value = result;    
}

// clear button
clear.addEventListener('click', clearing);

function clearing() {
    display.value = "";
    num1 = "";
    num2 = "";
    operator = null;
}

// equal button
equal.addEventListener('click', () => {
    calculate();
    num1 = "";
    num2 = "";
    operator = null;
    
});
