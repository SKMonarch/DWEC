/*FUNCIÓN

    function nombre_funcion ( parametros ) {
        //Instrucciones;
    }
*/


//hoisting / elevación
saludar();//invocar la función antes de que haya sido declarada

function saludar(){
    console.log("Hola qué tal");
}



/*
function saludar2(mensaje,nombre){
    //controlar el parámetro undefined
    if(nombre === undefined){
        nombre = "usuari@"
    }

    return `Mensaje: ${mensaje}. Para: ${nombre}`;


}
*/
function saludar2(mensaje,nombre){
    return `Mensaje: ${mensaje}. Para: ${nombre}`;
}
console.log(saludar2("hola","jose"));
console.log(saludar2("HOLA","JOSE","CAIMAN"));
console.log(saludar2("Adios"));



//typeof
console.log(typeof saludar2);//function
console.log(typeof saludar2());//string(valores internos a la function)




//funcion que cuente el número de números pares de un array, cuentaParees(array)
//comprobar que el parámetro es un array. sms no puedo contar pares porque no es un array
//comprobar que tiene números si es para sumais. El número de pares es ...

function cuentaPares(numeros) {
    if (!Array.isArray(numeros)) {
        console.log("No puedo contar pares porque no es un array");
        return;
    }
    for (let i of numeros) {
        if (typeof i !== "number") {
            console.log("El array debe contener solo números");
            return;
        }
    }
  
    let contador = 0;

    
    for (let i of numeros) {
        if (i % 2 === 0) {
            contador++;
        }
    }

    console.log(`El número de pares es: ${contador}`);
}


cuentaPares([2,4,8,6]);

cuentaPares([2,4,8,6,"pepe"]);


//ASIGNAR FUNCIONES A VARIABLES. Funciones anónimas,no tienen propiedad hoisting
const doble = function(x) {
    return 2 * x;
  };
  console.log(doble(4));
  



//ARROW FUNCTIONSeliminar function, llaves, return
//no tienen propiedad hoisting

const doble2 = x => 2*x;

//MÉTODO FOREACH
/*Permite iterar sobre elementos de array, set, map
No devuelve un nuev array, no modifica el array original
No puedo parar el ciclo de iteración con break, continue
No devuelve return

Sintaxis:


array.forEach(function(elemento, indice, array_original){
    //instrucciones;
})

*/

const desayunos = ["yogurt","petisuis","rollo canela"]

desayunos.forEach(function(elemento){
    console.log(elemento);
})


//arrow function

desayunos.forEach(d => console.log(d));


//forEach en conjutnos set
const conjunto = new Set(["patata","zanahoria","brocoli","lechuga"])

conjunto.forEach(function(verduras){
    console.log(verduras);
})


conjunto.forEach(v => console.log(v));

//forEach en map
const mapa = new Map([
    [1,"hola"],
    [2,"Adios"],
    [3,"bye"]
])


mapa.forEach(function(saludos,indice){
    console.log(saludos,indice)
})


mapa.forEach((saludos,indice) =>console.log(saludos,indice));



//Array con edades de alumnos, con un foreach realizamos el conteo de llos mayores de edad
edades = [23, 35, 42, 29, 18, 27, 33,12,2,3,4,5,6,7,8, 40, 25, 19, 31, 28, 36, 22, 30]
function mayoresEdades(array){
    let mayores = 0;
    array.forEach(function(edad){
        if (edad >= 18){
            mayores++;   
        }
    });
    return mayores;
}

console.log(mayoresEdades(edades));

//Array con notas y realizais la media

nota = [5,3,6,8,10,9,4,2,3,7,8,8,6,4,5,8,9,4]


function mediaNotas(array){
    let total = 0;
    array.forEach(function(elemento){
        total = total + elemento;
        
    })
    
    const media = total / array.length;
    console.log(`La media es : ${media}`)
}


mediaNotas(nota);

//El método .map() sirve para cerar un nuevo array aplicandole una función a cada elemento del array
//Contiene estos 3 parámetros (elemento,indice(opcional),array(opcional))
const numeros = [1, 2, 3, 4];
const dobles = numeros.map(num => num * 2);

console.log(dobles); //Un nuevo array con el doble de cada elemento del otro array

const usuarios = [
    { nombre: "Ana", edad: 28 },
    { nombre: "Luis", edad: 34 },
    { nombre: "Juan", edad: 23 }
];

const nombres = usuarios.map(usuario => usuario.nombre);
const edades2 = usuarios.map(usuario => usuario.edad);
console.log(nombres); // Este array contienen los nombres
console.log(edades2);// Array con las edades 

//El método .filter() crea un nuevo array con los elementos que cimplen una condición específica
const numeros2 = [1, 2, 3, 4, 5];
const pares = numeros2.filter(num => num % 2 === 0);

console.log(pares); 


// El método .reduce()  reduce un array a un solo valor aplicando una función acumulativa
// a cada elemento,suma todos los valores del array
const numeros3 = [1, 2, 3, 4];
const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(suma); 


// El método .find devuelve el primer elemento que cumpla con una condición o undefined si no lo encuentra


const numeros4 = [1, 2, 3, 4];
const primerPar = numeros4.find(num => num % 2 === 0);
const noEncontrar = numeros4.find(num => num > 29 );
console.log(primerPar); 
console.log(noEncontrar);

// El método .findIndex(), igual al .find() pero devuelve el indice o -1 si no se encuentra
const numeros5 = [1, 2, 3, 4];
const indicePar = numeros5.findIndex(num => num % 2 === 0);
const noEncontrarIndex = numeros4.findIndex(num => num > 29 );
console.log(indicePar); 
console.log(noEncontrarIndex);

//El método .some() verifica si existe ese elemento y devuelve true o false
const numeros6 = [1, 3, 5];
const tienePar = numeros6.some(num => num % 2 === 0);

console.log(tienePar); 

//El método .every() verifica si todos cumplen la condicion,devuelve true o false

const numeros7 = [2, 4, 6];
const todosPares = numeros7.every(num => num % 2 === 0);

console.log(todosPares); 

//El método .concat une arrays

const array1 = [1, 2];
const array2 = [3, 4];
const combinado = array1.concat(array2);

console.log(combinado); 




//MAP
/*
Itera sobre los elementos del array
Devuelve un nuevo array -> ¡¡¡¡Del mismo Tamaño que el original!!!
No modifica el original
No podemos parar el ciclo de iteración
USO: para transformar los elementos del array no para filtrarlos!!!

Sintaxis;
const nuevoArray = array.map/function(elemnto,indice,array){
    //instrucciones
})
    */


const numerosArray = [2,3,4,1];
const dobles2 = numerosArray.map(num => num*2);
console.log(doble2);


const palabras2 =["caracola","mesa","silla","tomcat"];

const letras2 = palabras2.map(letras => letras.length);
console.log(letras2);


/*Filter
Recorre todos los elementos de un array , les aploca una función  y
si cumplen la condición aploca el array se filtra.
Puede devolver un array de igual logitud o de menor longitud que el original
Si ninguún elemento cumple la condición devuelve un array vacío.
 

const nuevoArray = array.filter(function(elemento,indice,array){
    //instrucciones
    })*/


    //consigue un nuevo array con los elementos pares
const nums = [1, 2, 3, 4];
const pares2 = nums.filter(num => num % 2 == 0);
console.log(pares2);
//consigue nuevo array con las palabras de más de 6 letras
const palabras = ["luna","sol","cielo","estrella"]
const cuatroLetras = palabras.filter(cuatro => cuatro.length >= 6 );
console.log(cuatroLetras);

/*funcion tradicional a la que se le pase un array y una letra
 y devuelva un array con las palabras que incluyen la letra indicada*/ 

 function filtrarPorLetra(array, letra) {
   letra = letra.toLowerCase();

   
    const resultado = array.filter(palabra => palabra.toLowerCase().includes(letra));

    return resultado;
}

const palabras3 = ["Manzana", "Pera", "Plátano", "Melón", "Mango"];
const letraBuscada = "p";

const palabrasFiltradas = filtrarPorLetra(palabras3, letraBuscada);
console.log(palabrasFiltradas);
