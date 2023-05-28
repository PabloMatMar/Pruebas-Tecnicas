// https://www.codewars.com/kata/55e1990978c60e5052000011/javascript

// ¿Recuerdas el juego 2048? http://gabrielecirulli.github.io/2048/

// La parte principal de este juego es fusionar fichas idénticas en una fila.

// Implemente una función que modele el proceso de combinar todos los valores de mosaico en una sola fila.
// Esta función toma la línea de matriz como parámetro y devuelve una nueva matriz con los valores de mosaico de la línea deslizados hacia el frente de la matriz (índice 0) y combinados.
// Un mosaico dado solo puede fusionarse una vez.
// Los cuadrados de cuadrícula vacíos se representan como ceros.
// Su función debería funcionar en matrices que contengan un número arbitrario de elementos.
// Ejemplos
// merge([2,0,2,2])  -->  [4,2,0,0]

const merge = (arr) => {
    const zeros = [];
    const length = arr.length;
    arr = arr.filter(e => e != 0)
    for (let i = 0; i < length - arr.length; i++)
        zeros.push(0);
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == arr[i + 1]) {
            arr[i] = arr[i] * 2;
            arr = arr.slice(0, i + 1).concat(arr.slice(i + 2));
            zeros.push(0);
        };
    return arr.concat(zeros);
};
//merge(/*Pasale un array de numeros, si dos elementos contiguos son iguales el de la izquierda doblará su
//valor y el de la derecha sera eliminado añadiendose un cero al final del array, imita al juego  merge 2048 */)

