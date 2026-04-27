let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let firstNumber, secondNumber, operator;

function operate(a, op, b) {
   let answer;
   if (op == '+') {
      answer = add(a, b);
   } else if (op == '-') {
      answer = subtract(a, b);
   } else if (op == 'x') {
      answer = multiply(a, b);
   } else if (op == '/') {
      answer = divide(a, b);
   }

   return answer;
}
