const add = function(a,b) {
  let sum = a+b
  return sum
};

const subtract = function(a,b) {
	let sub = a - b
  return sub
};

const sum = function(array) {
	const arr = array
  if (arr.length == 0){
    return 0
  }else{
    sum = 0
    for(let i=0;i<arr.length;i++){
      sum += arr[i]
    }
    return sum
  }
};

const multiply = function() {
  const array = arguments[0]
  total = 1
  for(let i=0;i<array.length;i++){
    total *= array[i]
  }
  return total
};

const power = function(a,b) {
	let num = a;
  let pow = b;
  total = 1
  for (let i=0; i<b;i++){
    total *= a;
  }
  return total
};

const factorial = function(a) {
	let num = a;
  if (num == 0){
    return 1
  }else{
    fact = 1
    for (let i=a; i>0; i--){
      fact *= i
    }
    return fact
  }
  
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
