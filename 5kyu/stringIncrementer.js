https://www.codewars.com/kata/54a91a4883a7de5d7800009c

// Tu trabajo es escribir una función que incremente una cadena, para crear una nueva cadena.

// Si la cadena ya termina con un número, el número debe incrementarse en 1.
// Si la cadena no termina con un número. el número 1 debe agregarse a la nueva cadena.
// Ejemplos:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Atención: si el número tiene ceros a la izquierda, se debe considerar la cantidad de dígitos.


function incrementString(str) {

    let check = false;
    let arr = str.split('')
    let num = [];
    let lengthNum = 0;
    let sum = 0;
    let zero = [];

    for (let i = 0; i < arr.length; i++) {

        if (!isNaN(Number(arr[i]))) {
            check = true;
            num.push(arr[i]);
        } else {
            check = false;
            num = [];
        };

        if (i === arr.length - 1 && check === true) {
            zero = num.filter(e => e === '0');
            num = num.filter(e => e !== '0');
            lengthNum = num.length;
            if (((Number(num.join(''))) + 1).toString().length > (Number(num.join(''))).toString().length && zero.length !== 0) {
                zero = zero.slice(0, zero.length - 1)
                sum = 1
            }
            if (lengthNum === 0) zero[zero.length - 1] = '1';
            if (zero.length > 0) arr = arr
                .slice(0, (arr.length - zero.length))
                .concat(zero);
            if (num.length !== 0) num = ((Number(num.join(''))) + 1).toString();
            return arr
                .slice(0, (arr.length - (lengthNum + sum)))
                .concat([num])
                .join('');
        } else if (i === arr.length - 1) arr[i] = arr[i] + '1';
    }
    return arr.join('');
};

//incrementString(/*Pásale un string, si termina en un numero incrementara el numero en una unidad 
//"hola009" =>  "hola010", si termina en otro caracter añadira un 1 "hola" => "hola1"*/)