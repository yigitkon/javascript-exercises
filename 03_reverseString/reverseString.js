const reverseString = function(string) {
    reverse_string_array = []
    for (let i=string.length-1; i>=0;i--){
        reverse_string_array.push(string[i])
    }
    return reverse_string_array.join("")
};

// Do not edit below this line
module.exports = reverseString;

