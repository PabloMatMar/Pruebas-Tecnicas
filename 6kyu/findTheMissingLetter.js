// Encuentra la letra que falta
// Escriba un método que tome una matriz de letras consecutivas (crecientes) como entrada y que devuelva la letra que falta en la matriz.

// Siempre obtendrá una matriz válida. Y siempre faltará exactamente una letra. La longitud de la matriz siempre será de al menos 2.
// La matriz siempre contendrá letras en un solo caso.

// Ejemplo:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (¡Usa el alfabeto inglés con 26 letras!)

// ¡Diviértete codificando y por favor no olvides votar y clasificar este kata! :-)

// También he creado otros katas. ¡Echa un vistazo si te ha gustado este kata!

// function findMissingLetter(array) {

const findMissingLetter = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length - 1 && (arr[i].charCodeAt() + 1 != arr[i + 1].charCodeAt()))
            return String.fromCharCode(arr[i].charCodeAt() + 1)
    };
};
//findMissingLetter(/*Pasale un array de letras (todas mayusculas o minusculas )en orden alfabetico salvo que entre dos elementos debes saltarte una letra, devolvera esa letra */)