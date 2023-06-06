// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

// Los identificadores ISBN-10 tienen diez dígitos. Los primeros nueve caracteres son dígitos 0-9. El último dígito puede ser 0-9o X, para indicar un valor de 10.

// Un número ISBN-10 es válido si la suma de los dígitos multiplicada por su posición módulo 11 es igual a cero.

// Por ejemplo:

// ISBN     : 1 1 1 2 2 2 3 3 3  9
// position : 1 2 3 4 5 6 7 8 9 10
// Este es un ISBN válido porque:

// (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
// Ejemplos
// 1112223339   -->  true
// 111222333    -->  false
// 1112223339X  -->  false
// 1234554321   -->  true
// 1234512345   -->  false
// 048665088X   -->  true
// X123456788   -->  false


const validISBN10 = strNum => {
    let validate = strNum.split('');
    return validate.length != 10 ? false : validate
        .map((e, i) => i != 9 ? /[0-9]/.test(e) : /([0-9])|(X)/.test(e))
        .includes(false) ? false : validate
            .reduce((a, b, i) => {
                if (i != 9)
                    return Number(a) + (Number(b) * (i + 1));
                else if (b == 'X')
                    return a + 100;
                else
                    return a + (b * 10);
            }) % 11 != 0 ? false : true;
};
//validISBN10(/*Pasale un ISBN10 en formato string, devolvera true si cumple los criterios de ISBN verdadero si no, devolvera false */)