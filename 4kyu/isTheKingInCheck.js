https://www.codewars.com/kata/5e28ae347036fa001a504bbe

// Debe escribir una función que tome como entrada un tablero de ajedrez de 8x8 en forma de una matriz bidimensional de caracteres (o cadenas de longitud 1, según el idioma) y devuelva un valor booleano que indique si el rey está en jaque.

// La matriz incluirá 64 cuadrados que pueden contener los siguientes caracteres:

// '♔' para el Rey negro;
// '♛' para una reina blanca;
// '♝' para un alfil blanco;
// '♞' para un caballo blanco;
// '♜' para una torre blanca;
// '♟' para un peón blanco;
// ' ' (un espacio) si no hay ninguna pieza en ese cuadrado.
// Nota: estos son en realidad caracteres Unicode de ajedrez de colores invertidos porque el tema oscuro de codewars hace que el blanco parezca negro y viceversa. Utilice los caracteres que se muestran arriba.

// Siempre habrá exactamente un rey, que es el rey negro , mientras que todas las demás piezas son blancas .
// El tablero está orientado desde la perspectiva de las negras.
// Recuerde que los peones solo pueden moverse y tomar hacia adelante .
// También ten cuidado con las líneas de visión de las piezas ;-) .

// Todas las piezas estan dando jaque al rey, cualquiera de ellas sola deberia devolver un true, salvo que tenga una pieza intercalada que no ataque en la misma direccion en cuyo caso deberia devolver false, excepto si es un caballo que se salta sobre las piezas intercaladas en cuyo caso debe seguir devolviendo false: divierteté!

[
    ['♝', ' ', '♝', ' ', ' ', ' ', ' ', ' '],
    [' ', '♔', ' ', ' ', ' ', ' ', ' ', ' '],
    ['♝', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', '♝']

]

function kingIsInCheck(chessboard) {
    let positionKing = ["vertical", "horizontal"];
    for (let v = 0; v < chessboard.length; v++) {
        for (let h = 0; h < chessboard.length; h++) {
            if ('♔' === chessboard[v][h]) {
                positionKing[0] = v;
                positionKing[1] = h;
                break;
            }
        }

    }

    //Para la torre Y la dama:
    for (let i = 0; i < 8; i++) {
        //Comprueba SI hay alguna TORRE o DAMA alineada HORIZONTALMENTE con el rey
        if ('♜' === chessboard[positionKing[0]][i] || '♛' === chessboard[positionKing[0]][i]) {

            if(positionKing[1] + 1 >= 0 && positionKing[1] + 1 <= 7 && chessboard[positionKing[0]][positionKing[1]+1] === '♜'||positionKing[1] + 1 >= 0 && positionKing[1] + 1 <= 7 && chessboard[positionKing[0]][positionKing[1]+1] === '♛') return true;

            if(positionKing[1] - 1 >= 0 && positionKing[1] - 1 <= 7 && chessboard[positionKing[0]][positionKing[1]-1] === '♜'||positionKing[1] - 1 >= 0 && positionKing[1] - 1 <= 7 && chessboard[positionKing[0]][positionKing[1]-1] === '♛') return true;
            let check = false;
            //Comprueba que la linea de ataque esta despejeda desde el rey hasta la torre SI LA TORRE ESTA A LA DERECHA DEL REY
            for (let j = positionKing[1] + 1; j < i; j++) {
                if (chessboard[positionKing[0]][j] === ' ') check = true;
                else check = false //Podria haber otra pieza intercalada que a su vez de jaque pero esto ya se comprobara en cada pieza o si es la misma (otra torre por ejemplo) se hara en las siguientes iteraciones de este bucle
                if (check === false) break;

            }
            //Comprueba que la linea de ataque esta despejeda desde el rey hasta la torre SI LA TORRE ESTA A LA IZQUIERDA DEL REY
            for (let j = positionKing[1] - 1; j > i; j--) {
                if (chessboard[positionKing[0]][j] === ' ') check = true;
                else check = false //Podria haber otra pieza intercalada...
                if (check === false) break;
            }
            if (check === true) return true;
        }
        //Comprueba SI hay alguna TORRE o DAMA alineada VERTICALMENTE con el rey
        if ('♜' === chessboard[i][positionKing[1]] || '♛' === chessboard[i][positionKing[1]]) {
            if(positionKing[0] + 1 >= 0 && positionKing[0] + 1 <= 7 && chessboard[positionKing[0]+1][positionKing[1]] === '♜'||positionKing[0] + 1 >= 0 && positionKing[0] + 1 <= 7 && chessboard[positionKing[0]+1][positionKing[1]] === '♛' ) return true;

            if(positionKing[0] - 1 >= 0 && positionKing[0] - 1 <= 7 && chessboard[positionKing[0]-1][positionKing[1]] === '♜'||positionKing[0] - 1 >= 0 && positionKing[0] - 1 <= 7 && chessboard[positionKing[0]-1][positionKing[1]] === '♛') return true;
            let check = false;
            //Comprueba que la linea de ataque esta despejeda desde el rey hasta la torre SI LA TORRE ESTA A ABAJO DEL REY
            for (let j = positionKing[0] + 1; j < i; j++) {
                if (chessboard[j][positionKing[1]] === ' ') check = true;
                else check = false //Podria haber otra pieza intercalada...
                if (check === false) break;

            };
            //Comprueba que la linea de ataque esta despejeda desde el rey hasta la torre SI LA TORRE ESTA A ARRIBA DEL REY
            for (let j = positionKing[0] - 1; j > i; j--) {
                if (chessboard[j][positionKing[1]] === ' ') check = true;
                else check = false //Podria haber otra pieza intercalada...
                if (check === false) break;

            }
            if (check === true) return true;
        }
    }

    //Para el alfil y la dama:

    for (let i = 1; i < 8; i++) {
        if (positionKing[0] + i >= 0 && positionKing[0] + i <= 7 && positionKing[1] + i >= 0 && positionKing[0] + i <= 7) {


            if ('♝' === chessboard[positionKing[0] + i][positionKing[1] + i] || '♛' === chessboard[positionKing[0] + i][positionKing[1] + i]) {
                if (i === 1) return true;
                let check = false;
                //Comprueba que la linea de ataque esta despejeda desde el rey hasta el alfil o la dama cuando la pieza ofensiva esta ABAJO A LA DERECHA
                for (let j = 1; j < i; j++) {
                    if (positionKing[0] + j >= 0 && positionKing[0] + j <= 7 && positionKing[1] + j >= 0 && positionKing[1] + j <= 7) {
                        if (chessboard[positionKing[0] + j][positionKing[1] + j] === ' ') check = true;
                        else check = false //Podria haber otra pieza intercalada...
                        if (check === false) break;

                    }
                }
                if (check === true) return true;
            }
        }


        if (positionKing[0] + i >= 0 && positionKing[0] + i <= 7 && positionKing[1] - i >= 0 && positionKing[1] - i <= 7) {
            if ('♝' === chessboard[positionKing[0] + i][positionKing[1] - i] || '♛' === chessboard[positionKing[0] + i][positionKing[1] - i]) {
                if (i === 1) return true;
                let check = false;
                //Comprueba que la linea de ataque esta despejeda desde el rey hasta el alfil o la dama cuando la pieza ofensiva esta ABAJO A LA IZQUIERDA
                for (let j = 1; j < i; j++) {
                    if (positionKing[0] + j >= 0 && positionKing[0] + j <= 7 && positionKing[1] - j >= 0 && positionKing[1] - j <= 7) {
                        if (chessboard[positionKing[0] + j][positionKing[1] - j] === ' ') check = true;
                        else check = false //Podria haber otra pieza intercalada...
                        if (check === false) break;

                    }
                }
                if (check === true) return true;
            }

        }
        if (positionKing[0] - i >= 0 && positionKing[0] - i <= 7 && positionKing[1] + i >= 0 && positionKing[1] + i <= 7) {
            if ('♝' === chessboard[positionKing[0] - i][positionKing[1] + i] || '♛' === chessboard[positionKing[0] - i][positionKing[1] + i]) {
                if (i === 1) return true;
                let check = false;
                //Comprueba que la linea de ataque esta despejeda desde el rey hasta el alfil o la dama cuando la pieza ofensiva esta ARRIBA A LA DERECHA
                for (let j = 1; j < i; j++) {
                    if (positionKing[0] - j >= 0 && positionKing[0] - j <= 7 && positionKing[1] + j >= 0 && positionKing[1] + j <= 7) {
                        if (chessboard[positionKing[0] - j][positionKing[1] + j] === ' ') check = true;
                        else check = false //Podria haber otra pieza intercalada...
                        if (check === false) break;

                    }
                }
                if (check === true) return true;
            }

        }

        if (positionKing[0] - i >= 0 && positionKing[0] - i <= 7 && positionKing[1] - i >= 0 && positionKing[0] - i <= 7) {
            if ('♝' === chessboard[positionKing[0] - i][positionKing[1] - i] || '♛' === chessboard[positionKing[0] - i][positionKing[1] - i]) {
                if (i === 1) return true;
                let check = false;
                //Comprueba que la linea de ataque esta despejeda desde el rey hasta el alfil o la dama cuando la pieza ofensiva esta ARRIBA A LA IZQUIERDA
                for (let j = 1; j < i; j++) {
                    if (positionKing[0] - j >= 0 && positionKing[0] - j <= 7 && positionKing[1] - j >= 0 && positionKing[1] - j <= 7) {
                        if (chessboard[positionKing[0] - j][positionKing[1] - j] === ' ') check = true;
                        else check = false //Podria haber otra pieza intercalada...
                        if (check === false) break;

                    }
                }
                if (check === true) return true;
            }

        }
    }

    //Peon una casilla hacia arriba y otra a la IZQUIERDA:

    if (positionKing[0] - 1 >= 0 && positionKing[0] - 1 <= 7 && positionKing[1] - 1 >= 0 && positionKing[1] - 1 <= 7 && chessboard[positionKing[0] - 1][positionKing[1] - 1] === '♟') return true;

    //Peon una casilla hacia arriba y otra a la DERECHA:

    if (positionKing[0] - 1 >= 0 && positionKing[0] - 1 <= 7 && positionKing[1] + 1 >= 0 && positionKing[1] + 1 <= 7 && chessboard[positionKing[0] - 1][positionKing[1] + 1] === '♟') return true;



    //caballo dos hacia ABAJO uno hacia la DERECHA:

    if (positionKing[0] + 2 >= 0 && positionKing[0] + 2 <= 7 && positionKing[1] + 1 >= 0 && positionKing[1] + 1 <= 7 && chessboard[positionKing[0] + 2][positionKing[1] + 1] === '♞') return true;

    //caballo dos hacia ABAJO uno hacia la IZQUIERDA:

    if (positionKing[0] + 2 >= 0 && positionKing[0] + 2 <= 7 && positionKing[1] - 1 >= 0 && positionKing[1] - 1 <= 7 && chessboard[positionKing[0] + 2][positionKing[1] - 1] === '♞') return true;

    //caballo dos hacia ARRIBA uno hacia la DERECHA:

    if (positionKing[0] - 2 >= 0 && positionKing[0] - 2 <= 7 && positionKing[1] + 1 >= 0 && positionKing[1] + 1 <= 7 && chessboard[positionKing[0] - 2][positionKing[1] + 1] === '♞') return true;

    //caballo dos hacia ARRIBA uno hacia la IZQUIERDA:

    if (positionKing[0] - 2 >= 0 && positionKing[0] - 2 <= 7 && positionKing[1] - 1 >= 0 && positionKing[1] - 1 <= 7 && chessboard[positionKing[0] - 2][positionKing[1] - 1] === '♞') return true;

    //caballo dos hacia la IZQUIERDA uno hacia ARRIBA:

    if (positionKing[0] - 1 >= 0 && positionKing[0] - 1 <= 7 && positionKing[1] - 2 >= 0 && positionKing[1] - 2 <= 7 && chessboard[positionKing[0] - 1][positionKing[1] - 2] === '♞') return true;

    //caballo dos hacia la IZQUIERDA uno hacia ABAJO:

    if (positionKing[0] + 1 >= 0 && positionKing[0] + 1 <= 7 && positionKing[1] - 2 >= 0 && positionKing[1] - 2 <= 7 && chessboard[positionKing[0] + 1][positionKing[1] - 2] === '♞') return true;

    //caballo dos hacia la DERECHA uno hacia ABAJO:

    if (positionKing[0] + 1 >= 0 && positionKing[0] + 1 <= 7 && positionKing[1] + 2 >= 0 && positionKing[1] + 2 <= 7 && chessboard[positionKing[0] + 1][positionKing[1] + 2] === '♞') return true;

    //caballo dos hacia la DERECHA uno hacia ARRIBA:

    if (positionKing[0] - 1 >= 0 && positionKing[0] - 1 <= 7 && positionKing[1] + 2 >= 0 && positionKing[1] + 2 <= 7 && chessboard[positionKing[0] - 1][positionKing[1] + 2] === '♞') return true;

    //Rey a "salvo"
    return false;
};

//kingIsInCheck(/*Pásale una matriz bidimensional de 8x8, los espacios son casillas vacias, coloca en una
// el rey negro, en el resto puedes colocar cualquier pieza de ajedrez blanca, si el rey esta en jaque 
//devolverá true, si esta a salvo devolvera false */)

// '♔' para el Rey negro;
// '♛' para una reina blanca;
// '♝' para un alfil blanco;
// '♞' para un caballo blanco;
// '♜' para una torre blanca;
// '♟' para un peón blanco;