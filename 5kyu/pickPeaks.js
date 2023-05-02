https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

// En este kata, escribirá una función que devuelva las posiciones y los valores de los "picos" (o máximos locales) de una matriz numérica.

// Por ejemplo, la matriz arr = [0, 1, 2, 5, 1, 0] tiene un pico en la posición 3 con un valor de 5 (ya que arr[3] es igual a 5).

// La salida se devolverá como un objeto con dos propiedades: pos y picos. Ambas propiedades deben ser matrices. Si no hay un pico en la matriz dada, entonces la salida debería ser {pos: [], peaks: []}.

// Ejemplo: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])debe devolver {pos: [3, 7], peaks: [6, 3]}(o equivalente en otros idiomas)

// Todas las matrices de entrada serán matrices de enteros válidas (aunque aún podrían estar vacías), por lo que no necesitará validar la entrada.

// El primer y último elemento de la matriz no se considerarán picos (en el contexto de una función matemática, no sabemos qué hay antes y después y, por lo tanto, no sabemos si es un pico o no).

// Además, ¡cuidado con las mesetas! [1, 2, 2, 2, 1]tiene un pico mientras [1, 2, 2, 2, 3]y [1, 2, 2, 2, 2]no. En el caso de un pico de meseta, devuelva solo la posición y el valor del comienzo de la meseta. Por ejemplo: pickPeaks([1, 2, 2, 2, 1])devoluciones {pos: [1], peaks: [2]}(o equivalente en otros idiomas)

// ¡Divertirse!

function pickPeaks(arr) {
    let result = { pos: [], peaks: [] };
    for (let i = 0; i < arr.length; i++) {

        if (i !== arr.length - 1 && i !== 0 && arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            result.pos.push(i);
            result.peaks.push(arr[i]);

        }
        else if (i !== arr.length - 1 && i !== 0 && arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
            if (arr[i] > arr[i + 2]) {
                result.pos.push(i);
                result.peaks.push(arr[i]);
            };

            if (arr[i] === arr[i + 2] && arr[i] > arr[i + 3]) {
                result.pos.push(i);
                result.peaks.push(arr[i]);
            };

            if (arr[i] === arr[i + 2] && arr[i] === arr[i + 3] && arr[i] > arr[i + 4]) {
                result.pos.push(i);
                result.peaks.push(arr[i]);
            };

            if (arr[i] === arr[i + 2] && arr[i] === arr[i + 3] && arr[i] === arr[i + 4] && arr[i] > arr[i + 5]) {
                result.pos.push(i);
                result.peaks.push(arr[i]);
            };

            if (arr[i] === arr[i + 2] && arr[i] === arr[i + 3] && arr[i] === arr[i + 4] && arr[i] === arr[i + 5] && arr[i] > arr[i + 6]) {
                result.pos.push(i);
                result.peaks.push(arr[i]);
            };

            if (arr[i] === arr[i + 2] && arr[i] === arr[i + 3] && arr[i] === arr[i + 4] && arr[i] === arr[i + 5] && arr[i] === arr[i + 6] && arr[i] > arr[i + 7]) {
                result.pos.push(i);
                result.peaks.push(arr[i]);
            };
            if (arr[i] === arr[i + 2] && arr[i] === arr[i + 3] && arr[i] === arr[i + 4] && arr[i] === arr[i + 5] && arr[i] === arr[i + 6] && arr[i] === arr[i + 7] && arr[i] > arr[i + 8]) {
                result.pos.push(i);
                result.peaks.push(arr[i]);
            };
            if (arr[i] === arr[i + 2] && arr[i] === arr[i + 3] && arr[i] === arr[i + 4] && arr[i] === arr[i + 5] && arr[i] === arr[i + 6] && arr[i] === arr[i + 7] && arr[i] === arr[i + 8] && arr[i] > arr[[i + 9]]) {
                result.pos.push(i);
                result.peaks.push(arr[i]);
            };

            if (arr[i] === arr[i + 2] && arr[i] === arr[i + 3] && arr[i] === arr[i + 4] && arr[i] === arr[i + 5] && arr[i] === arr[i + 6] && arr[i] === arr[i + 7] && arr[i] === arr[i + 8] && arr[i] === arr[i + 9] && arr[i] > arr[[i + 10]]) {
                result.pos.push(i);
                result.peaks.push(arr[i]);
            };
        };

    };
    return result;
};

//pickPeaks(/*Pásale un array de numeros, devolverá un objeto con dos propiedas, la primera la posicion de el elemento del array que este rodeado de elementos de menor valor, la segunda el valor de dicho elemento */)