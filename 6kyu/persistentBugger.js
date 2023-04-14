https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// Escribe una función, persistence, que tome un parámetro positivo num y devuelva su persistencia multiplicativa, que es el número de veces que debes multiplicar los dígitos num hasta llegar a un solo dígito.

// Por ejemplo (Entrada --> Salida) :

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


function persistence(num) {
    const iV = 1;
    let number = num;
    let count = 0;
    while ((number.toString()).length > 1) {
        number = number
            .toString()
            .split('')
            .reduce((a, c) => a * c, iV);
            count++;
    }

    return count;

};

//persistence(/*Pasale un numero y devolvera su persistencia multiplicativa(numero de veces que han de multiplicarse sus digitos entre si (continuando el proceso con el resultado) hasta reducirse a un solo digito) */)