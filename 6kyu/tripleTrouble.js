// escribir una función

// tripledouble(num1,num2)
// que toma números num1 y num2 devuelve 1si hay un triple directo de un número en cualquier lugar num1 y también un doble directo del mismo número en num2.

// Si no es así, vuelve0

// Ejemplos
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

const tripledouble = (arg, arg2) => {
    if (typeof (arg) != 'number' || typeof (arg2) != 'number')
        return 0;
    let num1 = arg.toString()
    let num2 = arg2.toString()
    let check1 = false;
    let check2 = false;
    let num = [];
    for (let i = 0; i < num1.length; i++)
        if (i < num1.length - 2 && num1[i] == num1[i + 1] && num1[i] == num1[i + 2]) {
            check1 = true;
            num.push(num1[i])
        }
    if (!check1)
        return 0;
    for (let i = 0; i < num2.length; i++)
        if (i < num2.length - 1 && num2[i] == num2[i + 1] && num.includes(num2[i]))
            check2 = true;
    return check2 && check1 ? 1 : 0;
};

//tripledouble(/*Pasale dos argumentos numericos, si el primero contiene un digitio repetido consecutivamente
//tres veces y el segundo contiene el mismo digito repetido consecutivamente devolverá 1, si no, devolverá 0 */)
