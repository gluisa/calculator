let numbers = document.querySelectorAll(".number");
let decimal = document.querySelector(".decimal");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let input = document.querySelector("input");
let backspace = document.querySelector(".backspace");

let firstValue = "";
let operator = "";
let secondValue = "";

numbers.forEach((number) =>
  number.addEventListener("click", function (e) {
    input.value += e.target.textContent;
  })
);

decimal.addEventListener("click", function (e) {
  if (!input.value.includes(".")) {
    input.value += e.target.textContent;
  }
});

operators.forEach((operatorBtn) =>
  operatorBtn.addEventListener("click", function (e) {
    firstValue = input.value;
    operator = e.target.textContent;
    input.value = "";
  })
);

equal.addEventListener("click", function (e) {
  secondValue = input.value;
  let result = operate(firstValue, secondValue, operator);
  input.value = result;
  firstValue = "";
  secondValue = "";
  operator = "";
});

backspace.addEventListener("click", function (e) {
  input.value = input.value.substring(0, input.value.length - 1);
});

clear.addEventListener("click", function (e) {
  input.value = "";
  firstValue = "";
  secondValue = "";
  operator = "";
});

document.addEventListener("keydown", function (e) {
  handleKeyPress(e.key);
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  } else return a / b;
}

function operate(firstNum, secondNum, operation) {
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);

  if (operation === "+") {
    return add(firstNum, secondNum);
  } else if (operation === "-") {
    return subtract(firstNum, secondNum);
  } else if (operation === "*") {
    return multiply(firstNum, secondNum);
  } else if (operation === "/") {
    return divide(firstNum, secondNum);
  } else return "Invalid operation";
}

function handleKeyPress(key) {
  if (!isNaN(key)) {
    input.value += key;
  } else if (key === ".") {
    if (!input.value.includes(".")) {
      input.value += key;
    }
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    firstValue = input.value;
    operator = key;
    input.value = "";
  } else if (key === "Enter" || key === "=") {
    secondValue = input.value;
    let result = operate(firstValue, secondValue, operator);
    input.value = result;
    firstValue = "";
    secondValue = "";
    operator = "";
  } else if (key === "Backspace" || key === "Delete") {
    input.value = input.value.substring(0, input.value.length - 1);
  } else if (key === "Escape") {
    input.value = "";
    firstValue = "";
    secondValue = "";
    operator = "";
  }
}