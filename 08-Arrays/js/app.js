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
console.log(colores instanceof Arrray); //true
console.log(Array.isArray(colores)); //true

//Array con datos de distintos tipos
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
    console.loh(colores[1]);
}

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


