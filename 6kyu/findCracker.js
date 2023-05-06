https://www.codewars.com/kata/59f70440bee845599c000085

// Alguien hackeo el registro de notas. El registro de cada estudiante se da como una array.
// Los objetos en la array se dan nuevamente como una array de puntajes para cada nombre y puntaje total. ex>

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
// ["name2", 110, ["B", "A", "A", "A"]],
// ["name3", 200, ["B", "A", "A", "C"]],
// ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
// ];
// La puntuación de cada grado es:

// A: 30 puntos
// B: 20 ​​puntos
// C: 10 puntos
// D: 5 puntos
// Tod lo demás: 0 puntos
// Si hay 5 o más cursos y todos los cursos tienen una calificación de B o superior, se otorgan 20 puntos adicionales. Después de todos los cálculos, la puntuación total debe tener un límite de 200 puntos.

// Devuelve los nombres pirateados como un array al puntuar con esta regla.

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
// ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
// ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
// ,
// ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
// ];

// return ["name1", "name3"];

function findHack(arr) {
    const solution = []
    for (let i = 0; i < arr.length; i++) {
        let notes = arr[i][2];
        let iV = 0;
        let count = 0;
        for (let j = 0; j < notes.length; j++) {
            if (notes[j] === 'A' || notes[j] === 'B') count++
            if (notes[j] === 'A') notes[j] = 30;
            else if (notes[j] === 'B') notes[j] = 20;
            else if (notes[j] === 'C') notes[j] = 10;
            else if (notes[j] === 'D') notes[j] = 5;
            else notes[j] = 0;
        }
        if (count === notes.length && count >= 5) iV = 20;
        let sum = notes.reduce((a, b) => a + b, iV);
        if (sum > 200 && iV === 20) sum = sum - 20;
        if (sum !== arr[i][1] || sum > 200) solution.push(arr[i][0]);
    };
    return solution;
};
//findHack(Pasale un array de arrays, cada array tendra 1 elemento: nombre, segundo elemento: putuacion en
// numeros, tercer elemento: las notas en letras mayusculas de la A a la Z, si la puntuacion de no
// corresponde con las notas devolverá el nombre de ese alumno)

// A: 30 puntos
// B: 20 ​​puntos
// C: 10 puntos
// D: 5 puntos
//**Si todas las notas son b o superior y tiene mas de cinco obtiene 20 puntos extra, en cualquier caso la
//puntuacion total no puede pasar de 200.