const display = document.querySelector("#display");

const numbers = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operations");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal");

let num1 = "";
let num2 = "";
let operator = "";

// numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    if (display.innerText === "0" || operator === true) {
      operator = false;
      display.innerText = numbers[i].textContent;
    } else if (operator) {
      display.innerText += numbers[i].textContent;
      num2 += numbers[i].textContent;
      console.log("num2: " + num2);
      return num2;
    } else {
      display.innerText += numbers[i].textContent;
      num1 += numbers[i].textContent;
      console.log("num1: " + num1);
      return num1;
    }
  });
}

// operations
for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", (e) => {
    if (!num1) return;
    else {
      operator = operations[i].textContent;
      console.log("operator: " + operator);
      display.innerText = "";
      return operator;
    }
  });
}

function calculate() {
  let result;
  if (!operator) alert("NO OPERATOR");
  if (!num1) alert("NO NUM1");
  if (!num2) alert("NO NUM2");
  else if (operator === "÷") {
    result = num1 / num2;
  } else if (operator === "×") {
    result = num1 * num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "+") {
    result = +num1 + +num2;
  } else alert("Unknown operator!");
  display.innerText = result;
}

// clear button
clear.addEventListener("click", clearing);

function clearing() {
  display.innerText = "";
  num1 = "";
  num2 = "";
  operator = false;
}

// equal button
equal.addEventListener("click", () => {
  calculate();
  num1 = "";
  num2 = "";
  operator = true;
});

// decimal button
decimal.addEventListener("click", () => {
  if (display.innerText.includes(".")) {
    return;
  }

  display.innerText += ".";
  if (!num1.includes(".")) {
    num1 += ".";
  }
  console.log(num1);
  if (operator) {
    num2 += ".";
    console.log(num2);
  }
});
