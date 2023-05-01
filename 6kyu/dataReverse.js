https://www.codewars.com/kata/569d488d61b812a0f7000015

// Se recibe un flujo de datos y es necesario invertirlo.

// Cada segmento tiene una longitud de 8 bits, lo que significa que el orden de estos segmentos debe invertirse, por ejemplo:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// debe convertirse:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// El número total de bits siempre será un múltiplo de 8.

// Los datos se dan en una matriz como tal:

// dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])

function dataReverse(d) {
    let count = 0;
    let data = d;
    let order = [];
    for (let i = 0; i < d.length; i++) {
        count++
        if (count % 8 == 0 && i !== 0) {
            order.unshift(...data.slice(0, count));
            data = data.slice(count, data.length);
            count = 0;
        };
    };

    return order
};
//dataReverse(/*Pásale un array de unos y ceros, "lo cortara en trozos de ocho digitos y hara una reverse de los trozos" */)