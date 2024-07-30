const removeFromArray = function() {
    const array = arguments[0]
    const deletedIndices = []
    for (let i=1;i<arguments.length;i++){
        for (let j=0;j<array.length;j++){
            if (array[j] === arguments[i]){
                deletedIndices.push(j);
            }
        }
    }
    deletedIndices.sort();
    for (let i=deletedIndices.length-1; i>=0; i--){
        array.splice(deletedIndices[i],1)
    }
    return array
};  

// Do not edit below this line
module.exports = removeFromArray;
