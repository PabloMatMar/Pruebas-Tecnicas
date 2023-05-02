https://www.codewars.com/kata/525caa5c1bf619d28c000335

// Si tuviéramos que configurar un juego de Tres en raya, querríamos saber si el estado actual del tablero está resuelto, ¿no? ¡Nuestro objetivo es crear una función que verifique eso por nosotros!

// Suponga que el tablero viene en forma de una matriz de 3x3, donde el valor es 0 si un lugar está vacío, 1 si es una "X" o 2 si es una "O", así:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// Queremos que nuestra función devuelva:

// -1si el tablero aún no está terminado Y nadie ha ganado todavía (hay espacios vacíos),
// 1si gana "X",
// 2si "O" ganó,
// 0si es un juego de gato (es decir, un empate).
// Puede suponer que el tablero pasado es válido en el contexto de un juego de Tres en raya.

function isSolved(board) {
    //diagonales
    if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[1][1] == board[2][2] && board[0][0] == 1) return 1;
    if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[1][1] == board[2][2] && board[0][0] == 2) return 2;
    if (board[2][0] == board[1][1] && board[2][0] == board[0][2] && board[1][1] == board[0][2] && board[0][0] == 1) return 1;
    if (board[2][0] == board[1][1] && board[2][0] == board[0][2] && board[1][1] == board[0][2] && board[0][0] == 2) return 2;
    for (let i = 0; i < board.length; i++) {
        //horizontales
        if (board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][1] == board[i][2] && board[0][0] == 1) return 1;
        if (board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][1] == board[i][2] && board[0][0] == 2) return 2;
        //verticales
        if (board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[1][i] == board[2][i] && board[0][0] == 1) return 1;
        if (board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[1][i] == board[2][i] && board[0][0] == 2) return 2;
    };

    for (let i = 0; i < board.length; i++)
        for (let j = 0; j < board.length; j++)
            if (board[i][j] == 0) return -1
    return 0;
};

//TRES EN RAYA!!
//isSolved(/*Pasale una matriz bidimensional de 3 x 3, si un elemento es 0 querra decir que nadie a escrito en esa casilla, si es 1 querra decir que es una X, si es 2 querra decir que es O (circulo), bien, si devuelve 1 significa que la partida la gano X, si devuelve 2 gano O, si devuelve -1 es que aun quedan casillas por marcar y nadie gano de momento, si devuelve 0 querra decir que fue empate */)