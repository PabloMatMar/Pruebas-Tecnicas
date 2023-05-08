https://www.codewars.com/kata/58539230879867a8cd00011c

// Las madres organizaron una fiesta de baile para los niños en la escuela. En esa fiesta solo hay madres y sus hijos. Todos se estaban divirtiendo mucho en la pista de baile cuando de repente todas las luces se apagaron. Es una noche oscura y nadie puede verse. Pero estabas volando cerca y puedes ver en la oscuridad y tienes la capacidad de teletransportar personas a donde quieras.

// Leyenda:
// -Las letras mayúsculas representan a las madres, las minúsculas a sus hijos, es decir, "A" los hijos de la madre son "aaaa".
// -Entrada de función: la cadena contiene solo letras, las letras mayúsculas son únicas.
// Tarea:
// Coloque a todas las personas en orden alfabético donde las madres son seguidas por sus hijos, es decir, "aAbaBb" => "AaaBbb".

const findChildren = (str) => {
    let moms = [];
    let sons = [];
    let solution = [];
    str.split('').map(e => e != e.toUpperCase() ? sons.push(e) : moms.push(e));
    moms = moms.sort();
    sons = sons.sort();
    let i = 0;
    while (sons.length > 0) {
        if (moms[0] == undefined) {
            solution.push(sons[0]);
            sons = sons.slice(1);
        };
        if (i == 0) {
            solution.push(moms[0]);
            moms = moms.slice(1);
            solution.push(sons[0]);
            sons = sons.slice(1);
        } else {
            sons[0] == solution[solution.length - 1].toLowerCase() ? (solution.push(sons[0]), sons = sons.slice(1)) : (solution.push(moms[0]), moms = moms.slice(1));

        };
        i++;
    };
    return solution.join('');
};
//findChildren(Pasale un string de letras, una mayuscula de cada y tantas minisculas como quieras, ordenará
// alfabeticamente colocando primero la letra mayuscula y despues las minisculas(para cada mayuscula a de
// haber minusculas correspondientes))