// Dada una n x nmatriz, devuelve los elementos de la matriz dispuestos desde los elementos más externos al elemento central, desplazándose en el sentido de las agujas del reloj.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// Para una mejor comprensión, siga los números de la siguiente matriz consecutivamente:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// Esta imagen ilustrará las cosas más claramente:


// NOTA: La idea no es ordenar los elementos de menor valor a mayor; la idea es atravesar la matriz bidimensional en un patrón de concha de caracol en el sentido de las agujas del reloj.

// NOTA 2: El 0x0 (matriz vacía) se representa como una matriz vacía dentro de una matriz [[]].


snail = (biArr) => {

    console.log(biArr);
    if (biArr.length == 0) {
        return [[]];
    } else if (biArr.length == 2) {
        let arrOrder = [[], [], []]
        arrOrder[0][0] = biArr[0][0];
        arrOrder[0][1] = biArr[0][1];
        
        arrOrder[1][0] = biArr[1][1];
        arrOrder[1][1] = biArr[1][0];
        return arrOrder;
    } else if (biArr.length == 3) {
        let arrOrder = [[], [], []]
        arrOrder[0][0] = biArr[0][0];
        arrOrder[0][1] = biArr[0][1];
        arrOrder[0][2] = biArr[0][2];
        arrOrder[1][0] = biArr[1][2];
        arrOrder[1][1] = biArr[2][2];
        arrOrder[1][2] = biArr[2][1];
        arrOrder[2][0] = biArr[2][0];
        arrOrder[2][1] = biArr[1][0];
        arrOrder[2][2] = biArr[1][1];
        return arrOrder;
    } else if (biArr.length == 4) {
        let arrOrder = [[], [], [], []]
        arrOrder[0][0] = biArr[0][0];
        arrOrder[0][1] = biArr[0][1];
        arrOrder[0][2] = biArr[0][2];
        arrOrder[0][3] = biArr[0][3];

        arrOrder[1][0] = biArr[1][3];
        arrOrder[1][1] = biArr[2][3];
        arrOrder[1][2] = biArr[3][3];
        arrOrder[1][3] = biArr[3][2];

        arrOrder[2][0] = biArr[3][1];
        arrOrder[2][1] = biArr[3][0];
        arrOrder[2][2] = biArr[2][0];
        arrOrder[2][3] = biArr[1][0];

        arrOrder[3][0] = biArr[1][1];
        arrOrder[3][1] = biArr[1][2];
        arrOrder[3][2] = biArr[2][2];
        arrOrder[3][3] = biArr[2][1];
        return arrOrder;
    } else if (biArr.length == 5) {
        let arrOrder = [[], [], [], [], []]
        arrOrder[0][0] = biArr[0][0];
        arrOrder[0][1] = biArr[0][1];
        arrOrder[0][2] = biArr[0][2];
        arrOrder[0][3] = biArr[0][3];
        arrOrder[0][4] = biArr[0][4];

        arrOrder[1][0] = biArr[3][0];
        arrOrder[1][1] = biArr[3][1];
        arrOrder[1][2] = biArr[3][2];
        arrOrder[1][3] = biArr[3][3];
        arrOrder[1][4] = biArr[1][0];

        arrOrder[2][0] = biArr[2][4];
        arrOrder[2][1] = biArr[4][3];
        arrOrder[2][2] = biArr[4][4];
        arrOrder[2][3] = biArr[3][4];
        arrOrder[2][4] = biArr[1][1];

        arrOrder[3][0] = biArr[2][3];
        arrOrder[3][1] = biArr[4][2];
        arrOrder[3][2] = biArr[4][1];
        arrOrder[3][3] = biArr[4][0];
        arrOrder[3][4] = biArr[1][2];

        arrOrder[4][0] = biArr[2][2];
        arrOrder[4][1] = biArr[2][1];
        arrOrder[4][2] = biArr[2][0];
        arrOrder[4][3] = biArr[1][4];
        arrOrder[4][4] = biArr[1][3];
        return arrOrder;
    } else if (biArr.length == 6) {
        let arrOrder = [[], [], [], [], [], []]
        arrOrder[0][0] = biArr[0][0];
        arrOrder[0][1] = biArr[0][1];
        arrOrder[0][2] = biArr[0][2];
        arrOrder[0][3] = biArr[0][3];
        arrOrder[0][4] = biArr[0][4];
        arrOrder[0][5] = biArr[0][5];

        arrOrder[1][0] = biArr[3][1];
        arrOrder[1][1] = biArr[3][2];
        arrOrder[1][2] = biArr[3][3];
        arrOrder[1][3] = biArr[3][4];
        arrOrder[1][4] = biArr[3][5];
        arrOrder[1][5] = biArr[1][0];

        arrOrder[2][0] = biArr[3][0];
        arrOrder[2][1] = biArr[5][1];
        arrOrder[2][2] = biArr[5][2];
        arrOrder[2][3] = biArr[5][3];
        arrOrder[2][4] = biArr[4][0];
        arrOrder[2][5] = biArr[1][1];

        arrOrder[3][0] = biArr[2][5];
        arrOrder[3][1] = biArr[5][0];
        arrOrder[3][2] = biArr[5][5];
        arrOrder[3][3] = biArr[5][4];
        arrOrder[3][4] = biArr[4][1];
        arrOrder[3][5] = biArr[1][2];

        arrOrder[4][0] = biArr[2][4];
        arrOrder[4][1] = biArr[4][5];
        arrOrder[4][2] = biArr[4][4];
        arrOrder[4][3] = biArr[4][3];
        arrOrder[4][4] = biArr[4][2];
        arrOrder[4][5] = biArr[1][3];

        arrOrder[5][0] = biArr[2][3];
        arrOrder[5][1] = biArr[2][2];
        arrOrder[5][2] = biArr[2][1];
        arrOrder[5][3] = biArr[2][0];
        arrOrder[5][4] = biArr[1][5];
        arrOrder[5][5] = biArr[1][4];
        return arrOrder;
    };
};