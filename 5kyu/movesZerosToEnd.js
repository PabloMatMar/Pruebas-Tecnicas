https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Escriba un algoritmo que tome una matriz y mueva todos los ceros al final, preservando el orden de los
// otros elementos.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    const noZeros = arr.filter(noZero => noZero !== 0);
    const zeros = arr.filter(zero => zero === 0);
    return noZeros.concat(zeros);
};
//moveZeros(/*Pásale un array devolvera el mismo array pero habra movido todos los elementos === 0 al final
// */)