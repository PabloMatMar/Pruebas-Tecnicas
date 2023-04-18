https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena, pero con las palabras
//de cinco o más letras invertidas (al igual que el nombre de este Kata). Las cadenas pasadas consistirán solo en
// letras y espacios. Los espacios se incluirán solo cuando haya más de una palabra presente.

// Ejemplos:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
    return string
        .split(' ')
        .map(e => {
            if (e.length < 5)
                return e;
            if (e.length >= 5) {
                return e
                    .split('')
                    .reverse('')
                    .join('');

            }
        })
        .join(' ');
};

//spinWords(/*Pásale un string y devolvera el mismo string pero con todas las palabras que tengan mas de cuatro
// letras al reves */)