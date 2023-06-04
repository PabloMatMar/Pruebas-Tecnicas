// https://www.codewars.com/kata/5550d638a99ddb113e0000a2

// Este problema toma su nombre de posiblemente el evento más importante en la vida del historiador antiguo Josefo: según su relato, él y sus 40 soldados quedaron atrapados en una cueva por los romanos durante un asedio.

// Al negarse a rendirse ante el enemigo, optaron por el suicidio en masa, con un giro: formaron un círculo y procedieron a matar a un hombre cada tres, hasta que quedó un último hombre (y que se suponía que debía suicidarse para terminar el acto). ) .

// Bueno, Josefo y otro hombre fueron los dos últimos y, como ahora conocemos todos los detalles de la historia, es posible que hayas adivinado correctamente que no siguieron exactamente la idea original.

// Ahora debe crear una función que devuelva una permutación de Josephus, tomando como parámetros la matriz/lista inicial de elementos a permutar como si estuvieran en un círculo y contar cada n lugares hasta que no quede ninguno.

// Consejos y notas: ayuda empezar a contar desde 1 hasta n, en lugar del rango habitual de 0 a n-1; n siempre será >=1.

// Por ejemplo, con array= [1,2,3,4,5,6,7]y n=3, la función debería actuar de esta manera.

// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
// [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
// [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
// [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
// [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
// [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
// [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
// Así que nuestro resultado final es:

// [3,6,2,7,5,1,4]

const josephus = (arr, n) => {
    let index = n;
    let deads = [];
    while (arr.length != 0) {
        while (index > arr.length && arr.length != 0)
            index = index - arr.length;
        deads.push(arr[index - 1]);
        arr = arr.slice(0, index - 1).concat(arr.slice(index));
        index = index + n - 1;
    };
    return deads; //jaja
};

//josephus(/*Pasale un array como primer argumento, y un numero n como segundo, ira saltando por el array
// original n veces empezando por i == 0, el elemento en que caiga sera elimiado del original y añadido a deads,
// returnara deads una vez no quede ningun elemento en el array original*/)