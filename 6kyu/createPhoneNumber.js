https://www.codewars.com/kata/525f50e3b73515a6db000b83

// Escriba una función que acepte una matriz de 10 enteros (entre 0 y 9), que devuelva una cadena de esos 
//números en forma de número de teléfono.

// Ejemplo
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// El formato devuelto debe ser correcto para completar este desafío.

// ¡No olvides el espacio después de los paréntesis de cierre!


function createPhoneNumber(numbers) {


    const n = numbers
    const number = `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
    console.log(number)
    return number

}

//createPhoneNumber(/*Pásale una array que contenga diez elementos numericos entre 0 y 9 y devolverá
// un numero de telefono en formato "(***) ***-****" */)