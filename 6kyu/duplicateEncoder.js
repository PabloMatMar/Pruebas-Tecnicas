https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// El objetivo de este ejercicio es convertir una cadena en una nueva cadena donde cada carácter de la
// nueva cadena es "("si ese carácter aparece solo una vez en la cadena original, o ")"si ese carácter
// aparece más de una vez en la cadena original. Ignore las mayúsculas al determinar si un carácter es
// un duplicado.

// Ejemplos
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// notas
// Los mensajes de aserción pueden no estar claros acerca de lo que muestran en algunos idiomas.
// Si lee "...It Should encode XXX", "XXX"es el resultado esperado, ¡no la entrada!

function duplicateEncode(word) {
    let arrWords = word.toLowerCase().split('');
    let changes = arrWords.map(e => {
        return arrWords.indexOf(e) === arrWords.lastIndexOf(e) ? e = "(" : e = ")";

    });

    return changes.join('');
};

//duplicateEncode(/*Pásale un string y devolvera otro string compuesto solo por '(' y ')', ( lo sustituirá
//por cada elemento que aparezca una sola vez, y ) lo cambiara por por todos aquellos que tengan duplicados*/)