// https://www.codewars.com/kata/558ffec0f0584f24250000a0

// Estás pasando el rato con tus amigos en un bar, cuando de repente uno de ellos está tan borracho que no puede hablar, y cuando quiere decir algo, lo escribe en un papel. Sin embargo, ninguna de las palabras que escribe tiene sentido para ti. Quiere ayudarte, así que señala una cerveza y escribe "yvvi". Empiezas a entender lo que está tratando de decir y escribes un guión que decodifica sus palabras.

// Tenga en cuenta que los números, así como otros caracteres, pueden ser parte de la entrada y debe mantenerlos como están. También debe probar si la entrada es una cadena. Si no es así, devuelve "La entrada no es una cadena".

const decode = (str) => {
    if (typeof (str) != 'string') return 'Input is not a string'
    const decrypt = { 'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v', 'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q', 'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l', 'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g', 'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b', 'z': 'a', 'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V', 'F': 'U', 'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q', 'K': 'P', 'L': 'O', 'M': 'N', 'N': 'M', 'O': 'L', 'P': 'K', 'Q': 'J', 'R': 'I', 'S': 'H', 'T': 'G', 'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C', 'Y': 'B', 'Z': 'A' };

    return str
        .split(' ')
        .map(e => e
            .split('')
            .map(e => decrypt[e] ? e = decrypt[e] : e = e)
            .join(''))
        .join(' ');
};
//Lo unico que sabemos en el enunciado es que "yvvi" podria significar "beer"
//decode(/* Pasale un string donde cada palabra valga su opuesta en el abecedario ingles, a == z, u === f, etc desencriptará dicha frase(casos de prueba en el test del enlace de codewars)*/)