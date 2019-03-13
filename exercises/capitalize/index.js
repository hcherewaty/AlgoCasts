// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     let words = [];
//     let newStr = str.split(' ');

//     for(let word of newStr){
//        words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return words.join(' ');
// }

function capitalize(str) {
    //the first letter will always be capitalized
    let result = str[0].toUpperCase();

    //starting at index 1 of string:
    for(let i = 1; i < str.length; i++) {
        //first check if left of the current character is a space, if it is, capitalize
        if(str[i - 1] === ' '){
            //add to result
            result += str[i].toUpperCase();
        } else {
            //otherwise, add element as is to result
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;
