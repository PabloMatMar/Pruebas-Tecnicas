https://www.codewars.com/kata/59df2f8f08c6cec835000012

// Juan ha invitado a algunos amigos. Su lista es:

// s = meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";)
// podrias hacer un programa que

// hace que esta cadena esté en mayúsculas
// lo da ordenado alfabéticamente por apellido.
// Cuando los apellidos sean iguales, ordénalos por nombre. El apellido y el nombre de un invitado vienen en el resultado entre paréntesis separados por una coma.

// Entonces el resultado de la función meeting(s)será:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// Puede ocurrir que en dos familias distintas con el mismo apellido dos personas tengan también el mismo nombre.

// notas
// Puede ver otros ejemplos en las "Pruebas de muestra".

function meeting(s) {
    return '(' + (s
        .split(';')
        .map(e => e
            .split(':')
            .reverse()
            .join(', ')
            .toUpperCase()
        )
        .sort()
        .join(')(')
        .concat(')')
    )
};
//meeting(/*Pásale un string de nombres y apellidos exactamente de la siguiente forma:
// nombre:apellido;nombre:apellido...  los devolverá ordenados alphabeticamente asi:
// (CORWILL, ALFRED)(CORWILL, FRED)*/)