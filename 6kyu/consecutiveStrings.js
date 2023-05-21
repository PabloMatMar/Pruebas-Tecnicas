// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

// Se le proporciona una matriz (lista) strarrde cadenas y un número entero k. Su tarea es devolver la primera cadena más larga que consta de k cadenas consecutivas tomadas en la matriz.

// Ejemplos:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// siendo n la longitud de la matriz de cadenas, si n = 0o k > no k <= 0devuelve "" (devuelve Nothingen Elm, "nada" en Erlang).

// Nota
// cadenas consecutivas: siguen una tras otra sin interrupción
const longestConsec = (strarr, k) => {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return ""
    let elements = [];
    for (let i = 0; i < strarr.length - k + 1; i++) elements[i] = strarr.slice(i, k + i).join('');
    return elements.reduce((a, b) => a.length >= b.length ? a : b);
};
//longestConsec(/*Pasale un array devolvera los dos elementos mas grandes concatenados en un uno solo(Si hay
// empate devolvera el primero que encuentre) */)