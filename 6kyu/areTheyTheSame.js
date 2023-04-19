https://www.codewars.com/kata/550498447451fbbd7600041c

// Dadas dos matrices a y b escriba una función comp(a, b)(o compSame(a, b)) que verifique si las dos
// matrices tienen los "mismos" elementos, con las mismas multiplicidades (la multiplicidad de un miembro
// es el número de veces que aparece). "Igual" significa, aquí, que los elementos en b son los elementos en
// a al cuadrado, independientemente del orden.

// Ejemplos
// Matrices válidas
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b)devuelve verdadero porque en b121 es el cuadrado de 11, 14641 es el cuadrado de 121, 20736 es
// el cuadrado de 144, 361 es el cuadrado de 19, 25921 es el cuadrado de 161, y así sucesivamente.
// Se vuelve obvio si escribimos blos elementos de en términos de cuadrados:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Matrices no válidas
// Si, por ejemplo, cambiamos el primer número a otra cosa, compya no vuelve verdadero:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b)devuelve falso porque en b132 no es el cuadrado de ningún número de a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b)devuelve falso porque en b36100 no es el cuadrado de ningún número de a.

// Observaciones
// a o b podría ser [] or {}(todos los idiomas excepto R, Shell).
// a o b podría ser nilo nullo Noneo nothing(excepto en C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift ).
// Si a o b son nil(o nullo None, según el idioma), el problema no tiene sentido, por lo que devuelve falso.

// Nota para C
// Las dos matrices tienen el mismo tamaño (> 0)dado como parámetro en la función comp.


function comp(array1, array2) {
    if (array1 === null || array2 === null) return false;
    let count = 0;
    array1
        .sort(function (a, b) {
            return a - b;
        });
    array2
        .sort(function (a, b) {
            return a - b;
        });
    for (let i = 0; i < array1.length; i++) {

        if (array1[i] * array1[i] === array2[i]) count++;

    }
    if (count === array1.length) return true;
    else return false;
};

//comp(/*Pásale como primer parametro un array de numeros y como segundo lo mismo. Cada numero debe tener
// su unico y correspondiente cuadrado o raiz cuadrada en el otro array si no devuelve false*/)


//Explicacion mucho mas sencilla que el enunciado:

//Es decir, si alguno de los numeros de arr1 no tiene su correspondiente cuadrado en arr2 devuelve false, y
// si arr2 tiene un numero que no corresponde con la raiz cuadrada de ninguno de los numeros de arr1
// devuelve false tambien. Ademas cada numero solo se puede emparejar UNA VEZ con otro numero del otro
// array independientemente de que cumpla las condiciones de cuadrado o raiz solo se puede emparejar una
// vez. Cada numero debe tener al menos un correspondiente cuadrado o raiz cuadrada en el array de
// exponenciales o raices.