const sumAll = function(a, b) {

  let num1;
  let num2;

  if (a > b) {
    num2 = a;
    num1 = b;
  } else if (a < b) {
    num1 = a;
    num2 = b;
  }

  let sum = 0;

  for (let i = num1; i <= num2; i++) {
    if (num1 < 0 || num2 < 0) {
      return "ERROR";
    } else {  
    sum += i;
    }
  }

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
