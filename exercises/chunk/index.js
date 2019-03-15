// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

let arr = [1, 2, 3, 4, 5];
let n = 2;

function chunk(array, size) {
    let result = [];
    let subArr = [];
    let counter = 0;

    for(let i = 0; i < array.length; i++){
        if(counter < size){
            subArr.push(array[i])
            counter++;
        }
        if(counter === size){
            result.push(subArr);
            counter = 0;
            subArr = [];
        } 
    }
    if(subArr.length){
        result.push(subArr);
    }
    return result;
}

chunk(arr, n);

module.exports = chunk;
