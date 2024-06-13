//  Q1) Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements 
//  in A[] whose sum is exactly x.

function hasPairWithSum(numbers, targetSum) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === targetSum) {
                return true;
            }
        }
    }
    return false;
}

const numbers = [1, 2, 3, 4, 5];
let targetSum = 8;

if (hasPairWithSum(numbers, targetSum)) {
    console.log(`There exist elements in the array whose sum is ${targetSum}`);
} else {
    console.log(`No such pair exists in the array.`);
}
