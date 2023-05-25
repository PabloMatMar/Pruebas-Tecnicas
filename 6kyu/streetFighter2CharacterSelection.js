// https://www.codewars.com/kata/5853213063adbd1b9b0000be

// Tendrás que simular el comportamiento de la pantalla de selección de personajes del videojuego street fighter 2, más concretamente la cuadrícula de selección. Dicha pantalla se ve así:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Aporte

// la lista de personajes del juego en una cuadrícula de 2x6;
// la posición inicial del cursor de selección [x, y]
// una lista de movimientos del cursor de selección (que son up, down, left, right);
// Producción


// Normas

// ¡El cursor de selección es circular horizontalmente pero no verticalmente !

// Como recordará del juego, el cursor de selección gira horizontalmente pero no verticalmente; eso significa que si estoy en el extremo izquierdo y trato de ir a la izquierda otra vez, llegaré al extremo derecho (ejemplos: de Ryu a Vega, de Ken a M.Bison) y viceversa de extremo derecho a extremo izquierdo.

// En cambio, si trato de ir más arriba desde lo más alto o más abajo desde lo más bajo, me quedaré donde estoy (ejemplos: no puedes ir más abajo que la fila más baja: Ken, Chun Li, Zangief, Dhalsim, Sagat y M.Bison en la imagen de arriba; no puedes ir más arriba que la fila más alta: Ryu, E.Honda, Blanka, Guile, Balrog y Vega en la imagen de arriba).

const streetFighterSelection = (fighters, position, moves) => {
    let characters = [];
    let subArrIndex = position[0];
    let elementIndex = position[1];
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == 'left') {
            elementIndex--
            if (elementIndex < 0)
                elementIndex = 5;
            characters.push(fighters[subArrIndex][elementIndex])
        }
        else if (moves[i] == 'right') {
            elementIndex++
            if (elementIndex > 5)
                elementIndex = 0
            characters.push(fighters[subArrIndex][elementIndex])
        }
        else if (moves[i] == 'down') {
            subArrIndex++
            if (subArrIndex > 1)
                subArrIndex = 1;
            characters.push(fighters[subArrIndex][elementIndex])
        }
        else if (moves[i] == 'up') {
            subArrIndex--
            if (subArrIndex < 0)
                subArrIndex = 0;
            characters.push(fighters[subArrIndex][elementIndex])
        };
    };
    return characters;
};

//ARGUMENTOS:
//  fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
//   ]
//   position =  [rango: 0-1, rango: 0-5] por ejemplo: [0,3]
//   moves = por ejmplo: ['up', 'left', 'right', 'left', 'left']

// streetFighterSelection(/*Deve devolver cada personaje por el que pasa el cursor*/)
// NOTA- el cursor es circular horizontalmente pero no verticalmente