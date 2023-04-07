// Complete la solución para que invierta la cadena que se le pasó.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    return str
        .split('')
        .reverse()
        .join('');
}