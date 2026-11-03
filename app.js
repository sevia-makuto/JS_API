const calculator = require('./calculator');
const student = require('./student');

const num1 = 10;
const num2 = 5;

console.log(`Addition: ${calculator.add(num1, num2)}`);
console.log(`Subtraction: ${calculator.subtract(num1, num2)}`);
console.log(`Multiplication: ${calculator.multiply(num1, num2)}`);
console.log(`Division: ${calculator.divide(num1, num2)}`);
console.log(`Student Name: ${student.getStudentName()}`);
console.log(`Student Age: ${student.getStudentAge()}`);