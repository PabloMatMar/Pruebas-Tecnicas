https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// Tu tarea es crear una función que realice cuatro operaciones matemáticas básicas.

// La función debe tomar tres argumentos: operación (cadena/caracter), valor1 (número), valor2 (número).
// La función debe devolver el resultado de los números después de aplicar la operación elegida.

// Ejemplos (Operador, valor1, valor2) --> salida
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7



function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return "operation must be on of this: * / - +, Value 1 and Value two must be a number";
    };
};

// basicOp(/*Pásale tres parametros, el primero un operador entre los siguientes cuatro (*, /, -, +) el segundo y el tercero seran dos numeros con los que hara la operacion del operador que le pases */)