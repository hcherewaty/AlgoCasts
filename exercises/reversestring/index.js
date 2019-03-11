// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    //create a new array of characters and use reduce on that array:
    //reduce is used to take all elements of an array and reduce them down into one singular value
    //it takes two arguements, first is an arrow function and the second is a starting initial value for the function, in this case, an empty string.
    //Whenever reduce runs it takes the initial starting argument, passes it into the arrow function as the first argument and  whatever is returned from that inner function is used as the starting argument for every successive run of the function.  In total, the function runs one time for every element within the array.
    //reveresed is the reversed string
    //character is the element (character) that we're currently operating on in the array
    return str.split('').reduce( (reversed, character) => {
        return character + reversed;
    }, '');



}

module.exports = reverse;

// function reverse(str) {
//     if(str < 2) {
//         return str;
//     }

//     let newStr = '';

//     for(let i = str.length - 1; i >= 0; i--){
//         newStr += str[i];
//     }
//     return newStr;
// }


// function reverse(str) {

    //create a new array and call split on string.  When split is called with an empty string(''), it takes every character from the string and adds it as it's own individual character in the array.
    // const arr = str.split('');

    //call reverse method to reverse the order of the characters in place.
    // arr.reverse();

    //call join method with an emptry string passed in on arr to join the reversed characters back into a string.  And return result.
    // return arr.join('');

    //cleaned up:  return str.split('').reverse().join('');

// }