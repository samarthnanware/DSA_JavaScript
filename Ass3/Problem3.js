// Find the Second Largest Element
// Given an array of n integers, write a program to find the second largest element in the array.

function findSecondLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    let largest = 0;
    let secondLargest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const arr = [1, 2, 3, 4, 5];
const secondLargest = findSecondLargest(arr);
console.log(`The second largest element is ${secondLargest}`);