const sumAll = function(num1,num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && num1 >=0 && num2 >= 0 && Number.isInteger(num1) && Number.isInteger(num2)){
        const array = [num1,num2];
        array.sort();
        sum = 0;
        for (i=array[0];i<=array[1];i++){
            sum += i;
        }
        return sum
    }
    else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1.5,4000))