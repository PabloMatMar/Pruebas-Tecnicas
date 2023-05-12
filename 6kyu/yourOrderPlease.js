// https://www.codewars.com/kata/55c45be3b2079eccff00010f

// Su tarea es ordenar una cadena dada. Cada palabra en la cadena contendrá un solo número. Este número es la posición que debe tener la palabra en el resultado.

// Nota: Los números pueden ser del 1 al 9. Por lo tanto, 1 será la primera palabra (no 0).

// Si la cadena de entrada está vacía, devuelve una cadena vacía. Las palabras en la cadena de entrada solo contendrán números consecutivos válidos.

// Ejemplos
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

order = words => {
    let solution = words.split(' ');
    words
        .split(' ')
        .map(word => word
            .split('')
            .map(e => {
                if (/[0-9]/.test(e))
                    return solution[e - 1] = word;
            }))
    return solution.join(' ');
}; //order("Pasale un string con un digito en cada palabra, devolverá el string ordenado segun esos numeros")