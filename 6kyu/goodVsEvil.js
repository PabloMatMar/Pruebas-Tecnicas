https://www.codewars.com/kata/52761ee4cffbc69732000738

// Descripción
// La Tierra Media está a punto de ir a la guerra. Las fuerzas del bien tendrán muchas batallas con las 
//fuerzas del mal. Seguramente participarán diferentes razas. Cada raza tiene una cierta wortha la hora
// de luchar contra otras. Del lado del bien tenemos las siguientes razas, con sus asociados worth:

// Hobbits: 1
// Hombres: 2
// Elfos: 3
// Enanos: 3
// Águilas: 4
// Magos: 10
// Del lado del mal tenemos:

// Orcos: 1
// Hombres: 2
// Huargos: 2
// duendes: 2
// Uruk Hai: 3
// trols: 5
// Magos: 10
// Aunque el clima, la ubicación, los suministros y el valor juegan un papel importante en cualquier batalla, si sumas el valor del lado bueno y lo comparas con el valor del lado malo, el lado con mayor valor tenderá a ganar.

// Así, dada la cuenta de cada una de las carreras del lado del bien, seguida por la cuenta de cada una de las carreras del lado del mal, determina qué lado gana.

// Aporte:
// A la función se le darán dos parámetros. Cada parámetro será una cadena de múltiples enteros separados por un solo espacio. Cada cadena contendrá el recuento de cada raza del lado del bien y del mal.

// El primer parámetro contendrá el conteo de cada carrera del lado del bien en el siguiente orden:

// Hobbits, Hombres, Elfos, Enanos, Águilas, Magos.
// El segundo parámetro contendrá el recuento de cada raza del lado del mal en el siguiente orden:

// Orcos, Hombres, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// Todos los valores son enteros no negativos. La suma resultante del valor de cada lado no excederá el límite de un número entero de 32 bits.


// El primer parámetro contendrá el conteo de cada carrera del lado del bien en el siguiente orden:

// Hobbits * 1, Hombres *2 , Elfos * 3, Enanos * 3, Águilas *5, Magos *10.

// El segundo parámetro contendrá el recuento de cada raza del lado del mal en el siguiente orden:

// Orcos * 1, Hombres * 2, Wargs * 2, Goblins *2, Uruk Hai *3, Trolls * 5, Wizards * 10.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.


function goodVsEvil(good, evil) {
    const powers = [[1, 2, 3, 3, 4, 10],[1, 2, 2, 2, 3, 5, 10]];

    const sumGood = good.split(' ').reduce((a, b, i) => a + b * powers[0][i], 0);
    const sumEvil = evil.split(' ').reduce((a, b, i) => a + b * powers[1][i], 0);

    if (sumGood > sumEvil) return "Battle Result: Good triumphs over Evil";
    else if (sumGood < sumEvil) return "Battle Result: Evil eradicates all trace of Good";
    else return "Battle Result: No victor on this battle field";

};

//goodVsEvil(/*Pásale dos arrays el primero sera el valor de los buenos, debe contener seis elementos
// numericos, cada elemento representa la cantidad de un tipo de guerro. El segundo array debe contener
// siete elementos numericos, cada elemento representa la cantidad de un tipo de guerrero del lado del mal.
// Los sumara y te dira si son iguales o uno de ellos gana */)