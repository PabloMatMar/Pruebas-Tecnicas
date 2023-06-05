// https://www.codewars.com/kata/5902bc7aba39542b4a00003d

// Historia
// Un extraño corte de energía en el zoológico ha provocado que todas las puertas eléctricas de las jaulas funcionen mal y se abran...

// ¡Todos los animales están fuera y algunos se están comiendo unos a otros!

// ¡Es un desastre del zoológico!
// Aquí hay una lista de animales del zoológico y lo que pueden comer.


// el antílope come hierba
// el pez grande se come al pez pequeño
// insecto come hojas
// oso come peces grandes
// oso come bicho
// oso come pollo
// oso come vaca
// oso come hojas
// oso come oveja
// pollo come bicho
// la vaca come hierba
// zorro come pollo
// zorro come ovejas
// jirafa come hojas
// león come antílope
// león come vaca
// panda come hojas
// oveja come hierba


// ARGUMENTO
// Una cadena separada por comas que representa todas las cosas en el zoológico

// TAREA
// Averigua quién se come a quién hasta que ya no sea posible comer más.

// PRODUCCIÓN
// Una lista de cadenas (consulte el ejemplo a continuación) donde:

// El primer elemento es el zoológico inicial (igual que INPUT)
// El último elemento es una cadena separada por comas de cómo se ve el zoológico cuando han terminado de comer.
// Todos los demás elementos (del segundo al último-1) son "X eats Y" describiendo lo que sucedió

// ALGORITMIA
// Los animales solo pueden comer cosas que esten en su inmediatez(indice adyacente).

// Los animales siempre comen a su IZQUIERDA antes de comer a su DERECHA

// El animal MÁS A LA IZQUIERDA DEL ARRAY que pueda comer comerá antes que los demás.

// Cualquier otra cosa que pueda encontrar en el zoológico (que no se menciona arriba) no come nada y no es comestible

// EJEMPLO:
// Argumento
// "fox,bug,chicken,grass,sheep"
// Return
// ["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]

const whoEatsWho = animals => {
    const foodChain = {
        "antelope": "grass",
        "big-fish": "little-fish",
        "bug": "leaves",
        "bear": ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
        "chicken": "bug",
        "cow": "grass",
        "fox": ["chicken", "sheep"],
        "giraffe": "leaves",
        "lion": ["antelope", "cow"],
        "panda": "leaves",
        "sheep": "grass"
    };
    let arr = animals.split(',');
    const survivors = [animals];
    let check = true;
    while (check) {
        check = false;
        for (let i = 0; i < arr.length; i++) {
            if (foodChain[arr[i]] != undefined) {
                if (i != 0 && (foodChain[arr[i]] == arr[i - 1]) || (Array.isArray(foodChain[arr[i]]) && foodChain[arr[i]].includes(arr[i - 1]))) {
                    survivors.push(`${arr[i]} eats ${arr[i - 1]}`);
                    arr = arr.slice(0, i - 1).concat(arr.slice(i));
                    check = true;
                    break;
                };
                if (i != arr.length && (foodChain[arr[i]] == arr[i + 1]) || (Array.isArray(foodChain[arr[i]]) && foodChain[arr[i]].includes(arr[i + 1]))) {
                    survivors.push(`${arr[i]} eats ${arr[i + 1]}`);
                    arr = arr.slice(0, i + 1).concat(arr.slice(i + 2));
                    check = true;
                    break;
                };
            };
        };
    };
    arr.length > 1 ? survivors.push(arr.join(',')) : survivors.push(arr.join());
    return survivors;
};

//whoEatsWho(/*Pasale un string con nombres de animales incluidos en el objeto al inicio de la funcion y otras
// cosas si quieres, devolvera un array cuyo primer elemento sea dicha lista seguida de strings indicando quien
// se come a quien (el orden lo decide la posicion de los elementos en el array(leer enunciado)) y como ultimo
// elemento los supervivientes. Si quieres puedes añadir mas claves propiedad valor de otros animales que se
// comen a otros animales y otras cosas */)
