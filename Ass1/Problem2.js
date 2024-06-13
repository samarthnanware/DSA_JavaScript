// Q2 )Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times.

function countOccurrences(array) {
    for (let i = 0; i < array.length; i++) {
        let occurrence = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                occurrence++;
            }
        }
        console.log(`${array[i]}:${occurrence}`);
    }
};

let array = [1, 1, 2, 3, 4, 4];
countOccurrences(array);
