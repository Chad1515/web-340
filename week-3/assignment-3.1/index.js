// To use custom module declare the code like this.  
const myCalculation = require('./LocalModule.js');  
// Declare two variable  
const num1 = 5;  
const num2 = 4;  
  
// consume the existing function from LocalModule.js  
   
console.log(`Addition of ${num1} and ${num2} is:  ${myCalculation.calc.add(num1, num2)}`);  
console.log(`Subtraction of ${num1} and ${num2} is: ` + myCalculation.calc.subtract(num1, num2));  
console.log(`Multiply of ${num1} and ${num2} is: ` + myCalculation.calc.multiply(num1, num2));  
console.log(`Divide of ${num1} and ${num2} is: ` + myCalculation.calc.divide(num1, num2));  