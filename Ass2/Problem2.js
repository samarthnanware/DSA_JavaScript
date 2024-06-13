// Q.4)Write a program to reverse a array.

let originalArray = [1, 2, 3, 4];

let reversedArray = [];

console.log("Original Array: ");
console.log(originalArray);

for (let i = originalArray.length - 1; i >= 0; i--) {
    reversedArray.push(originalArray[i]);
}

console.log("Reversed Array: ");
console.log(reversedArray);
