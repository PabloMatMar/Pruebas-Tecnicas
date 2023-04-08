https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d


// Complete la solución para que devuelva verdadero si el primer argumento (cadena) pasado termina con el segundo argumento (también una cadena).

// Ejemplos:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
    let equal = false;
    let cutSecuence = true;
    let strArr = str.split('');
    let endingArr = ending.split('');
    if (ending === '') return true;
    if (str === '') str = [];
    const diferenceLength = strArr.length - ending.length;
    for (let i = endingArr.length - 1; i > -1; i--) {
        
        if (strArr[i + diferenceLength] === endingArr[i]) equal = true;
        else equal = false;
        if (endingArr[i] === '') equal = true;
        if (strArr[i] === '') equal = true;
        if (equal === false) cutSecuence = false;
        if (cutSecuence === false) equal = false; //Esto actua como lo haria un break, pero me parecio un buen entrenamiento (y divertido) simularlo yo

    }

    return equal

}

// solution(/* Pasale dos string y comprobara si el primero termina con el segundo*/)

// Se puede usar una solucion con regex en un sola linea o usar el metodo .endsWhit() pero el cata perderia todo su sentido para entrenar logica.