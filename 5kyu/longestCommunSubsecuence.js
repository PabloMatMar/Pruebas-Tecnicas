// https://www.codewars.com/kata/52756e5ad454534f220001ef

// Escriba una función llamada LCSque acepte dos secuencias y devuelva la subsecuencia más larga común a las secuencias pasadas.

// subsecuencia
// Una subsecuencia es diferente de una subcadena. Los términos de una subsecuencia no necesitan ser términos consecutivos de la secuencia original.

// Ejemplo de subsecuencia
// Subsecuencias de "abc"= "a", "b", "c", "ab", "ac", "bc"y "abc".

// Ejemplos de LCS
// LCS( "abcdef" , "abc" ) => returns "abc"
// LCS( "abcdef" , "acf" ) => returns "acf"
// LCS( "132535365" , "123456789" ) => returns "12356"
// notas
// Ambos argumentos serán cadenas.
// El valor de retorno debe ser una cadena
// Devuelve una cadena vacía si no existe una subsecuencia común
// Ambos argumentos tendrán uno o más caracteres (en JavaScript)
// Todas las pruebas solo tendrán una única subsecuencia común más larga. No te preocupes por casos como LCS( "1234", "3412" ), que tendrían dos posibles subsecuencias comunes más largas: "12"y "34".

const LCS = (str1, str2) => {
    let longest = "";
    let smallest = "";
    if (str1.length > str2.length) {
        longest = str1;
        smallest = str2;
    } else {
        longest = str2;
        smallest = str1;
    };
    if (longest.includes(smallest))
        return smallest;
    let subsequence = "";
    for (let i = 0; i < smallest.length; i++) {
        if (longest.includes(smallest[i])) {
            subsequence = subsequence.concat(smallest[i]);
            longest = longest.slice(0, longest.indexOf(smallest[i])).concat(longest.slice(longest.indexOf(smallest[i]) + 1));
            smallest = smallest.slice(0, i).concat(smallest.slice(i + 1));
            i--;
        }
    }
    return isNaN(Number(subsequence.split('')[0])) ? subsequence : subsequence.split('').sort().join('');
};
//LCS(/*Pasale dos strings como argumentos, devolvera la subsequencia (subtring de elementos no consecutivos) 
//mas larga que compartan(sin tener en respetar la linealidad), si es (completamente)numerico lo ordenará, si
// no, no */)

//ESTE KATA TIENE MAS ISSUES QUE EL PROTAGONISTA DE UNA SERIE ADOLESCENTE, NO TE RECOMIENDO HACERLO, porque
// ademas la persona que lo ha hecho pasa de los issues que le abras

//Si quieres ver como obtengo el substring (elementos consecutivos) prueba esta:

const substring = (str1, str2) => {
    let longest = "";
    let smallest = "";
    if (str1.length > str2.length) {
        longest = str1;
        smallest = str2;
    } else {
        longest = str2;
        smallest = str1;
    }
    if (longest.includes(smallest))
        return smallest;
    let solution = "";
    for (let i = 0; i < smallest.length; i++) {
        smallest = smallest.slice(i);
        let reverse = smallest.split('').reverse().join('');
        for (let j = 0; j < smallest.length; j++) {
            const fragment = smallest.slice(0, j).concat(smallest.slice(j + 1));
            if (longest.includes(fragment) && fragment.length > solution)
                solution = fragment;
            const fragmentOfTheReverse = reverse.slice(0, j).concat(reverse.slice(j + 1)).split('').reverse().join('');
            if (longest.includes(fragmentOfTheReverse) && fragmentOfTheReverse.length > solution)
                solution = fragmentOfTheReverse;
            str1.length > str2.length ? smallest = str2 : smallest = str1;
        };
    };
    return solution;
};
