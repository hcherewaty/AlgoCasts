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

//modulo determines the remainder.  Can use module to determine if a number is a multiple of another

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){ //starting at 1 and while i is less than or equal to n, check if each number (i) is first divisible by both 3 and 5 (ie. 15), if it is: print FizzBuzz; else if it's divisible by 3, print Fizz; else if it's divisible by 5, print Buzz; otherwise, print the number (i).

        //is the number a multiple of both 3 & 5:
        if(i % 15 === 0){
            console.log('fizzbuzz');
            //we don't want a bunch of extra if statements that keep the loop running for each number, so we use else if instead.
            //otherwise, if number is a multiple of 3:
        } else if(i % 3 === 0){
            console.log('fizz');

            //otherwise, if the number is a multiple of 5:
        } else if(i % 5 === 0){
            console.log('buzz');

            //otherwise, if none of these conditions are true, then just print the number:
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(n);

module.exports = fizzBuzz;
