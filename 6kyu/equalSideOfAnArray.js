https://www.codewars.com/kata/5679aa472b8f57fb8c000047

// Se le dará una matriz de números enteros. Su trabajo es tomar esa matriz y encontrar un índice N donde la suma de los enteros a la izquierda de N sea igual a la suma de los enteros a la derecha de N. Si no hay un índice que haga que esto suceda, devuelva -1.

// Por ejemplo:

// Digamos que le dan la matriz [1,2,3,4,3,2,1]:
// Su función devolverá el índice 3, porque en la tercera posición de la matriz, la suma del lado izquierdo del índice ( [1,2,3]) y la suma del lado derecho del índice ( [3,2,1]) son iguales 6.

// Veamos otro.
// Se le da la matriz [1,100,50,-51,1,1]:
// su función devolverá el índice 1, porque en la primera posición de la matriz, la suma del lado izquierdo del índice ( [1]) y la suma del lado derecho del índice ( [50,-51,1,1]) son iguales 1.

// El último:
// se le da la matriz [20,10,-80,10,10,15,35]
// En el índice 0, el lado izquierdo es []
// El lado derecho es [10,-80,10,10,15,35]
// Ambos son iguales 0cuando se suman. (Las matrices vacías son iguales a 0 en este problema)
// El índice 0 es el lugar donde el lado izquierdo y el lado derecho son iguales.

// Nota: recuerde que en la mayoría de los lenguajes de programación/secuencia de comandos, el índice de una matriz comienza en 0.

// Entrada:
// una matriz de enteros de longitud 0 < arr < 1000. Los números en la matriz pueden ser cualquier número entero positivo o negativo.

// Salida:
// El índice más bajo Ndonde el lado a la izquierda de Nes igual al lado a la derecha de N. Si no encuentra un índice que se ajuste a estas reglas, devolverá -1.

// // Nota:
// si recibe una matriz con varias respuestas, devuelva el índice correcto más bajo.

function findEvenIndex(arr) {
    const vI = 0;
    let sum = arr.reduce((a, c) => a + c, vI);
    for (let i = 0; i < arr.length; i++)
        if (Number.isInteger((sum - arr[i]) / 2) && arr.slice(0, i).reduce((a, c) => a + c, vI) === arr.slice(i + 1, arr.length).reduce((a, c) => a + c, vI)) return i;
    return -1;
};
findEvenIndex(/*Introduce un array, y si encuentra un elemento cuyos elementos anteriores al mismo sumen lo mismo que los posteriores te devolverá el indice de dicho elemento */)