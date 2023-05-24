// https://www.codewars.com/kata/52afd1fe8f7c52a0e1000304

// ¿Quién asiste a la fiesta?
// Escriba una función llamada getAttendees que tome dos argumentos:

// Array que contiene todos los nombres de las personas que Santa invitó
// Un Array de respuestas (objetos) con la siguiente estructura:
// {name: 'Easter Bunny', response: 'declined'}
// getAttendeesdebe devolver un Array que contenga los nombres de todas las personas que aceptaron la invitación de Santa y los nombres de los que no respondieron a la invitación. Santa es muy positivo, por lo que asume que aquellos que no respondieron aparecerán. Cualquiera que haya rechazado la invitación no asistirá a la fiesta. Si nadie asiste a la fiesta, devuelve un Array vacío [].

// Ejemplo:
// Javascript/CaféScript:

// getAttendees( ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 'Jack Frost'] ,
//    [ 
//      {name: 'Easter Bunny', response: 'declined'}, 
//      {name: 'Jack Frost', response: 'declined'}, 
//      {name: 'Tooth Fairy', response: 'accepted'} 
//    ] );// => returns ['Tooth Fairy', 'Frosty the Snowman']

const getAttendees = (names, responses) => {
    const solution = [];
    const accepted = responses.map(e => e.response == 'accepted' ? e.name : null);
    names.map(e => responses.map(el => el.name != e ? true : false).includes(false) ? '' : solution.push(e));
    return accepted.concat(solution).filter(e => e != null && e!= '');
};
//getAttendees(/* Pasale dos argumentos, un array con nombres, y un array de objetos con propiedades name y
// response, con valores nombre(puede o no estar en el array del primer argumento) y declined o accepted
// respectivamente. Devolveerá un array con todos los nombres que aceptaron mas los nombres que esten en el
// primer argumento pero no en el segundo*/)