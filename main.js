let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let exponent = (a, b) => a ** b;
let percent = (a) => a / 100;
let invert = (a) => a * -1;

let firstNumber = '',
   secondNumber = '',
   operator = '';

const answerField = document.getElementById('answer-field');

function operate(aRAW, op, bRAW) {
   let answer;
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

   answerField.innerText = answer;
   firstNumber = String(answer);
   operator = '';
   secondNumber = '';
   return answer;
}
function input(e) {
   const buttonPressed = e.target.innerText;
   //    If an operator button hasn't been pressed generate the first number:
   if (operator === '') {
      if (firstNumber.includes('.') && buttonPressed == '.') {
         console.log('error');
      } else {
         firstNumber += buttonPressed;
         console.log(firstNumber);
      }
      answerField.innerText = firstNumber;
   } else {
      if (secondNumber.includes('.') && buttonPressed == '.') {
         console.log('error');
      } else {
         secondNumber += buttonPressed;
         console.log(secondNumber);
      }
      answerField.innerText = secondNumber;
   }
}
function operatorPressed(e) {
   const buttonPressed = e.target.innerText;

   operator = buttonPressed;
   console.log(operator);
}

let buttons = document.querySelectorAll('.input-area div');

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
const total = document.getElementById('total');
total.addEventListener('click', function () {
   console.log('totaled');

   operate(firstNumber, operator, secondNumber);
});
console.log(operators);

numbers.forEach((element) => {
   element.addEventListener('click', input);
});

operators.forEach((element) => {
   element.addEventListener('click', operatorPressed);
});

console.log(buttons);
console.log(buttons[17]);
