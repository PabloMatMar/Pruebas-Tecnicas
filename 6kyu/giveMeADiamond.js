// Jamie es programadora y la novia de James. Le gustan los diamantes y quiere un collar de diamantes de James. Como James no sabe cómo hacer que esto suceda, necesita tu ayuda.

// Tarea
// Debe devolver una cadena que parezca una forma de diamante cuando se imprima en la pantalla, utilizando *caracteres de asterisco ( ). Se deben eliminar los espacios finales y cada línea debe terminar con un carácter de nueva línea ( \n).

// Devuelve null/nil/None/...si la entrada es un número par o negativo, ya que no es posible imprimir un diamante de tamaño par o negativo.

// Ejemplos
// Un diamante de tamaño 3:

//  *
// ***
//  *
// ...que aparecería como una cadena de" *\n***\n *\n"

// Un diamante de tamaño 5:

//  *
// ***
//*****
// ***
//  *
// ...eso es:

// "  *\n ***\n*****\n ***\n  *\n"


function diamond(n) {
    if (n % 2 == 0 || n < 0) return null;
    let solution = [];
    let element = [];
    let autoPadding = Math.floor(n / 2);
    let i = 0;
    let diamonds = Math.floor(n / 2);
    while (i < Math.floor(n / 2)) {
        for (let j = 0; j <= diamonds; j++) {
            j < autoPadding ? element.push(' ') : element.push('*');
            if (j == diamonds) {
                element.push('\n');
                solution.push(element.join(''));
                element = [];
            }
        }
        autoPadding--;
        diamonds++;
        i++;
    };

    let center = [];
    let clon = solution.slice();
    for (let i = 0; i <= n; i++) {
        i != n ? center.push('*') : center.push('\n');
        if (i == n) center = center.join('');
    };
    console.log([solution, center, clon.reverse()].flat().join(''));
    return [solution, center, clon.reverse()].flat().join('');
};
//diamond(Pasale un numero inpar, devolvera un string e imprimirá un diamante con el tamaño del número)

// Un diamante de tamaño 5:

//  *
// ***
//*****
// ***
//  *