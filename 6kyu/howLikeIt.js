https://www.codewars.com/kata/5266876b8f4bf2da9b000362

// Probablemente conozcas el sistema de "me gusta" de Facebook y otras páginas. Las personas pueden "gustar" publicaciones de blog, imágenes u otros elementos. Queremos crear el texto que debe mostrarse junto a dicho elemento.

// Implemente la función que toma una matriz que contiene los nombres de las personas a las que les gusta un artículo. Debe devolver el texto de la pantalla como se muestra en los ejemplos:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Nota: Para 4 o más nombres, el número "and 2 others"simplemente aumenta




function likes(names) {

    if (names.length === 0) {
        return "no one likes this"
    } else if (names.length === 1) {
        return `${names[0]} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} likes this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} likes this`
    } else  if(names.length > 3){
        return `${names[0]}, ${names[1]} and ${(names.length) - 2} others likes this`
    } else {
        return "the entry must be a array"
    }
};

// likes(/*Pasale un array cuyos elementos sean nombres y segun la cantidad recibiras un mensaje como explica el enunciado */)