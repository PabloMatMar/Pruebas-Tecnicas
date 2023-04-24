https://www.codewars.com/kata/55c6126177c9441a570000cc


// Mi amigo John y yo somos miembros del "Fat to Fit Club (FFC)". John está preocupado porque cada mes
// se publica una lista con los pesos de los miembros y cada mes es el último de la lista,
// lo que significa que es el más pesado.

// Yo soy quien establece la lista entonces le dije: "No te preocupes más, voy a modificar el orden de la
// lista". Se decidió atribuir un "peso" a los números. El peso de un número será en adelante la suma
// de sus dígitos.

// Por ejemplo 99tendrá "peso" 18, 100tendrá "peso" 1por lo que en la lista 100vendrá antes 99.

// Dada una cadena con los pesos de los miembros de FFC en orden normal, ¿puede dar esta cadena ordenada
// por "pesos" de estos números?

// Ejemplo:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// Cuando dos números tienen el mismo "peso", clasifíquelos como si fueran cadenas (orden alfabético) y no
// números:

// 180es antes 90ya que, teniendo el mismo "peso" (9), viene antes como una cadena .

// Todos los números de la lista son números positivos y la lista puede estar vacía.

// notas
// puede suceder que la cadena de entrada tenga espacios en blanco iniciales y finales y más de un espacio
// en blanco único entre dos números consecutivos
// Para C: El resultado se libera.

function orderWeight(str) {
    let solution = [];
    let order = [];
    let iV = 0;
    str
        .split(' ')
        .map(e => solution.push(e.split('')));

    str
        .split(' ')
        .map(e => order.push(e.split('')));

    order = order
        .map(e => e.map(e => Number(e)).reduce((a, b) => a + b, iV))
        .sort((a, b) => a - b);

    solution = solution
        .map((e, i) => [e.map(e => Number(e)).reduce((a, b) => a + b, iV), i])

    let isItRepeat = [];
    for (let i = 0; i < order.length; i++)
        for (let j = 0; j < solution.length; j++)
            if (order[i] === solution[j][0] && !isItRepeat.includes(j)) {
                isItRepeat.push(j)
                order[i] = [order[i], solution[j][1]]
                break;
            }


    let original = str.split(' ')

    for (let i = 0; i < order.length; i++)
        order[i] = original[order[i][1]];

    let arrtoSort = [];
    let finalSolution = [];
    let check = false;
    let bigest = 0;
    for (let i = 0; i < order.length; i++) {
        if (check) {
            arrtoSort.push(order[i])
            if (i !== order.length - 1 && order[i].split('').map(e => Number(e)).reduce((a, b) => a + b, iV) !== order[i + 1].split('').map(e => Number(e)).reduce((a, b) => a + b, iV)) {
                check = false;
                finalSolution.push(arrtoSort.sort((a, b) => {
                    if (a.length > b.length) bigest = a.length
                    else bigest = b.length
                    for (let i = 0; i < bigest; i++) {
                        if (a[i] === undefined) return -1
                        if (b[i] === undefined) return 1
                        if (a[i] - b[i] !== 0) return a[i] - b[i]

                    }
                }).join(' '));
                arrtoSort = [];
            }
            else if (i === order.length - 1 && order[i].split('').map(e => Number(e)).reduce((a, b) => a + b, iV) === order[i - 1].split('').map(e => Number(e)).reduce((a, b) => a + b, iV)) {
                finalSolution.push(arrtoSort.sort((a, b) => {
                    if (a.length > b.length) bigest = a.length
                    else bigest = b.length
                    for (let i = 0; i < bigest; i++) {
                        if (a[i] === undefined) return -1
                        if (b[i] === undefined) return 1
                        if (a[i] - b[i] !== 0) return a[i] - b[i]

                    }
                }).join(' '));
            }

        }

        else if (i !== order.length - 1 && order[i].split('').map(e => Number(e)).reduce((a, b) => a + b, iV) === order[i + 1].split('').map(e => Number(e)).reduce((a, b) => a + b, iV)) {
            arrtoSort.push(order[i])
            check = true;
        }

        else {
            if (arrtoSort.length > 0) {
                finalSolution.push(arrtoSort.sort((a, b) => {
                    if (a.length > b.length) bigest = a.length
                    else bigest = b.length
                    for (let i = 0; i < bigest; i++) {
                        if (a[i] === undefined) return -1
                        if (b[i] === undefined) return 1
                        if (a[i] - b[i] !== 0) return a[i] - b[i]

                    }
                }).join(''));
                arrtoSort = [];
            }
            finalSolution.push(order[i]);
        }

    }
    return finalSolution.join(' ');
};

//orderWeight(/*Pásale un string de numeros, sumara los digitos de cada numero, los ordenara de menor a
// mayor, y devolvera los numeros en el estado inicial pero ordenados en base al valor que tenian
// cuando se sumaron, ademas si el valor se repite se ordenaran ALFABETICAMENTE) */)