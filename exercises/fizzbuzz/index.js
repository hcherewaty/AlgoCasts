// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

let n = 15;

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){ //starting at 1 and while i is less than or equal to n, check if each number (i) is first divisible by both 3 and 5 (ie. 15), if it is: print FizzBuzz; else if it's divisible by 3, print Fizz; else if it's divisible by 5, print Buzz; otherwise, print the number (i).
        if(i % 15 === 0){
            console.log('fizzbuzz');
        } else if(i % 3 === 0){
            console.log('fizz');
        } else if(i % 5 === 0){
            console.log('buzz')
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(n);

module.exports = fizzBuzz;
