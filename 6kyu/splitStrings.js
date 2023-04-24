https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// Complete la solución para que divida la cadena en pares de dos caracteres. Si la cadena contiene un
// número impar de caracteres, debe reemplazar el segundo carácter faltante del par final con un guión
// bajo ('_').

// Ejemplos:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    return str
        .split('')
        .map((e, i, arr) => {
            if (i !== arr.length - 1) return e + arr[i + 1]
            else if (i === arr.length - 1 && i % 2 === 0) return e + '_'
        })
        .filter((e, i) => i % 2 === 0);
};

//solution(/*Pásale un string, agrupará los caracteres de dos en dos y los pusheara como elementos dentro
// de un array, devolvera dicho array */)