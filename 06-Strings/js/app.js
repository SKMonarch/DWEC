//STRING: tipo de dato primitivo
let cadena = "Hola Mundo";
let cadena1 = new String("Hola Mundo");
let cadena2 ='Hola Mundo';

//Propiedades
//cadena.length
console.log(cadena.length);

//Métodos. No cambian la cadena original!!
//MAY Y MIN cadena.toLowerCase(), cadena.toUpperCase()
console.log(cadena.toLowerCase());
console.log(cadena.toUpperCase());

//BUSCAR POSICIÓN
//charAt(), at(), cadena[]
console.log(cadena.charAt(0)); /*Devuelve H*/
console.log(cadena.at(0)); /*Devuelve H*/
console.log(cadena[0]); /*Devuelve H*/

//posición que no existe
console.log(cadena.charAt(100)); /*Cadena vacía*/
console.log(cadena.at(100)); /*Cadena vacía*/
console.log(cadena[100]); /*Cadena vacía*/


console.log(cadena.cadena[-5]); /*Undefined*/
console.log(cadena.at(-5)); /*M*/
console.log(cadena.charAt(-5)); /*Cadena vacía*/

//BUSCAR POSICIÓN
//cadena.indexOf(), cadena.lastIndexOf(), includes(), startsWith(), endsWith()
console.log(cadena.indexOf8("o")); /*1*/
console.log(cadena.lastIndexOf("o")); /*9*/
console.log(cadena.lastIndexOf("O")); /*-1 si no existe*/
console.log(cadena.includes("M")); /*true*/
console.log(cadena.includes("m")); /*false*/
console.log(cadena.startsWith("M")); /*false*/
console.log(cadena.startsWith("m")); /*false*/
console.log(cadena.endsWith("o")); /*true*/
console.log(cadena.endsWith("Ho")); /*false*/


//cadena.CONCAT() (+)
console.log(cadena.concat(" ",cadena2));

//cadena.repeat(n)
console.log(cadena.repeat(5));
console.log("a".repeat(5));

//EXTRAER PARTES DE UNA CADENA
//substring(ini, fin) (devuelbve una parte de la cadenaentre las posiciones marcadas, sin incluir la posición final), 
//slice(ini, fin) (permite con valores de - y da resultado )
console.log(cadena.substring(0,4)); /*Devuelve Hola*/
console.log(cadena.slice(0,4)); /*Devuelve Hola*/
console.log(cadena.slice(-5)); /*Devuelve mundo*/

//ESPACIOS
//trim(), trimStarts(), trimEnds()
let cadena3 = "     H      ";
console.log(cadena3.length);
cadena3 = cadena3.trimStart();
console.log(cadena3.length);

//split(separador) convierte una cadena en un array
const array = cadena.split(" ");
console.log(array);
console.table(array);

const array2 = cadena.split("");
console.table(array2);
const array3 = cadena.split("M");
console.table(array3);
const array4 = cadena.split("W");
console.table(array4);

//REEMPLAZAR
//replace(vviejo, vnuevo), replaceAll(vviejo, vnuevo)
let nombre = "pepe";
let nombre2 = "Pepe";
if (nombre>nombre2){
    console.log(`${nombre} mayor`);
}else if (nombre2>nombre){
    console.log(`${nombre2} mayor`);
}else{
    console.log("Iguales");
}

//charCodeAt()
console.log("p".charCodeAt()); /*112*/
console.log("p".charCodeAt()); /*80*/

//localeCompare: 1, -1, 0 //español y sin pensar en case sensitve
console.log(nombre.localeCompare(nombre2));