// Write a program to print start pattern as given below.
//       *
//       * *
//       * * *


let numRows = 5;
let starPattern = "";
for (let i = 1; i <= numRows; i++) {
    for (let j = 1; j <= i; j++) {
        starPattern += "*";
    }
    starPattern += "\n";
}
console.log(starPattern);
