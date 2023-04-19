https://www.codewars.com/kata/54da539698b8a2ad76000228


// Vives en la ciudad de Cartesia, donde todos los caminos están dispuestos en una cuadrícula perfecta.
// Llegaste diez minutos antes a una cita, por lo que decidiste aprovechar para dar un pequeño paseo.
//La ciudad proporciona a sus ciudadanos una aplicación de generación de caminatas en sus teléfonos:
// cada vez que presiona el botón, le envía una serie de cadenas de una letra que representan las direcciones para caminar (por ejemplo, ['n', 's', 'w', 'mi']).
//Siempre camina solo una cuadra por cada letra (dirección) y sabe que le toma un minuto atravesar una
// cuadra de la ciudad, así que cree una función que se vuelva verdadera si la caminata que le da la
// aplicación le toma exactamente diez minutos (usted ¡No quiero llegar temprano ni tarde!) y, por
// supuesto, lo regresará a su punto de partida. Devuelve false en caso contrario.

// Nota : siempre recibirá una matriz válida que contiene una variedad aleatoria de letras de dirección
//(solo 'n', 's', 'e' o 'w'). Nunca le dará una matriz vacía (¡eso no es caminar, eso es quedarse quieto!).


function isValidWalk(walk) {
    let north = 0;
    let south = 0;
    let east = 0;
    let west = 0;
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') north++;
        else if (walk[i] === 's') south++;
        else if (walk[i] === 'e') east++;
        else if (walk[i] === 'w') west++;
    };
    if (south !== north || east !== west || north + west + east + south !== 10) return false;
    else return true;
};

//isValidWalk(/*Pásale un array cuyos elementos sean strings de una sola letra que este entre las
// siguientes n, s, w, e, si la suma de esas direciones toma diez minutos para ser recorrida y ademas
// te deja en el mismo punto devuelve true, si no devuelve false*/)