// https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e

// ¿Qué fecha corresponde al ndécimo día del año?
// La respuesta depende de si el año es bisiesto o no.

// Escribe una función que te ayude a determinar la fecha si sabes el número del día en el año, así como si el año es bisiesto o no.
// La función acepta el número del día y un valor booleano isLeap como argumentos y devuelve la fecha del año correspondiente como una cadena "Month, day".
// Solo isLeapse probarán las combinaciones válidas de un número de día y.

// Ejemplos:
// * With input `41, false` => return "February, 10"
// * With input `60, false` => return "March, 1
// * With input `60, true` => return "February, 29"
// * With input `365, false` => return "December, 31"
// * With input `366, true` => return "December, 31"

const getDay = (n, isLeap) => {
    let sum = 0;
    let num = 0;
    let months = [[31, 'January'], [28, 'February'], [31, 'March'], [30, 'April'], [31, 'May'], [30, 'June'], [31, 'July'], [31, 'August'], [30, 'September'], [31, 'October'], [30, 'November'], [31, 'December']]
    if (isLeap)
        months[1][0] = 29
    for (let i = 0; i < months.length; i++) {
        sum = sum + months[i][0]
        if (n <= sum) {
            sum = 0;
            months.map((e, ind) => {
                if (ind < i) sum = sum + e[0]
            })
            num = n - sum;
            return num != 0 ? `${months[i][1]}, ${num}` : `${months[i-1][1]}, ${months[i-1][0]}`
        };
    };
};

//getDay(/*Pasale dos argumentos, el segundo un true si el año es bisiesto y false si no lo es
// el primero un numero entre 1 y 365(si el segundo es false) o 1 y 366(si es true), devolverá mes y dia */)
