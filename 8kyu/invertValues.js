// Dado un conjunto de números, devuelve el inverso aditivo de cada uno. Cada positivo se vuelve negativo, y los negativos se vuelven positivos.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// Puede suponer que todos los valores son enteros. No cambie la matriz/lista de entrada.


function invert(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = - array[i]
    }
    return array;
};