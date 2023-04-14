https://www.codewars.com/kata/5208f99aee097e6552000148

// Complete la solución para que la función rompa el camel case usando un espacio entre palabras.

// Ejemplo
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    return string
        .split('')
        .map(item => {
            return item.toLowerCase() === item ? item : ` ${item}`
        })
        .join('')

};


//Solucion con regex:

// function solution(string) {
//     return (string.replace(/([A-Z])/g, ' $1'));

// }

//solution(/*Pasale un sting de palabras concatenadas con camel case(mayuscula en la primera letra de cada palabra desde la segunda en adelante) y devolvera las palabras separadas */)