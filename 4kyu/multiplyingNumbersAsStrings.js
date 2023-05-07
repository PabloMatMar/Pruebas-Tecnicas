// Escriba una función que acepte una matriz cuadrada ( N x Narreglo 2D) y devuelva el determinante de la matriz.

// Cómo tomar el determinante de una matriz: lo más simple es comenzar con los casos más pequeños:

// Una matriz de 1x1 |a|tiene determinante a.

// Una matriz de 2x2 [ [a, b], [c, d] ]o

// |a  b|
// |c  d|
// tiene determinante: a*d - b*c.

// El determinante de una n x nmatriz de tamaño se calcula reduciendo el problema al cálculo de los determinantes de nmatrices de n-1 x n-1tamaño.

// Para el caso de 3x3, [ [a, b, c], [d, e, f], [g, h, i] ]o

// |a b c 0|  
// |d e f 1|  
// |g h i 2|
// |0 0 0 0|  
// el determinante es: a * det(a_minor) - b * det(b_minor) + c * det(c_minor)donde det(a_minor)se refiere a tomar el determinante de la matriz 2x2 creada al tachar la fila y la columna en la que aparece el elemento a:

// |- - -|
// |- e f|
// |- h i|  
// Nótese la alternancia de signos.

// El determinante de matrices más grandes se calcula de manera análoga, por ejemplo, si M es una matriz de 4x4 con la primera fila [a, b, c, d], entonces:

// det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)

function determinant(m) {
    if (m.length == 1) return m[0][0]
    if (m.length == 2) return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0])

    let minor = 0;
    let diagonalI = 0;
    let diagonalD = 0;
    let count = 0;

    for (let i = 0; i < m.length; i++) {
        m[0][i]

        for (let j = 0; j < m.length; j++) {
            count++
            if (j != 0 && i == 0) {
                diagonalI == 0 ? diagonalI = m[j][j] : diagonalI = diagonalI * m[j][j];
                diagonalD == 0 ? diagonalD = m[j][j + 1] : diagonalD = diagonalD * m[j][j - 1];
            };

            if (j != 1 && i == 1) {
                diagonalI == 0 ? diagonalI = m[j+1][j] : diagonalI = diagonalI * m[j][j];
                diagonalD == 0 ? diagonalD = m[j+2][j] : diagonalD = diagonalD * m[j-1][j];
            };

            if (j != 2 && i == 2) {
                diagonalI == 0 ? diagonalI = m[j+1][j] : diagonalI = diagonalI * m[j+1][j];
                diagonalD == 0 ? diagonalD = m[j+1][j+1] : diagonalD = diagonalD * m[j+1][j-1];
            }
        };
        console.log(m[0][i] * (diagonalI - diagonalD));
        i % 2 == 0 ? minor = minor + (m[0][i] * (diagonalI - diagonalD)) : minor = minor - (m[0][i] * (diagonalI - diagonalD));
        diagonalD = 0;
        diagonalI = 0;

    };

    return minor;
};