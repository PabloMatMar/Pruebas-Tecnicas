https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// Un pangrama es una oración que contiene todas las letras del alfabeto al menos una vez. Por ejemplo, la oración
//"The quick brown fox jumps over the lazy dog" es un pangrama, porque usa las letras AZ al menos una vez 
//(las mayúsculas y minúsculas son irrelevantes).

// Dada una cadena, detectar si es o no un pangrama. Devuelve True si lo es, False si no. Ignora los números
//y la puntuación.

function isPangram(string) {

    return string
        .toLowerCase()
        .split('')
        .filter((item, i, s) => {
            return s.indexOf(item) === i && /[a-z]/.test(item)

        })
        .length === 26 ? true : false;

};

//isPangram(/*"Pásale un string y si esta contiene todas las letras del alfabeto ingles devolvera true, si no, devolverá false " */)