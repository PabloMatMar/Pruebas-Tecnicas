https://www.codewars.com/kata/514a024011ea4fb54200004b

// Escriba una función que, cuando se le proporcione una URL como una cadena, analice solo el nombre de
// dominio y lo devuelva como una cadena. Por ejemplo:



// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"



function domainName(url) {
    return url
        .replace("https://", '')
        .replace("http://", '')
        .replace("www.", '')
        .split('.')[0]
};

//domainName(/*Pásale una url en un string y devolverá el dominio de la misma en otr string */)