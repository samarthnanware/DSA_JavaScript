// Find the Missing Number
// Given an array of n-1 integers in the range of 1 to n with no duplicates in the array. One of the integers is missing in the array. Find the missing integer.

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum=0;
    for(let i=0;i<arr.length;i++){
        actualSum=actualSum+arr[i];
    }
    
    
    return expectedSum - actualSum;
}

const arr = [1, 2, 4, 5, 6];
const missingNumber = findMissingNumber(arr);
console.log(`The missing number is ${missingNumber}`);