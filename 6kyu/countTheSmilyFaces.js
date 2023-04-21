https://www.codewars.com/kata/583203e6eb35d7980400002a

// Dada una matriz (arr) como argumento, complete la función countSmileysque debería devolver el número
// total de caras sonrientes.

// Reglas para una cara sonriente:

// Cada cara sonriente debe contener un par de ojos válidos. Los ojos se pueden marcar como :o;
// Una cara sonriente puede tener nariz, pero no necesariamente. Los caracteres válidos para una nariz
// son -o~
// Cada cara sonriente debe tener una boca sonriente que debe estar marcada con una )oD
// No se permiten caracteres adicionales a excepción de los mencionados.

// Ejemplos de caras sonrientes válidas: :) :D ;-D :~)
// Caras sonrientes no válidas: ;( :> :} :]

// Ejemplo
// countSmileys([/:)/, /;(/, /;}/, /:-D/]);       // should return 2;
// countSmileys([/;D/, /:-(/, /:-)/, /;~)/]);     // should return 3;
// countSmileys([/;]/, /:[/, /;*/, /:$/, /;-D/]); // should return 1;
// Nota
// En caso de una matriz vacía, devuelva 0. No se le probará con una entrada no válida (la entrada siempre
// será una matriz). El orden de los elementos de la cara (ojos, nariz, boca) siempre será el mismo.
function countSmileys(arr) {
    return arr.filter(e => /^[:;][-~]?[)D]$/.test(e)).length;
};

//countSmileys(/*Pásale un array que contenga expresiones regulares que sean caras que empiecen por : o ;
// puedan o no continuar con  - o ~ y terminen con ) o D, devolverá la cantidad de expresiones con esas
// condiciones */)