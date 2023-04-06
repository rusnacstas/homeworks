let btns = document.querySelectorAll('.num-button');
let operatorBtn = document.querySelectorAll('.operator');
let equal = document.querySelector('.calcActionButton');
let resultBox = document.querySelector('#result-box');
let clearBtn = document.querySelector('#clear');

let total = 0;
let operator;
let currentValue;

clearBtn.addEventListener('click', () => {
  resultBox.innerHTML = '0';
  total = 0;
  console.log(0);
});

btns.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (resultBox.innerHTML === '0') {
      resultBox.innerHTML = button.value;
      console.log(button.value);
    } else {
      resultBox.innerHTML += button.value;
      console.log(button.value);
    }
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener('click', (event) => {
    operator = event.target.value;
    console.log(event.target.value);
    currentValue = parseFloat(resultBox.innerHTML);
    total += currentValue;
    resultBox.innerHTML = '0';
  });
});

let calculate = function(total, currentValue, operator) {
  if (operator === '+') {
    return total + currentValue;
  } else if (operator === '-') {
    return total - currentValue;
  } else if (operator === '*') {
    return total * currentValue;
  } else if (operator === '/') {
    return total / currentValue;
  }
};

equal.addEventListener('click', () => {
  currentValue = parseFloat(resultBox.innerHTML);
  total = calculate(total, currentValue, operator);
  resultBox.innerHTML = total;
  console.log(total);
});