https://www.codewars.com/kata/5544c7a5cb454edb3c000047

// Un niño está jugando con una pelota en el piso n de un edificio alto. Se conoce la altura de este piso sobre el nivel del suelo, h .

// Deja caer la pelota por la ventana. La pelota rebota (por ejemplo), a dos tercios de su altura (un rebote de 0,66).

// Su madre mira por una ventana a 1,5 metros del suelo.

// ¿Cuántas veces verá la madre pasar la pelota frente a su ventana (incluyendo cuando está cayendo y rebotando?


//PARAMETROS:


// Se deben cumplir tres condiciones para que un experimento sea válido:
// El parámetro flotante "h" en metros debe ser mayor que 0
// El parámetro flotante "rebote" debe ser mayor que 0 y menor que 1
// El parámetro flotante "ventana" debe ser menor que h.
// Si se cumplen las tres condiciones anteriores, devuelva un número entero positivo; de lo contrario, devuelva -1.

// Nota:
// La pelota solo se puede ver si la altura de la pelota que rebota es estrictamente mayor que el parámetro de la ventana.

// Ejemplos:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h, bounce, window) {
    let count = 2;
    let bounces = 0;
    if (h > 0 && bounce > 0 && bounce < 1 && window < h && bounce < h) {
        if (((h * bounce) / window) > 1) {
            bounces = bounces + 3;
            while ((((h * (bounce ** count)) / window) > 1)) {
                count++;
                bounces = bounces + 2;
            }
            return bounces;
        }
        else return 1;

    } else return -1;
};

//bouncingBall(/*En el enunciado se explica muy bien que tres parametros tienes que pasarle*/)