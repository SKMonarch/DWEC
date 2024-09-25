/*ÁMBITO DE LAS VARIABLES: alcance, desde donde es accesible una variable 

    global: todo el documento
    funcion: dentro de la funcion
    bloque: dentro del bloque{}

*/

//Ammbito de var: global o de función

//Bloque
{
    var variable1 ="hola";
    console.log(variable1);//hola
}

console.log(variable1);// hola
//Ambito de let: bloque,no puede ser accedudi desde fuera dek bloque
{
    let variable2 ="hola";
    console.log(variable2);//hola
}

// console.log(variable2);// nada

//Ambito const:bloque
{
    const variable3 ="hola";
    console.log(variable3);//hola
}
console.log("------------------------------");
// console.log(variable3);// Uncaught ReferenceError: variable 3 is not defined
// VAR
var prenda = "camisa";//camisa
console.log(prenda);
{
    var prenda = "pantalón";//pantalón
    console.log(prenda);
}
console.log(prenda)//pantalón
console.log("------------------------------");
//LET
let pieza2 = "camisa";//camisa
console.log(pieza2);
{
    let pieza2 = "pantalón";//pantalón
    console.log(pieza2);
}
console.log(pieza2)//camisa

console.log("------------------------------");
//CONST
const prenda3 = "camisa";//camisa
console.log(prenda3);
{
    const prenda3 = "pantalón";//pantalón
    console.log(prenda3);
}
console.log(prenda3)//camisa
console.log("------------------------------");

/*
//Ambito de función
//VAR
function saludar(){
    //codigo js
    var saludo = "hola";
    console.log(saludo);
}

console.log(saludo); //Ambito de funcion, no se muestra.  ERROR

console.log("------------------------------");
//LET
function saludar(){
    //codigo js
    let saludo = "hola";
    console.log(saludo);
}

console.log(saludo); //Ambito de funcion, no se muestra.  ERROR

console.log("------------------------------");

function saludar(){
    //codigo js
    const saludo = "hola";
    console.log(saludo);
}

console.log(saludo); //Ambito de funcion, no se muestra.  ERROR

*/
// REASIGNAR
// VAR
/*
var pieza = "camisa";//camisa
console.log(pieza);
{
    var pieza = "pantalón";//pantalón
    console.log(pieza);
}
console.log(prenda)//pantalón
console.log("------------------------------");
//LET
// let pieza2 = "arandela";//arandela 
console.log(pieza2);
{
    let pieza2 = "pantalón";//pantalón
    console.log(pieza2);
}
console.log(pieza2)//camisa

console.log("------------------------------");
//CONST
const pieza3 = "camisa";//camisa
console.log(pieza3);
{
    const pieza3 = "pantalón";//pantalón
    console.log(pieza3);
}
console.log(pieza3)//camisa
console.log("------------------------------");
*/




//TIPOS DE DATOS PRIMITIVOS

/*
    String
    Number
    Boolean
    null
    undefined
    BigInt  : tipo de dato que permite manipular  y representar enteros de tamaño grande
    Symbol : tipo de dato que crea valores unicos e inmutables usados para identificadores  de propiedades de objetos
*/ 


//String
let cadena1 = "soy una cadena";
let cadena2 = 'soy una cadena';
let cadena3 = "soy una 'cadena'";
let cadena4 = 'soy una"cadena"';
let cadena5 = "soy una \"cadena\"";
let cadena6 = `soy una cadena`;//plantilla de cadena(SE METE TEXTO Y VARIABLES)
let cadena7 = "b";

//Operador de tipo typeoff: el tipo de dato que es una variable
console.log("===================")
console.log("valor"+cadena7+"su tipo es"+typeof(cadena7))



//Number
let numero1 = 3;
let numero2 = 3.566;
let numero3 = -4;
let numero4 = -3.45;
let numero5=12e5;//exponencial
let numero6 = 12e-5 //exponencial negativo
console.log("===================")

console.log("valor"+numero5+" su tipo es"+typeof(numero5))
console.log("===================")
let mensaje = `valor ${numero5} su tipo es ${typeof(numero5)}`;
console.log(mensaje);

//Boolean
let cierto = true;
let falso = false;
console.log("===================")
console.log(`valor: ${cierto} su tipo de datos es:${typeof(cierto)}`)


//Undefined
let noDefinido //undefined
console.log(typeof(noDefinido));
noDefinido = 5;
console.log(typeof(noDefinido));
noDefinido = undefined;
console.log(typeof(noDefinido));

//Null
let nulo = null;
console.log(`valor es ${nulo} y su tipo de dato es ${typeof nulo}`);
nulo = 4
console.log(typeof(nulo));
nulo = null; 
console.log(typeof(nulo));
