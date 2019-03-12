// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let newNum = '';
    let str = n.toString();
    str.split('');

    for(let i = str.length - 1; i >= 0; i--){
        newNum += str[i];

    }

    if(n < 0) {
        return parseInt(newNum) * -1;
    }

   return parseInt(newNum);
}


// function reverseInt(n) {
//     let newNum = '';
//     let str = n.toString();
//     str.split('');

//     for(let i = str.length - 1; i >= 0; i--){
//         newNum += str[i];

//     }

//    return parseInt(newNum) * Math.sign(n);
// }

module.exports = reverseInt;
