// https://www.codewars.com/kata/5263c6999e0f40dee200059d

// Muy bien, detective, uno de nuestros colegas observó con éxito a nuestra persona objetivo, Robby el ladrón. Lo seguimos a un almacén secreto, donde asumimos encontrar todas las cosas robadas. La puerta de este almacén está protegida por una cerradura de combinación electrónica. Lamentablemente, nuestro espía no está seguro del PIN que vio cuando Robby lo ingresó.

// El teclado tiene el siguiente diseño:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// Anotó el PIN 1357, pero también dijo que es posible que cada uno de los dígitos que vio podría ser en realidad otro dígito adyacente (horizontal o verticalmente, pero no en diagonal). Por ejemplo, en lugar de 1también podría ser el 2o 4. Y en lugar de 5también podría ser el 2, 4o 6.8

// También mencionó que conoce este tipo de cerraduras. Puede ingresar una cantidad ilimitada de PIN incorrectos, que finalmente nunca bloquean el sistema ni hacen sonar la alarma. Por eso podemos probar todas las (*) variaciones posibles.

// * posible en el sentido de: el propio PIN observado y todas las variaciones considerando los dígitos adyacentes

// ¿Puedes ayudarnos a encontrar todas esas variaciones? Sería bueno tener una función que devuelva una matriz (o una lista en Java/Kotlin y C#) de todas las variaciones de un PIN observado con una longitud de 1 a 8 dígitos. Podríamos nombrar la función getPINs( get_pinsen python, GetPINsen C#). Pero tenga en cuenta que todos los PIN, el observado y también los resultados, deben ser cadenas, debido a los posibles '0' iniciales. Ya hemos preparado algunos casos de prueba para usted.

// ¡Detective, contamos con usted!

function getPINs(observed) {
    const one = ['', '1', '2', '4'];
    const two = ['', '2', '1', '3', '5'];
    const three = ['', '3', '2', '6'];
    const four = ['', '4', '1', '5', '7'];
    const five = ['', '5', '2', '4', '6', '8'];
    const six = ['', '6', '3', '5', '9'];
    const seven = ['', '7', '4', '8'];
    const eight = ['', '8', '0', '7', '5', '9'];
    const nine = ['', '9', '6', '8'];
    const zero = ['', '0', '8'];


    let pin = observed.toString().split('');

    let a0 = [''];
    let b0 = [''];
    let c0 = [''];
    let d0 = [''];
    let e0 = [''];
    let f0 = [''];
    let g0 = [''];
    let h0 = [''];

    if (pin.length == 1) {
        if (pin[0] == '1') h0 = one;
        if (pin[0] == '2') h0 = two;
        if (pin[0] == '3') h0 = three;
        if (pin[0] == '4') h0 = four;
        if (pin[0] == '5') h0 = five;
        if (pin[0] == '6') h0 = six;
        if (pin[0] == '7') h0 = seven;
        if (pin[0] == '8') h0 = eight;
        if (pin[0] == '9') h0 = nine;
        if (pin[0] == '0') h0 = zero;
    };
    ///2///2///2////2////2///2//////

    if (pin.length == 2) {
        if (pin[1] == '1') h0 = one;
        if (pin[1] == '2') h0 = two;
        if (pin[1] == '3') h0 = three;
        if (pin[1] == '4') h0 = four;
        if (pin[1] == '5') h0 = five;
        if (pin[1] == '6') h0 = six;
        if (pin[1] == '7') h0 = seven;
        if (pin[1] == '8') h0 = eight;
        if (pin[1] == '9') h0 = nine;
        if (pin[1] == '0') h0 = zero;
        ///
        if (pin[0] == '1') g0 = one;
        if (pin[0] == '2') g0 = two;
        if (pin[0] == '3') g0 = three;
        if (pin[0] == '4') g0 = four;
        if (pin[0] == '5') g0 = five;
        if (pin[0] == '6') g0 = six;
        if (pin[0] == '7') g0 = seven;
        if (pin[0] == '8') g0 = eight;
        if (pin[0] == '9') g0 = nine;
        if (pin[0] == '0') g0 = zero;
    };

    ////3////3/////3////3/3//3/////3///3/3//3/
    if (pin.length == 3) {
        if (pin[2] == '1') h0 = one;
        if (pin[2] == '2') h0 = two;
        if (pin[2] == '3') h0 = three;
        if (pin[2] == '4') h0 = four;
        if (pin[2] == '5') h0 = five;
        if (pin[2] == '6') h0 = six;
        if (pin[2] == '7') h0 = seven;
        if (pin[2] == '8') h0 = eight;
        if (pin[2] == '9') h0 = nine;
        if (pin[2] == '0') h0 = zero;
        //
        if (pin[1] == '1') g0 = one;
        if (pin[1] == '2') g0 = two;
        if (pin[1] == '3') g0 = three;
        if (pin[1] == '4') g0 = four;
        if (pin[1] == '5') g0 = five;
        if (pin[1] == '6') g0 = six;
        if (pin[1] == '7') g0 = seven;
        if (pin[1] == '8') g0 = eight;
        if (pin[1] == '9') g0 = nine;
        if (pin[1] == '0') g0 = zero;
        ///
        if (pin[0] == '1') f0 = one;
        if (pin[0] == '2') f0 = two;
        if (pin[0] == '3') f0 = three;
        if (pin[0] == '4') f0 = four;
        if (pin[0] == '5') f0 = five;
        if (pin[0] == '6') f0 = six;
        if (pin[0] == '7') f0 = seven;
        if (pin[0] == '8') f0 = eight;
        if (pin[0] == '9') f0 = nine;
        if (pin[0] == '0') f0 = zero;
    };
    ///4///4////4///4////4////4////4///4///4///4//4/
    if (pin.length == 4) {
        if (pin[3] == '1') h0 = one;
        if (pin[3] == '2') h0 = two;
        if (pin[3] == '3') h0 = three;
        if (pin[3] == '4') h0 = four;
        if (pin[3] == '5') h0 = five;
        if (pin[3] == '6') h0 = six;
        if (pin[3] == '7') h0 = seven;
        if (pin[3] == '8') h0 = eight;
        if (pin[3] == '9') h0 = nine;
        if (pin[3] == '0') h0 = zero;
        //
        if (pin[2] == '1') g0 = one;
        if (pin[2] == '2') g0 = two;
        if (pin[2] == '3') g0 = three;
        if (pin[2] == '4') g0 = four;
        if (pin[2] == '5') g0 = five;
        if (pin[2] == '6') g0 = six;
        if (pin[2] == '7') g0 = seven;
        if (pin[2] == '8') g0 = eight;
        if (pin[2] == '9') g0 = nine;
        if (pin[2] == '0') g0 = zero;
        ///
        if (pin[1] == '1') f0 = one;
        if (pin[1] == '2') f0 = two;
        if (pin[1] == '3') f0 = three;
        if (pin[1] == '4') f0 = four;
        if (pin[1] == '5') f0 = five;
        if (pin[1] == '6') f0 = six;
        if (pin[1] == '7') f0 = seven;
        if (pin[1] == '8') f0 = eight;
        if (pin[1] == '9') f0 = nine;
        if (pin[1] == '0') f0 = zero;

        if (pin[0] == '1') e0 = one;
        if (pin[0] == '2') e0 = two;
        if (pin[0] == '3') e0 = three;
        if (pin[0] == '4') e0 = four;
        if (pin[0] == '5') e0 = five;
        if (pin[0] == '6') e0 = six;
        if (pin[0] == '7') e0 = seven;
        if (pin[0] == '8') e0 = eight;
        if (pin[0] == '9') e0 = nine;
        if (pin[0] == '0') e0 = zero;
    };

    //5///5////5////5///5////5////5////5///5////5////5///5///5/
    if (pin.length == 5) {
        if (pin[4] == '1') h0 = one;
        if (pin[4] == '2') h0 = two;
        if (pin[4] == '3') h0 = three;
        if (pin[4] == '4') h0 = four;
        if (pin[4] == '5') h0 = five;
        if (pin[4] == '6') h0 = six;
        if (pin[4] == '7') h0 = seven;
        if (pin[4] == '8') h0 = eight;
        if (pin[4] == '9') h0 = nine;
        if (pin[4] == '0') h0 = zero;
        //
        if (pin[3] == '1') g0 = one;
        if (pin[3] == '2') g0 = two;
        if (pin[3] == '3') g0 = three;
        if (pin[3] == '4') g0 = four;
        if (pin[3] == '5') g0 = five;
        if (pin[3] == '6') g0 = six;
        if (pin[3] == '7') g0 = seven;
        if (pin[3] == '8') g0 = eight;
        if (pin[3] == '9') g0 = nine;
        if (pin[3] == '0') g0 = zero;
        ///
        if (pin[2] == '1') f0 = one;
        if (pin[2] == '2') f0 = two;
        if (pin[2] == '3') f0 = three;
        if (pin[2] == '4') f0 = four;
        if (pin[2] == '5') f0 = five;
        if (pin[2] == '6') f0 = six;
        if (pin[2] == '7') f0 = seven;
        if (pin[2] == '8') f0 = eight;
        if (pin[2] == '9') f0 = nine;
        if (pin[2] == '0') f0 = zero;

        if (pin[1] == '1') e0 = one;
        if (pin[1] == '2') e0 = two;
        if (pin[1] == '3') e0 = three;
        if (pin[1] == '4') e0 = four;
        if (pin[1] == '5') e0 = five;
        if (pin[1] == '6') e0 = six;
        if (pin[1] == '7') e0 = seven;
        if (pin[1] == '8') e0 = eight;
        if (pin[1] == '9') e0 = nine;
        if (pin[1] == '0') e0 = zero;

        if (pin[0] == '1') d0 = one;
        if (pin[0] == '2') d0 = two;
        if (pin[0] == '3') d0 = three;
        if (pin[0] == '4') d0 = four;
        if (pin[0] == '5') d0 = five;
        if (pin[0] == '6') d0 = six;
        if (pin[0] == '7') d0 = seven;
        if (pin[0] == '8') d0 = eight;
        if (pin[0] == '9') d0 = nine;
        if (pin[0] == '0') d0 = zero;
    };

    ////6/////6////6/////6////6/////6////6////6////6///

    if (pin.length == 6) {
        if (pin[5] == '1') h0 = one;
        if (pin[5] == '2') h0 = two;
        if (pin[5] == '3') h0 = three;
        if (pin[5] == '4') h0 = four;
        if (pin[5] == '5') h0 = five;
        if (pin[5] == '6') h0 = six;
        if (pin[5] == '7') h0 = seven;
        if (pin[5] == '8') h0 = eight;
        if (pin[5] == '9') h0 = nine;
        if (pin[5] == '0') h0 = zero;
        //2
        if (pin[4] == '1') g0 = one;
        if (pin[4] == '2') g0 = two;
        if (pin[4] == '3') g0 = three;
        if (pin[4] == '4') g0 = four;
        if (pin[4] == '5') g0 = five;
        if (pin[4] == '6') g0 = six;
        if (pin[4] == '7') g0 = seven;
        if (pin[4] == '8') g0 = eight;
        if (pin[4] == '9') g0 = nine;
        if (pin[4] == '0') g0 = zero;
        //3
        if (pin[3] == '1') f0 = one;
        if (pin[3] == '2') f0 = two;
        if (pin[3] == '3') f0 = three;
        if (pin[3] == '4') f0 = four;
        if (pin[3] == '5') f0 = five;
        if (pin[3] == '6') f0 = six;
        if (pin[3] == '7') f0 = seven;
        if (pin[3] == '8') f0 = eight;
        if (pin[3] == '9') f0 = nine;
        if (pin[3] == '0') f0 = zero;
        //4
        if (pin[2] == '1') e0 = one;
        if (pin[2] == '2') e0 = two;
        if (pin[2] == '3') e0 = three;
        if (pin[2] == '4') e0 = four;
        if (pin[2] == '5') e0 = five;
        if (pin[2] == '6') e0 = six;
        if (pin[2] == '7') e0 = seven;
        if (pin[2] == '8') e0 = eight;
        if (pin[2] == '9') e0 = nine;
        if (pin[2] == '0') e0 = zero;
        //5
        if (pin[1] == '1') d0 = one;
        if (pin[1] == '2') d0 = two;
        if (pin[1] == '3') d0 = three;
        if (pin[1] == '4') d0 = four;
        if (pin[1] == '5') d0 = five;
        if (pin[1] == '6') d0 = six;
        if (pin[1] == '7') d0 = seven;
        if (pin[1] == '8') d0 = eight;
        if (pin[1] == '9') d0 = nine;
        if (pin[1] == '0') d0 = zero;
        //6
        if (pin[0] == '1') c0 = one;
        if (pin[0] == '2') c0 = two;
        if (pin[0] == '3') c0 = three;
        if (pin[0] == '4') c0 = four;
        if (pin[0] == '5') c0 = five;
        if (pin[0] == '6') c0 = six;
        if (pin[0] == '7') c0 = seven;
        if (pin[0] == '8') c0 = eight;
        if (pin[0] == '9') c0 = nine;
        if (pin[0] == '0') c0 = zero;
    };
    ///7///7//7///7///7///7///7///7///7///7///7///7///7//7/
    if (pin.length == 7) {
        if (pin[6] == '1') h0 = one;
        if (pin[6] == '2') h0 = two;
        if (pin[6] == '3') h0 = three;
        if (pin[6] == '4') h0 = four;
        if (pin[6] == '5') h0 = five;
        if (pin[6] == '6') h0 = six;
        if (pin[6] == '7') h0 = seven;
        if (pin[6] == '8') h0 = eight;
        if (pin[6] == '9') h0 = nine;
        if (pin[6] == '0') h0 = zero;
        //2
        if (pin[5] == '1') g0 = one;
        if (pin[5] == '2') g0 = two;
        if (pin[5] == '3') g0 = three;
        if (pin[5] == '4') g0 = four;
        if (pin[5] == '5') g0 = five;
        if (pin[5] == '6') g0 = six;
        if (pin[5] == '7') g0 = seven;
        if (pin[5] == '8') g0 = eight;
        if (pin[5] == '9') g0 = nine;
        if (pin[5] == '0') g0 = zero;
        //3
        if (pin[4] == '1') f0 = one;
        if (pin[4] == '2') f0 = two;
        if (pin[4] == '3') f0 = three;
        if (pin[4] == '4') f0 = four;
        if (pin[4] == '5') f0 = five;
        if (pin[4] == '6') f0 = six;
        if (pin[4] == '7') f0 = seven;
        if (pin[4] == '8') f0 = eight;
        if (pin[4] == '9') f0 = nine;
        if (pin[4] == '0') f0 = zero;
        //4
        if (pin[3] == '1') e0 = one;
        if (pin[3] == '2') e0 = two;
        if (pin[3] == '3') e0 = three;
        if (pin[3] == '4') e0 = four;
        if (pin[3] == '5') e0 = five;
        if (pin[3] == '6') e0 = six;
        if (pin[3] == '7') e0 = seven;
        if (pin[3] == '8') e0 = eight;
        if (pin[3] == '9') e0 = nine;
        if (pin[3] == '0') e0 = zero;
        //5
        if (pin[2] == '1') d0 = one;
        if (pin[2] == '2') d0 = two;
        if (pin[2] == '3') d0 = three;
        if (pin[2] == '4') d0 = four;
        if (pin[2] == '5') d0 = five;
        if (pin[2] == '6') d0 = six;
        if (pin[2] == '7') d0 = seven;
        if (pin[2] == '8') d0 = eight;
        if (pin[2] == '9') d0 = nine;
        if (pin[2] == '0') d0 = zero;
        //6
        if (pin[1] == '1') c0 = one;
        if (pin[1] == '2') c0 = two;
        if (pin[1] == '3') c0 = three;
        if (pin[1] == '4') c0 = four;
        if (pin[1] == '5') c0 = five;
        if (pin[1] == '6') c0 = six;
        if (pin[1] == '7') c0 = seven;
        if (pin[1] == '8') c0 = eight;
        if (pin[1] == '9') c0 = nine;
        if (pin[1] == '0') c0 = zero;
        //7
        if (pin[0] == '1') b0 = one;
        if (pin[0] == '2') b0 = two;
        if (pin[0] == '3') b0 = three;
        if (pin[0] == '4') b0 = four;
        if (pin[0] == '5') b0 = five;
        if (pin[0] == '6') b0 = six;
        if (pin[0] == '7') b0 = seven;
        if (pin[0] == '8') b0 = eight;
        if (pin[0] == '9') b0 = nine;
        if (pin[0] == '0') b0 = zero;
    };
    ///8//8////8///8////8////8////8///8////8////8///8///8///8//
    if (pin.length == 8) {
        if (pin[7] == '1') h0 = one;
        if (pin[7] == '2') h0 = two;
        if (pin[7] == '3') h0 = three;
        if (pin[7] == '4') h0 = four;
        if (pin[7] == '5') h0 = five;
        if (pin[7] == '6') h0 = six;
        if (pin[7] == '7') h0 = seven;
        if (pin[7] == '8') h0 = eight;
        if (pin[7] == '9') h0 = nine;
        if (pin[7] == '0') h0 = zero;
        //2
        if (pin[6] == '1') g0 = one;
        if (pin[6] == '2') g0 = two;
        if (pin[6] == '3') g0 = three;
        if (pin[6] == '4') g0 = four;
        if (pin[6] == '5') g0 = five;
        if (pin[6] == '6') g0 = six;
        if (pin[6] == '7') g0 = seven;
        if (pin[6] == '8') g0 = eight;
        if (pin[6] == '9') g0 = nine;
        if (pin[6] == '0') g0 = zero;
        //3
        if (pin[5] == '1') f0 = one;
        if (pin[5] == '2') f0 = two;
        if (pin[5] == '3') f0 = three;
        if (pin[5] == '4') f0 = four;
        if (pin[5] == '5') f0 = five;
        if (pin[5] == '6') f0 = six;
        if (pin[5] == '7') f0 = seven;
        if (pin[5] == '8') f0 = eight;
        if (pin[5] == '9') f0 = nine;
        if (pin[5] == '0') f0 = zero;
        //4
        if (pin[4] == '1') e0 = one;
        if (pin[4] == '2') e0 = two;
        if (pin[4] == '3') e0 = three;
        if (pin[4] == '4') e0 = four;
        if (pin[4] == '5') e0 = five;
        if (pin[4] == '6') e0 = six;
        if (pin[4] == '7') e0 = seven;
        if (pin[4] == '8') e0 = eight;
        if (pin[4] == '9') e0 = nine;
        if (pin[4] == '0') e0 = zero;
        //5
        if (pin[3] == '1') d0 = one;
        if (pin[3] == '2') d0 = two;
        if (pin[3] == '3') d0 = three;
        if (pin[3] == '4') d0 = four;
        if (pin[3] == '5') d0 = five;
        if (pin[3] == '6') d0 = six;
        if (pin[3] == '7') d0 = seven;
        if (pin[3] == '8') d0 = eight;
        if (pin[3] == '9') d0 = nine;
        if (pin[3] == '0') d0 = zero;
        //6
        if (pin[2] == '1') c0 = one;
        if (pin[2] == '2') c0 = two;
        if (pin[2] == '3') c0 = three;
        if (pin[2] == '4') c0 = four;
        if (pin[2] == '5') c0 = five;
        if (pin[2] == '6') c0 = six;
        if (pin[2] == '7') c0 = seven;
        if (pin[2] == '8') c0 = eight;
        if (pin[2] == '9') c0 = nine;
        if (pin[2] == '0') c0 = zero;
        //7
        if (pin[1] == '1') b0 = one;
        if (pin[1] == '2') b0 = two;
        if (pin[1] == '3') b0 = three;
        if (pin[1] == '4') b0 = four;
        if (pin[1] == '5') b0 = five;
        if (pin[1] == '6') b0 = six;
        if (pin[1] == '7') b0 = seven;
        if (pin[1] == '8') b0 = eight;
        if (pin[1] == '9') b0 = nine;
        if (pin[1] == '0') b0 = zero;
        //8
        if (pin[0] == '1') a0 = one;
        if (pin[0] == '2') a0 = two;
        if (pin[0] == '3') a0 = three;
        if (pin[0] == '4') a0 = four;
        if (pin[0] == '5') a0 = five;
        if (pin[0] == '6') a0 = six;
        if (pin[0] == '7') a0 = seven;
        if (pin[0] == '8') a0 = eight;
        if (pin[0] == '9') a0 = nine;
        if (pin[0] == '0') a0 = zero;
    };

    let construc = [];
    let arrNumbers = [];

    let numA = undefined;
    let numB = undefined;
    let numC = undefined;
    let numD = undefined;
    let numE = undefined;
    let numF = undefined;
    let numG = undefined;

    for (let a = 0; a < a0.length; a++) {
        if (a > 0) numA = a0[a];
        for (let b = 0; b < b0.length; b++) {
            if (b > 0) numB = b0[b];
            for (let c = 0; c < c0.length; c++) {
                if (c > 0) numC = c0[c];
                for (let d = 0; d < d0.length; d++) {
                    if (d > 0) numD = d0[d];
                    for (let e = 0; e < e0.length; e++) {
                        if (e > 0) numE = e0[e];
                        for (let f = 0; f < f0.length; f++) {
                            if (f > 0) numF = f0[f];
                            for (let g = 0; g < g0.length; g++) {
                                if (g > 0) numG = g0[g];
                                for (let h = 0; h < h0.length; h++) {
                                    if (h > 0) {
                                        if (pin.length == 1) {
                                            construc.push(h0[h]);
                                            arrNumbers.push(construc.join(''));
                                        } else if (pin.length == 2 && g0[g] != '') {
                                            construc.push(`${numG}${h0[h]}`);
                                            arrNumbers.push(construc.join(''));
                                        } else if (pin.length == 3 && g0[g] != '' && f0[f] != '') {
                                            construc.push(`${numF}${numG}${h0[h]}`);
                                            arrNumbers.push(construc.join(''));
                                        } else if (pin.length == 4 && g0[g] != '' && f0[f] != '' && e0[e] != '') {
                                            construc.push(`${numE}${numF}${numG}${h0[h]}`);
                                            arrNumbers.push(construc.join(''));
                                        } else if (pin.length == 5 && g0[g] != '' && f0[f] != '' && e0[e] != '' && d0[d] != '') {
                                            construc.push(`${numD}${numE}${numF}${numG}${h0[h]}`);
                                            arrNumbers.push(construc.join(''));
                                        } else if (pin.length == 6 && g0[g] != '' && f0[f] != '' && e0[e] != '' && d0[d] != '' && c0[c] != '') {
                                            construc.push(`${numC}${numD}${numE}${numF}${numG}${h0[h]}`);
                                            arrNumbers.push(construc.join(''));
                                        } else if (pin.length == 7 && g0[g] != '' && f0[f] != '' && e0[e] != '' && d0[d] != '' && c0[c] != '' && b0[b] != '') {
                                            construc.push(`${numB}${numC}${numD}${numE}${numF}${numG}${h0[h]}`);
                                            arrNumbers.push(construc.join(''));
                                        } else if (pin.length == 8 && g0[g] != '' && f0[f] != '' && e0[e] != '' && d0[d] != '' && c0[c] != '' && b0[b] != '' && a0[a] != '') {
                                            construc.push(`${numA}${numB}${numC}${numD}${numE}${numF}${numG}${h0[h]}`);
                                            arrNumbers.push(construc.join(''));
                                        };
                                        construc = [];
                                    }
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    return arrNumbers;
};

//getPins(/*Introduce un pin de entre 1 y 8 digitos(number). Si cada numero puede ser el mismo o cualquiera de los adyacentes horizontal o verticalmente devolvera todas las convinaciones posibles de este pin */)
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

//He usado la fuerza brutal porque uno un dia empieza a aprender a programar con un bucle for, despues aprende muchisimas otras cosas, pero eh, me he dicho: voy a ver si puedo usar 8 bucles anidados (Por probar mi progreso conceptual CUANTITATIVO), y vaya, en poco menos de dos horas lo he hecho! :)