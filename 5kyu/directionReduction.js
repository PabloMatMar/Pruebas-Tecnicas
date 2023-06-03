// // https://www.codewars.com/kata/550f22f4d758534c1100025a

//EXPLICACION MAS BREVE Y CLARA DEBAJO DE LA FUNCION, EN LA LLAMADA ;)

// Érase una vez, en un camino a través del viejo y salvaje oeste montañoso ,...
// … a un hombre se le dieron instrucciones para ir de un punto a otro. Las direcciones eran "NORTE", "SUR", "OESTE", "ESTE". Claramente, "NORTE" y "SUR" son opuestos, "OESTE" y "ESTE" también.

// Ir en una dirección y regresar en la dirección opuesta de inmediato es un esfuerzo innecesario. Ya que estamos en el salvaje oeste, con un clima terrible y poca agua, es importante que ahorres algo de energía, ¡de lo contrario podrías morir de sed!

// Cómo crucé un desierto montañoso de manera inteligente.
// Las indicaciones que se le dan al hombre son, por ejemplo, las siguientes (según el idioma):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// Inmediatamente puede ver que ir "NORTE" e inmediatamente "SUR" no es razonable, ¡mejor quédese en el mismo lugar! Entonces la tarea es darle al hombre una versión simplificada del plan. Un mejor plan en este caso es simplemente:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Otros ejemplos:
// En ["NORTH", "SOUTH", "EAST", "WEST"], la dirección "NORTH" + "SOUTH"es yendo hacia el norte y regresando de inmediato .

// El camino se vuelve ["EAST", "WEST"], ahora "EAST"y "WEST"se aniquilan unos a otros, por lo tanto, el resultado final es [](nulo en Clojure).

// En ["NORTE", "ESTE", "OESTE", "SUR", "OESTE", "OESTE"], "NORTE" y "SUR" no son directamente opuestos pero se vuelven directamente opuestos después de la reducción de "ESTE" y "OESTE" por lo que todo el camino es reducible a ["OESTE", "OESTE"].

// Tarea
// Escriba una función dirReducque tome un array de cadenas y devuelva un array de cadenas con las direcciones innecesarias eliminadas (W<->E o S<->N una al lado de la otra ).

// La versión de Haskell toma una lista de direcciones con data Direction = North | East | West | South.
// La versión de Clojure devuelve nil cuando la ruta se reduce a nada.
// La versión de Rust toma una porción de enum Direction {North, East, West, South}.
// Vea más ejemplos en "Pruebas de muestra:"
// notas
// No todos los caminos se pueden simplificar. El camino ["NORTE", "OESTE", "SUR", "ESTE"] no es reducible. "NORTE" y "OESTE", "OESTE" y "SUR", "SUR" y "ESTE" no son directamente opuestos entre sí y no pueden convertirse en tales. Por lo tanto, la ruta de resultado es en sí misma: ["NORTE", "OESTE", "SUR", "ESTE"].
// si desea traducir, por favor pregunte antes de traducir.

const dirReduc = arr => {
    const values = { 'NORTH': 1, 'SOUTH': -1, 'EAST': 2, 'WEST': -2 };
    let check = true;
    const reduce = (arr) => {
        if (check == true) {
            check = false;
            for (let i = 0; i < arr.length; i++)
                if (i != arr.length - 1 && values[arr[i]] + values[arr[i + 1]] == 0) {
                    arr = arr.slice(0, i).concat(arr.slice(i + 2));
                    check = true;
                };
            return reduce(arr);
        };
        return arr;
    };
    return reduce(arr);
};
// dirReduce(/*Pasale un array con elementos 'SOUTH', 'NORTH', 'WEST', 'EAST', los tomara como indicaciones en 
// una direccion que reccoren siempre la misma ditancia. Eliminará las direcciones que redunden, ir al sur y 
// despues al norte por ejemplo, pero debera ser justo despues o despues de la eliminacion de otra redundancia.
// Si no, aunque redunden se podria estar esquivando algo. Por ejemplo arriba + derecha + abajo es lo mismo que
// izquierda, pero en izquierda podria haber un obstaculo por lo que por eso hacemos arriba+derecha+abajo. 
// Siendo asi, es entendible que no se deba eliminar la redundancia arriba-abajo, la unica razon por la que no
// pudiera haber un obstaculo es porque bajamos y subimos por el mismo sitio que es cuando procedemos a 
// elminarlo */)