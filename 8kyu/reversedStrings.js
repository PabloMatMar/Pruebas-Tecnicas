https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Complete la solución para que invierta la cadena que se le pasó.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    return str
        .split('')
        .reverse()
        .join('');
};
//solution(/*"Pasale una cadena y la invertirá" */)