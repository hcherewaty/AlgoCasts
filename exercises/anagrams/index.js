// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     if(stringA.length !== stringB.length){
//         return false;
//     }

//     let newStrA = stringA.replace(/[^\w]/g, '').toLowerCase();
//     let newStrB = stringB.replace(/[^\w]/g, '').toLowerCase();

//     let charMap = {};

//     for(let i = 0; i < newStrA.length; i++){
//         if(!charMap[newStrA[i]]) {
//             charMap[newStrA[i]] = charMap[newStrA[i]] = 1;
//         } else {
//             charMap[newStrA[i]]++;
//         }
//     }

//     for(let j = 0; j < newStrB.length; j++){
//         if(!charMap[newStrB[j]]){
//             return false;
//         } else {
//             charMap[newStrB[j]] -= 1;
//         }
//     }
//     return true;
// }

// function anagrams(stringA, stringB){
//     let aCharMap = buildCharMap(stringA);
//     let bCharMap = buildCharMap(stringB);

//     //count the number of keys contained in both objects to check if they're of equal length
//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false;
//     }

//     //for of for object
//     for(let char in aCharMap){
//         if(aCharMap[char] !== bCharMap[char]){
//             return false;
//         }
//     }
//     return true;
// }

// function buildCharMap(str){
//     let charMap = {};

//     //assign key (char) to character map of the thing we're looking at and increment the value at that character
//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         //add char to charMap and increment by 1 OR assign initial value to 1 if it isn't already there
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }



// ========================= ANOTHER WAY

//take  out spaces and special characters, lowercase all characters,
//then, sort the array
//if sorted stringA = sorted stringB, then they are anagrams

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);

}

//helper function
function cleanString(str) {
    // 1. replace, 2. lowercase, 3. split on empty str to get array, 4. sort that array, 5. join array back into a string
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
