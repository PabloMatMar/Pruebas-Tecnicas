https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Devuelve el número (recuento) de vocales en la cadena dada.

// Consideraremos a, e, i, o, ucomo vocales para este Kata (pero no y).

// La cadena de entrada solo constará de letras minúsculas y/o espacios.

function getCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++)
        if (/[aeiou]/.test(str[i]))
            count++;
    return count;
};

// getCount(/*Introduce un string para que cuente cuantas vocales tiene*/);