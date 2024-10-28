//ARRAYS
/*
    Es un tipo de objeto
    Permite almacenar varios datos
    Puede almacenar String.number,boolean,objetos(math,date,array) 
    Es una estructura dinámica no hay que indicar su tamaño en la creación
    Es heterogénea,puede contener diversos tipos de datos
    Tiene un indice numérico que empieza en 0 y vale para acceder a sus valores
*/
//CREACIÖN
const colores = ["verde","azul","rojo","negro"];
const colores1 = [];//crea array vacío
//inserto datos
colores1[0]="amarillo";
colores1[2]="granate";
colores1[3]="blanco";
/*Esta con el new no vamos a utilizarla*/
const colores2 = new Array("Verde", "Rojo", "Azul");

//OPERADOR DE TIPO: typeof, instanceof: indica si un elemento es instancia de otro dato
console.log(typeof colores);
console.log(typeof colores1);
console.log(typeof colores2);
console.log(colores instanceof Object); //true
//console.log(colores instanceof Arrray); //true
//console.log(Array.isArray(colores)); //true

//Array con datos de distintos tipos
/*
let cierto = true;
let fecha = new Date();
const arrayConTodo = [2, "Hola", true, Math.PI, fecga.getFullYear(), ["Pepe", 30, 619887774]];

//MOSTRAT ARRAY
console.log(arrayConTodo);
console.log(colores);
console.table(colores);
console.tablel (arrayConToo);
//alert(colores)
//alert(array con arrayConTof)
//document.write(colores);

//Propiedad de array: array.length
for (let i = 0; i <<colores.length; i++){
    console.log(colores[1]);
}
*/
//Variantes del for; for... in, for... of
const frutas = ["Naranja", "Limón", "Melón"]; //array con valores vacío
console.table(frutas);
//array.toString() Visualiza el array con una cadena separada por comas
console.log(frutas.toString());
for(let i = 0; i<frutas.length;i++) {
    console.log(frutas[i]);
} 


//arreglar los undefined
for(let i = 0; i<frutas.length;i++) {
   if(frutas[i] !== undefined){
    console.log(frutas[i]);
    }
} 



//for... in no me muestra los undefined los omite

/*
    for(let indice in nombreArrat){
        nombreArray[indece]
        }
        
*/
for (let indice in frutas){
    console.log(frutas[indice]);
} 


console.log("================")
/*const frutas = ["Naranja", ,"Limon","Melón"] //array con valores vacíos*/
//for .. of (imprime los undefined)
for(let valor of frutas){
    
    if(valor !== undefined){
    console.log(valor);
    }
}

console.log("================")
/*La referencia al array no cambia por eso se declara const pero el contenido si puede cambiar*/
const mismasFrutas = frutas; /*no es una copia*/
mismasFrutas[1] ="Pera";
console.log(frutas);


//PROPIEDADES array.length
console.log(frutas.length);

//MÉTODOS
//Añadir elementos array.push(),array.unshift();
frutas.push("Kaki");//final
frutas.unshift("Pomelo"); //inicio
console.log(frutas);

//Borrar elementos delete(array[indice]) deja huevos!!

delete(frutas[3]);
console.log(frutas);

//Extraer elementos
//array.pop() extraer del final
//array.shift() para extraer del inicio
let frutaFinal = frutas.pop();
console.log(frutaFinal);
console.log(frutas)
let frutaInicio = frutas.shift();
console.log(frutaInicio);
console.log(frutas);


//slice,splice
//EL metodo slice extrae elementos de un array a un nuevo array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);
console.log(fruits);

//El método splice añade o remueve elementos del array,sobreescribiendo el array
// (indice,numerosDeItemsParRemover,item1,item2,...)
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//MÉTODO para transformar array a cadena
//array.toString() separa por comas
//array.join("separador") separada por un separador
console.log(fruits.toString());
console.log(frutas.join("-"));

let cadenaFrutas = "";
for (let i in frutas){
    cadenaFrutas += frutas[i]+" ";
}

console.log(cadenaFrutas);

//MÉTODOS para buscar elementos de los arrays
//indexOf()
//lasIndexOf()
//includes()


//array.indexOf(elementoBuscado, desdeIndice)
let indiceNaranja = fruits.indexOf('Orange'); 
let indiceBanana = fruits.indexOf('Banana'); 
console.log(indiceNaranja);
console.log(indiceBanana);


//array.lastIndexOf(elementoBuscado, desdeIndice)
let ultimoIndiceNaranja = fruits.lastIndexOf('Orange');
console.log(ultimoIndiceNaranja);


//array.includes(elementoBuscado, desdeIndice)
let incluyeBanana = fruits.includes('Banana');
let incluyeGuacamayo = frutas.includes('guacamayo');
console.log(incluyeBanana);
console.log(incluyeGuacamayo);


/*filter,map,some,every,find.... métodos de arrays pero que se usan una función */


//concat,reverse,toReversed,sort
//array.concat(array2, array3, ...) Combina arrays sin modificar los originales.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayConcatenado = array1.concat(array2); 
console.log(arrayConcatenado);
//array.reverse() Invierte el array modificando el original

array1.reverse();
console.log(array1);

//array.toReversed() Invierte el array sin modificar el original

let numerosReves = array2.toReversed();
console.log(numerosReves);


//array.sort() Ordena los elementos del array segund unicode, modificando el original.
let letras = ['d', 'b', 'a', 'c'];
console.log(letras);
letras.sort(); 
console.log(letras);


//Desestructuración de Arrays
const numeros = [1, 2, 3,4,5];

// Sin desestructuración
const numero1 = numeros[0];
const numero2 = numeros[1];

// Con desestructuración
const [uno, dos, tres, ,cinco] = numeros; //se salta un valor  "cuatro"

console.log(uno); 
console.log(dos); 
console.log(tres);
/*console.log(cuatro);*/
console.log(cinco);


//OPERADOR DE EXPANSIÓN, PROPAGACIÓN spread (...)
const numeros2 = numeros /*esto no es hacer una copia dela rray*/
numeros2[3] = 6; //este cambio sucede en numeros2 y en numeros
console.log(numeros);
console.log(numeros2);


const numeros3 = [...numeros]; /*esto si es una copia del array */
console.log(numeros3);
numeros3[3]=8;
console.log(numeros3);
console.log(numeros);

let [unos,doses,...otrosnumeros]= numeros;
console.log(otrosnumeros)




//VISUALIZA UN ARRAY
//for ... in
for(let i in numeros){
        console.log(numeros[1]);
}

//for ... of
for(let valor of numeros){
    console.log(valor);
}


//Métodos values(), keys(), entries()
//array.values() obtienes el valor del objeto iterable
//array.keys() accede a las claves  y devuelve un array con todas las claves
//array.entries() accede al par (clave,valor) y devuelve un array con todos los pares clave,valor
const numerosValores = numeros.values();
console.log(...numerosValores);

for (let valor of numeros.values()){
    console.log(valor);
}

for (let indice of numeros.keys()){
    console.log(indice);
}


for (let [clave,valor] of numeros.entries()){
    console.log('La clave es ${clave} y el valor es ${valor}');

}

const listaNumeros = [2,69,99,1,0];
//el número mayor de este array

console.log(Math.max(...listaNumeros));
console.log(Math.min(...listaNumeros));
