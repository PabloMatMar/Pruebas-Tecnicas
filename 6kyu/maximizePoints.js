https://www.codewars.com/kata/58fec262184b6dc30800000d

// Dos equipos están jugando un partido de tenis. Los tamaños de los equipos son los mismos y cada jugador del primer equipo juega contra el jugador correspondiente del segundo equipo.

// Cada jugador tiene un cierto nivel de poder. Si un jugador tiene un nivel de poder más alto que su oponente, tiene la garantía de ganar y su equipo obtendrá 1 punto por esa victoria, mientras que los oponentes obtendrán 0.

// Eres el entrenador del primer equipo y conoces los niveles de potencia de todos los jugadores antes de que empiece el partido. Desea reorganizar a los jugadores de su equipo para obtener la puntuación total más alta posible.

// De entrada y salida
// [input]matriz de enterosteam1
// Los niveles de potencia de los jugadores del primer equipo. Los equipos tienen menos de 100jugadores y cada nivel de poder es menor que 100.

// [entrada] matriz de enterosteam2
// Matriz de la misma longitud que el equipo 1, los niveles de potencia de los jugadores del segundo equipo.

// [output]un entero
// El número máximo de puntos que puede obtener el primer equipo.

// Ejemplo
// Para team1 = [3,2,4] and team2 = [1,2,3], la salida debería ser 3.

// Si no reorganizas a los jugadores del primer equipo, obtendrá 2 points, ya que 3 > 1, 2 = 2 and 4 > 3.

// Sin embargo, si cambia el orden de los jugadores a [2, 3, 4], el primer equipo obtendrá 3 points.


function maximizePoints(team0, team2) {
    let team1 = team0;
    let count = 0;
    let check;
    let half1;
    let half2;
    let num = Infinity;
    let point;
    for (let i = 0; i < team2.length; i++) {
        for (let j = 0; j < team2.length; j++) {
            if (team1[j] < num && team1[j] > team2[i] && team1[j] !== undefined) {
                num = team1[j];
                check = true;
                point = j;
            }
            if (j === team2.length - 1 && check === true) {
                half1 = team1.slice(0, point);
                half2 = team1.slice(point + 1, team1.length);
                team1 = half1.concat(half2);
                count++;
                check = false;
                num = Infinity;

            };
        };
    };
    return count;
};

//maximizePoints(/*Pásale dos arrays de numeros con la misma longitud, "ordenará" el primer array para
// devoler cuantas veces puede llegar a conseguirse arr1Ordenado[i] > arr2Introducido[i] */)