https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/javascript

// Cuente el número de duplicados
// Escriba una función que devuelva el recuento de caracteres alfabéticos distintos que no distinguen entre
// mayúsculas y minúsculas y dígitos numéricos que aparecen más de una vez en la cadena de entrada. Se
// puede suponer que la cadena de entrada contiene solo letras (tanto mayúsculas como minúsculas) y dígitos
// numéricos.

// Ejemplo
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibilidad" -> 1 # 'i' occurs six times
// "Indivisibilidades" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {

    return text
        .toLowerCase()
        .split('')
        .filter((letter, i, arr) => {
            return arr.indexOf(letter) !== arr.lastIndexOf(letter);
        })
        .filter((letter, i, arr) => arr.indexOf(letter) === i).length;

};

//duplicateCount(/*Pásale un string que solo contenga letras y devolverá la cantidad de caracteres que son
// repetidos aun difiriendo entre mayusculas y minisculas */)