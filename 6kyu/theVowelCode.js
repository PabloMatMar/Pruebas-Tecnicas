https://www.codewars.com/kata/53697be005f803751e0015aa

// Paso 1: Cree una función llamada encode()para reemplazar todas las vocales minúsculas en una cadena dada con números de acuerdo con el siguiente patrón:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// Por ejemplo, encode("hello")devolvería "h2ll4". No hay necesidad de preocuparse por las vocales mayúsculas en este kata.

// Paso 2: ahora cree una función llamada decode()para convertir los números nuevamente en vocales de acuerdo con el mismo patrón que se muestra arriba.

// Por ejemplo, decode("h3 th2r2")devolvería "hi there".

// En aras de la simplicidad, puede suponer que cualquier número que se pase a la función corresponderá a vocales.

function encode(string) {
    return string
        .split('')
        .map(e => {
            return e === 'a' ? e = '1' : e === 'e' ? e = '2' : e === 'i' ? e = '3' : e === 'o' ? e = '4' : e === 'u' ? e = '5' : e = e;
        })
        .join('');
};

function decode(string) {
    return string
        .split('')
        .map(e => {
            return e === '1' ? e = 'a' : e === '2' ? e = 'e' : e === '3' ? e = 'i' : e === '4' ? e = 'o' : e === '5' ? e = 'u' : e = e;
        })
        .join('');
};
//encode(/*Pasale un string, convertira las vocales en un numero del 1 al 5 respectivamente*/)
//decode(/*Pasale un string, convertira los numeros del uno al 5 en cada vocal respectivamente*/)