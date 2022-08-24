// create a variable calc that have four function add, subtract, multiply and divide.  
  
const calc = {  
    // Add the two number  
    add: function (num1, num2) {  
        return num1 + num2  
    },  
    // Subtract the two number  
    subtract: function (num1, num2) {  
        return num1 - num2;  
    },  
    // multiply the two number  
    multiply: function (num1, num2) {  
        return num1 * num2;  
    },  
    // divide the two number  
    divide: function (num1, num2) {  
        return num1 / num2  
    }  
};  
  
// export the modules to consume on different modules.  
module.exports.calc = calc;  