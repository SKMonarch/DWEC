
/* 
    Map es un objeto que permite guardar colecciones de datos
    Los datos se guardan como pares clave valor, hay una clave que appunta a un valor o avarios valores
    La clave y el valor pueden ser de cualquier tipo; datos primitivos, objetos
    Es útil cuando queremos acceder a un valor que tiene una clave numérica
    Las claves no se pueden repetir, el valor si
*/

//creación
const ropa = new Map(); //vacío
//añadir elementos utilizando mapa.set(clave, valor);
ropa.set("camisa", 35.95);
ropa.set("pantalón", 45.95);
ropa.set("camisa", 25.95); //sobrescribre el valor anterior que tuvieramos
ropa.set("pijama", 15.95);
console.log(ropa);

const motos = new Map([
    ["Yamaha", "naranja"],
    ["Honda", "azul"],
    ["Kawasaki", "naranja"]
]);
console.log(motos);

//OPERADOR DE TIPOS: typeof, instanceof
console.log(typeof ropa); //object
console.log(ropa instanceof Object); //true
console.log(ropa instanceof Map); //true

//MÉTODOS Y PROPIEDADES
//size, indica el tamaño del mapa
//mapa.size
console.log(ropa.size);
//mapa.set(clave, valor), agrega un nuevo par clave-valor al set, en caso de que exista se sobrescribe el valor
ropa.set("sombrero", 10.95);
console.log(ropa);
//mapa.clear(), elimina todos los pares clave-valor del map
/*ropa.clear();
console.log(ropa);*/
//mapa.delete(clave), elimina un par clave-valor específico mediante la clave
ropa.delete("sombrero"); //true
console.log(ropa);
ropa.delete("gffgfbfgnbf"); //false
//mapa.get(clave), devuelve el valor asociado a una clave específica, si no existe devuelve el undefined
console.log(ropa.get("pantalón")); //devuelve el valor
console.log(ropa.get("gfgbfbfbgf")); //no existe, por lo cual undefined
//mapa.has(clave)
console.log(ropa.get("pantalón")); //true
console.log(ropa.get("fffggvrrg")); //false

//MOSTRAR EL MAPA
//keys(), devuelve un iterador con todas las claves
for(let claves of ropa.keys()){
    console.log(claves);
}
//values()
for(let valores of ropa.values()){
    console.log(valores);
}
//entries()
for(let [clave, valor] of ropa.entries()){
    console.log(`La clave es ${clave} y el valor es ${valor}`);
}

const CADENA = "Mañana no hay clase porque es el día do ensino";


















