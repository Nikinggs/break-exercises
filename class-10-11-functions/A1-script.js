/* Pure function takes inputs, return outputs, does not modify external variables, always produce same result for the same inputs. */

const operations = {
//basic operation

  add: (a, b) => a + b,

  subtract: (a, b) => a - b,

  multiply: (a, b) => a * b,

  divide: (a, b) =>
    b === 0
      ? "Error: Cannot divide by zero"
      : a / b,

  //scientific operation

  squareRoot: (n) =>
    n < 0
      ? "Error: Cannot square root a negative number"
      : Math.sqrt(n),

  power: (base, exponent) =>
    Math.pow(base, exponent),

  factorial: (n) => {
    if (n < 0) {
      return "Error: Factorial requires a non-negative number";
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }
};

function calculate(operationName, ...values) {

  const operation = operations[operationName];

  if (!operation) {
    return "Invalid operation";
  }

  return operation(...values);
}
console.log(calculate("add", 10, 5), calculate("divide", 10, 0),    
calculate("squareRoot", 81),  
calculate("factorial", 5),        
);
      