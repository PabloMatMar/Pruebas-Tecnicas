//https://www.codewars.com/kata/5be350bcce5afad8020000d6

// coincidencia máxima
// MaxMatch comienza en el primer carácter de una oración e intenta encontrar la palabra válida más larga a partir de ese carácter. Si no se encuentra ninguna palabra, el primer carácter se considera la "palabra" más larga, independientemente de su validez. Para encontrar el resto de las palabras, MaxMatch se invoca recursivamente en todos los caracteres restantes hasta que no quedan caracteres. Se devuelve una lista de todas las palabras que se encontraron.

// Entonces, para la cadena "happyday", "happy"se encuentra porque "happyday"no es una palabra válida, ni es "happyda", ni "happyd". Luego, se llama a MaxMatch "day" y "day" se encuentra. La salida es la lista ["happy", "day"]en ese orden.

// Write maxMatch, que toma una letra alfanumérica, sin espacios, en minúsculas String como entrada y devuelve un Array de todas las palabras encontradas, en el orden en que se encontraron. Todas las palabras válidas están en Set VALID_WORDS , que solo contiene alrededor de 500 palabras en inglés.

// Nota: este algoritmo es simple y funciona mejor con texto en chino, así que acepte el hecho de que algunas palabras se segmentarán incorrectamente.

//Creo un set que es un fragmento del de codewars.
const VALID_WORDS = new Set(['luck','this','is','a','japanese','doll','it','free','should','we','start','class','now','or','wait','for','everyone','to','get','here','purple','pig','and','green','donkey','flew','kite','in','the','middle','of','night','ended','up','sunburnt','joe','made','sugar','cookies','susan','decorated','them','what','was','person','thinking','when','they','discovered','cows','milk','fine','human','consumption','why','did','do','first','place','quick','brown','jumps','over','lazy','dog','i','checked','make','sure','that','he','still','alive','turned','research','paper','on','friday','otherwise','would','have','not','passed','mary','plays','piano','let','me','help','you','with','your','baggage','if','like','tuna','tomato','sauce','try'])

const maxMatch = sentence => {
    const arr = [];
    for (let i = 0; i <= sentence.length; i++)
        for (let j = sentence.length; j >= 0; j--) {
            if (VALID_WORDS.has(sentence.slice(i, j))) {
                arr.push(sentence.slice(i, j));
                sentence = sentence.replace(sentence.slice(i, j), '*');
                break;
            };
        };
    let i = -1;
    return sentence.split('').map(e => e == '*' ? arr[++i] : e);
}
//maxMatch(/*Pasale un string, ira buscando desde la ultima letra hasta la primera, si encuentra la palabra 
// en VALID_WORDS seccionará la palabra del string y la devolverá si no, devolverá la letra por la que busca
//hara esto desde el final del string hasta su principio... */)