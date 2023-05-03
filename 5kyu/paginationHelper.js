// https://www.codewars.com/kata/515bb423de843ea99400000a

// Para este ejercicio, fortalecerá su dominio de page-fu. Completará la clase PaginationHelper, que es una clase de utilidad útil para consultar información de paginación relacionada con una matriz.

// La clase está diseñada para tomar una matriz de valores y un número entero que indica cuántos elementos se permitirán por cada página. Los tipos de valores contenidos dentro de la colección/matriz no son relevantes.

// Los siguientes son algunos ejemplos de cómo se utiliza esta clase:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1


class PaginationHelper {
    collection;
    itemsPerPage;
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    };
    itemCount() {
        return this.collection.length;
    };
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    };
    pageItemCount(pageIndex) {
        if (pageIndex < 0 || this.collection.length == 0 || (pageIndex + 1) > this.pageCount()) return -1;
        else if ((pageIndex + 1) < this.pageCount() || ((pageIndex + 1) == this.pageCount() && this.collection.length % this.itemsPerPage == 0)) return this.itemsPerPage;
        return this.collection.length % this.itemsPerPage;
    };
    pageIndex(itemIndex) {
        if (itemIndex >= this.collection.length || itemIndex < 0 || this.collection.length == 0) return -1;
        return Math.floor(itemIndex / this.itemsPerPage);
    };
};
// const helper = new PaginationHelper(/*Pasale un array de primer elemento y un numero de segundo */);

// helper.pageCount(); Devolverá cuantas paginas se han creado (cantidad de elementos del array dividida por cantidad por pagina(segundo paremetro del constructor))

// helper.itemCount(); Devolverá cuantos elementos tiene el array paginado.

// helper.pageItemCount(0); Pasale un número, te dira cuantos elementos hay en la pagina indexada con ese numero (-1 si la pagina no existe) Las paginas se indexan desde 0.

// helper.pageIndex(); Pasale un número, este sera el indice que ocupa un elemento dentro del array paginado, te dirá en que pagina se encuentra (si dicho indice existe dentro del array)