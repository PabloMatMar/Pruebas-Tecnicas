// https://www.codewars.com/kata/54bb6f887e5a80180900046b

// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

const longestPalindrome = str => {
    const letters = str.split('');
    const reverseLetters = letters.reverse();
    const solution = [];
    for (let i = 0; i < letters.length; i++)
        for (let j = 0; j < letters.length; j++) {
            let reverseText = letters.slice(i, (letters.length - j)).reverse().join('');
            let normalText = letters.slice(i, (letters.length - j)).join('');
            if (solution.length < 1 && reverseText == normalText)
                solution.unshift(normalText);
            else if (reverseText == normalText && normalText.length > solution[0].length)
                solution.unshift(normalText);
            reverseText = reverseLetters.slice(i, (reverseLetters.length - j)).reverse().join('');
            normalText = reverseLetters.slice(i, (reverseLetters.length - j)).join('');
            if (solution.length < 1 && reverseText == normalText)
                solution.unshift(normalText);
            else if (reverseText == normalText && normalText.length > solution[0].length)
                solution.unshift(normalText);
        };
    return solution[0] == undefined ? 0 : solution[0].length;
};

//longestPalindrome(/*Pasale un string como argumento, devolverá la longitud del palindromo mas largo que
// encuentre */)