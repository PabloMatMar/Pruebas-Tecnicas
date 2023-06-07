// https://www.codewars.com/kata/566b490c8b164e03f8000002

//EXPLICACION MAS BREVE DEBAJO DE LA FUNCION! 
// Tú y tus amigos han estado luchando con sus robots Rock 'Em, Sock 'Em, pero las cosas se han vuelto un poco aburridas. Cada uno de ustedes ha decidido agregar algunas características nuevas y sorprendentes a su robot y automatizarlas para luchar hasta la muerte.

// Cada robot estará representado por un objeto. Se le darán dos objetos de robot y un objeto de tácticas de batalla y cuánto daño producen. Cada robot tendrá un nombre, puntos de golpe, velocidad y luego una lista de tácticas de batalla que deben realizar en orden. Cualquiera que sea el robot que tenga la mejor velocidad, atacará primero con una táctica de batalla.

// Tu trabajo es decidir quién gana.

// Ejemplo:

//  robot1 = {
//   "name": "Rocky",
//   "health": 100,
//   "speed": 20,
//   "tactics": ["punch", "punch", "laser", "missile"]
//  }
//  robot2 = {
//    "name": "Missile Bob",
//    "health": 100,
//    "speed": 21,
//    "tactics": ["missile", "missile", "missile", "missile"]
//  }
//  tactics = {
//    "punch": 20,
//    "laser": 30,
//    "missile": 35
//  }
 
//  fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."
// robot2 usa la primera táctica, "misil", porque tiene la mayor velocidad. Esto reduce la salud de robot1 en 35. Ahora robot1 usa un puñetazo, y así sucesivamente.

// Normas

// Un robot con la mayor velocidad ataca primero. Si están empatados, el primer robot que pasó ataca primero.
// Los robots alternan turnos de ataque. Las tácticas se usan en orden.
// Una pelea termina cuando un robot tiene 0 o menos salud o ambos robots se han quedado sin tácticas.
// Un robot al que no le quedan tácticas no hace más daño, pero el otro robot puede usar el resto de sus tácticas.
// Si ambos robots se quedan sin tácticas, gana el que tenga más salud. Devuelve el mensaje "{Name} ha ganado la pelea".
// Si ambos robots se quedan sin tácticas y están empatados en salud, la pelea es un empate. Volver "La lucha fue un empate".


const fight = (robot1, robot2, points) => {
    robot1.tactics = robot1.tactics.map((e, i, arr) => e = points[arr[i]]);
    robot2.tactics = robot2.tactics.map((e, i, arr) => e = points[arr[i]]);
    let round = 0;
    robot1.speed >= robot2.speed && robot1.tactics.length >= 1 ? round = 1 : round = -1;
    while (robot1.health > 0 && robot2.health > 0) {
        if (round >= 0) {
            if (robot1.tactics.length >= 1) {
                robot2.health = robot2.health - robot1.tactics[0];
                if (robot2.health <= 0)
                    return `${robot1.name} has won the fight.`
                robot1.tactics = robot1.tactics.slice(1);
            } else if (robot2.tactics.length == 0)
                break;
            round = -1;
        } else if (round <= 0) {
            if (robot2.tactics.length >= 1) {
                robot1.health = robot1.health - robot2.tactics[0];
                if (robot1.health <= 0)
                    return `${robot2.name} has won the fight.`
                robot2.tactics = robot2.tactics.slice(1);
            } else if (robot1.tactics.length == 0)
            break;
            round = 1;
        } else break;
    };
    if (robot1.health == robot2.health)
        return "The fight was a draw.";
    return robot1.health > robot2.health ? `${robot1.name} has won the fight.` : `${robot2.name} has won the fight.`;
};

// fight({
//     "name": "El Mutilador",
//     "health": 275,
//     "speed": 120,
//     "tactics": ["Cortar", "Desollar", "Quebrantar"]
// },
// {
//     "name": "Billy el Niño",
//     "health": 200,
//     "speed": 210,
//     "tactics": ["HeadShoot", "Latigazo", "Coz"]
// },
// {
//     "Cortar": 40,
//     "Desollar": 80,
//     "Quebrantar": 90,
//     "HeadShoot": 160,
//     "Latigazo": 30,
//     "Coz": 60
// })

//fight(Pasale tres argumentos(robot1, robot2, dañoDeCadaTecnica).
//Usa el ejemplo de abajo.
//El mas rapido ataca primero. Ataca con el primer ataque de sus tacticas (indice 0), y despues se gasta,
// si el segundo sigue con vida contraataca, y asi hasta que o ambos se queden sin tecnicas, o uno muera.
// Devolverá quien gano o si hubo empate, añade las tecnicas que quieras, pero acuerdate de añadir la tecnica
// en el tercer objeto como propiedad con un valor numerico para el daño que quieras que haga, debes reflejarla!)