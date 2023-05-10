// https://www.codewars.com/kata/58223370aef9fc03fd000071


// Dada una variable n,

// Si n es un número entero, devuelve una cadena con guiones '-' antes y después de cada entero impar, pero no comience ni termine la cadena con un guión. Si n es negativo, entonces se debe eliminar el signo negativo.

// Si n no es un número entero, devuelve la cadena "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'


const dashatize = (n) => {
    if (isNaN(n) || n % 1 != 0) return 'NaN';
    if (n < 0) n = n * -1;
    return n
        .toString()
        .split('')
        .map((e, i, arr) => {
            if (arr.length == 1 && Number(e) % 2 != 0) return e.toString();
            else if (e % 2 == 0) return e;
            else if (Number(e) % 2 != 0 && i != 0 && i != arr.length - 1) return `-${e}-`;
            else if (i == 0 && Number(e) % 2 != 0) return `${e}-`;
            else if (i == arr.length - 1 && Number(e) % 2 != 0) return `-${e}`;
        })
        .join('')
        .split('')
        .filter((e, i, arr) => !(e == '-' && arr[i - 1] == e && i != 0))
        .join('');
};
//dashatizeIt(/*Pasale un numero, devolverá los digitos impares entre guiones pero el numero no empezará ni 
//terminará por guiones, si es negativo lo transformara a positivo. No podrá haber dos guiones seguidos
//Si no es un número o tiene decimales devolverá 'NaN'(Lo piden como string...) */)