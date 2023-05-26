// https://www.codewars.com/kata/536950ffc8a5ca9982001371

// Ayuda a la rana a encontrar el camino a la libertad.
// Tienes una matriz de enteros y tienes una rana en la primera posición

// [Frog, int, int, int, ..., int]

// El entero en sí mismo puede indicarte la longitud y la dirección del salto.

// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position
// Su objetivo es encontrar cuántos saltos se necesitan para saltar fuera de la matriz.

// Regresa -1si Frog no puede saltar fuera de la matriz

// Example:
// array = [1, 2, 1, 5]; 
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)

const jumpingFrog = arr => {
    let win = arr.length;
    if (win == 1) return 1;
    let count = 0;
    let value = arr[0];
    if (value < 0) return 1;
    let clon = 0;
    const jump = index => {
        count++;
        if (count > win)
            return -1;
        if (value + index >= win && count > 1)
            return count;
        else if (value >= win || (value + index < 0 && index < 0 && count > 1))
            return count;
        if (count > 1) {
            clon = index;
            index = index + value;
            value = value + clon;
        };
        return jump(arr[index])
    };
    return jump(arr[0]);

};

//jumpingFrog(/*Pasale un array de numeros positivos y negativos, hará saltos por el indice cuyo valor sea el
// del numero en el que caiga(empieza en arr[0]) positivos derecha, negativos izquierda si un salto logra
// sacarle del indice devolvera la cantidad de saltos requeridos, si se queda en bucle o el salto muere
// devuelve -1 */)