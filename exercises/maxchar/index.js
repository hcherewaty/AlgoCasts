// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
    OTHER COMMON PROBLEMS THAT THIS TECHNIQUE CAN HELP SOLVE:
    - What is the most common character in a string?
    - Does string A have the same characters as string B (is it an anagram)?
    - Does the given string have any repeated characters in it?
*/

function maxChar(str) {

        //create a new array of strings to loop over
        let newStr = str.split('');
        //create an empty object to add each char from newStr in to with corresponding value
        let charMap = {};
        //create variable for max char
        let maxChar = '';
        //create variable for max number
        let max = 0;

        //loop over each element in newStr
        for(let i = 0; i < newStr.length; i++){
            //if newStr[i] is not contained within charMap object, then add it and set it's value = 1.
            if(!charMap[newStr[i]]){
                charMap[newStr[i]] = 1;
            } else {
                //otherwise, it's already in charMap and increment the charMap[newStr[i]]'s value by 1.
                charMap[newStr[i]]++;
            }
        }

        //iterate over charMap, checking if 
        for(let char in charMap){
            if(charMap[char] > max){
                max = charMap[char]
                maxChar = char;
            }
        }
        return maxChar;
}

module.exports = maxChar;


// let newStr = str.split('');
// let charMap = {};
// let max = 0;
// let maxChar = '';

// for(let i = 0; i < newStr.length; i++) {
//     if(!charMap[newStr[i]]){
//         charMap[newStr[i]] = charMap[newStr[i]] = 1;
//     } else {
//         charMap[newStr[i]]++;
//     }
// }

// for(let char in charMap){
//     if(charMap[char] > max){
//         max = charMap[char];
//         maxChar = char;
//     }
// }
// return maxChar;