const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(...args) {
  let total = 0
  for (let arg of args[0]) {
    total += Number(arg)
  }
  let type = typeof total
  return total
};

const multiply = function(...args) {
  let total = Number(args[0][0])
  for (let i = 1; i < args[0].length; i++) {
    total *= Number(args[0][i])
  }
  return total
};

const power = function(a, b) {
  let total = a
  for (let i = 1; i < b; i++) {
    total *= a
  }
  return total
};

const factorial = function(number) {
	if (!number) return 1
  let total = 1
  for (let i = 2; i <= number; i++) {
    total *= i
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
