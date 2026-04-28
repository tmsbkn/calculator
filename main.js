let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let exponent = (a, b) => a ** b;
let invert = (a) => a * -1;
function percent(a) {
   if (secondNumber == '') {
      firstNumber = firstNumber / 100;
   } else {
      secondNumber = firstNumber * (secondNumber / 100);
   }
   printHistory();
}

let firstNumber = '',
   secondNumber = '',
   operator = '',
   answer = '';

const currentLine = document.getElementById('current-line');
const history = document.getElementById('history');

let printAnswer = (a) => (currentLine.innerText = a);
let printHistory = () => (history.innerText = firstNumber + operator + secondNumber);
let clearNum = (a) => (a = '');

function operate(aRAW, op, bRAW) {
   let a = Number(aRAW);
   let b = Number(bRAW);
   if (op == '+') {
      answer = add(a, b);
   } else if (op == '-') {
      answer = subtract(a, b);
   } else if (op == 'x') {
      answer = multiply(a, b);
   } else if (op == '/') {
      answer = divide(a, b);
   } else if (op == '^') {
      answer = exponent(a, b);
   }
   printHistory();
   printAnswer(answer);
   return answer;
}
function input(e) {
   const buttonPressed = e.target.innerText;
   if (answer !== '') {
      firstNumber = answer;
      secondNumber = '';
      answer = '';
      printHistory();
   }
   //    If an operator button hasn't been pressed generate the first number:
   if (operator === '') {
      if (firstNumber.includes('.') && buttonPressed == '.') {
         console.log('error');
      } else {
         firstNumber += buttonPressed;
         console.log(firstNumber);
      }
      printHistory();
   } else {
      if (secondNumber.includes('.') && buttonPressed == '.') {
         console.log('error');
      } else {
         secondNumber += buttonPressed;
         console.log(secondNumber);
      }
      printHistory();
   }
}
function operatorPressed(e) {
   const buttonPressed = e.target.innerText;
   if (buttonPressed == '%') {
      percent();
   } else if (buttonPressed == '+/-') {
      invert();
   } else {
      if (answer !== '') {
         firstNumber = answer;
         secondNumber = '';
         answer = '';
      }
      if (secondNumber !== '') {
         operate(firstNumber, operator, secondNumber);
      }
      operator = buttonPressed;
      printHistory();
      console.log(operator);
   }
}

let buttons = document.querySelectorAll('.input-area div');

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function () {
   firstNumber = '';
   secondNumber = '';
   operator = '';
   answer = '';
   printHistory();
});
const numbers = document.querySelectorAll('.number');
numbers.forEach((element) => {
   element.addEventListener('click', input);
});
const operators = document.querySelectorAll('.operator');
operators.forEach((element) => {
   element.addEventListener('click', operatorPressed);
});
const total = document.getElementById('total');
total.addEventListener('click', function () {
   console.log('totaled');
   operate(firstNumber, operator, secondNumber);
});
console.log(operators);

console.log(buttons);
console.log(buttons[17]);
