// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

let n = 5;

function steps(n) {

    // From 0 to n, iterate through rows.
    for(let row = 0; row < n; row++) {
        let stair = '';
    // From 0 to n, iterate through columns.
        for(let column = 0; column < n; column++) {
            if(column <= row){
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        //while still in row for loop, console.log stair
        console.log(stair);
    }
}

steps(n);

module.exports = steps;
