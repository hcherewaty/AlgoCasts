// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let newStr = '';

    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }

    if(newStr !== str){
        return false;
    }
    return true;
}

module.exports = palindrome;

/*

function palindrome(str) {
    const reversed = str.split('').reverse().join('');

     return str === reversed; //returns a boolean value 
}

-----------

//not an ideal solution, but makes use of an advanced array helper
function palidrome(str){
    return str.split('').every( (char, idx) => {
        return char === str[str.length - i - 1]
    });
}



*/