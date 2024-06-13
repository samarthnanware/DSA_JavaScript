// Q 3)Write a program to find if the given string is pallindrome.
 
function isPalindrome(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] != word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
}

let word = 'racecar';
console.log(isPalindrome(word));
