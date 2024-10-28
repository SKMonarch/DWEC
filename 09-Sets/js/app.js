/*
    Set
    Similar a un array,es un tipo de objeto
    Colecciones de datos que pueden ser cualquier tipo,datos primitivos,objetos
    En el array puede haber datos duplicados en los set NO!!
    Pueden tener valores vaciíos y undefined pero no duplicados
    No tienen índice numérico como los arrays,los elementos ocupan la posición en la que se 
    
*/

//Crear un set

const conjunto = new Set(); //crear un set vacío
//añadir elementos. conjunto.add("valor")

conjunto.add("hola");
conjunto.add("adios");
conjunto.add("adios"); // no se insertará porque no permite valores repetidos !!!
console.log(conjunto);

console.log(conjunto[0]); //undefined
console.log(conjunto[1]); //undefined

//crear pasándole un array
const conjunto2 = new Set(["a","b","a","d"]);
console.log(conjunto2);

const array = [1,2,3,5,6,5,2] //array con duplicados
const conjArray = new Set(array);
console.log(conjArray);
//convertir el set a array nuevamente
const arraySinDup = [...conjArray];
console.log(arraySinDup);


//OPERADORES DE TIPO: typeof,instanceOf
console.log(typeof conjunto);//Object
console.log(conjunto instanceof Object);//true
console.log(conjunto instanceof Set);//true

//MÉTODOS Y PROPIEDADES DE LOS SET
console.log("=================");
//size
console.log(conjunto.size); // da el tamaño del conjunto
//add
// Añadir elementos
console.log("=================");
conjunto.add("pepino");
conjunto.add("manzana");
conjunto.add("manzana"); // No se insertará porque no permite valores repetidos !!!

console.log(conjunto); // Muestra el Set actual en consola
//delete
console.log("=================");
conjunto.delete("pepino");
console.log(conjunto); // borra el valor que se especifica
//has
console.log("=================");
console.log(conjunto.has("adios")); // true

//values()
console.log("=================");
const valores = conjunto.values();
for (let valor of valores) {
    console.log(valor);
}

//keys() no aparecen las keys,ya que no existen,muestra el valor del set 
console.log("=================");
const llaves = conjunto.keys();
for (let llave of llaves) {
    console.log(llave);
}

//entries()
console.log("=================");
const entradas = conjunto.entries();
for (let entrada of entradas) {
    console.log(entrada); 
}



//clear
console.log("=================");
conjunto.clear();
console.log(conjunto); // elimina todos los elementos
