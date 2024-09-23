// Comentario en linea

/*
Comentario
en
multiples
lineas*/

// como y donde??
/*
    1 Forma:
        <script>
            Instrucciones javascript
        </script>
        No es reutilizable
    
    2 Forma:
        <script src="ruta_archivo.js" type="text/javascript"></script>
        Reutilizable,legible,codigo extenso
        atributos opcionales
        type=(fuera de uso) define la relacion de que es el lenguaje javascript

        async: Se genera de forma asincrona
        defer: Se genera de forma paralela


    Donde??
        Interna: dentro del html --> 1 forma
        Externa: con un documento aparte --> 2 forma
        <head>: cuando quiero que se ejecute js antes que el html esté cargadp.
        <body>: cuando quiero que se ejecute js despues que el html esté cargado.

        */ 


    // Instrucciones de salida
    
    /*
    console.log("mensaje") sms consola prueba y depuración
    alert("mensaje") o window.alert("mensaje")
    document.write("mensaje con etiquetas html") se usa solo para pruebas
    */
   console.log("Mi primer mensaje por consola");
   console.error("Esto es un mensaje de error");
   console.warn("Esto es una alerta!");
   console.table("Mensaje en tabla");
//alert(2+5);  



 //sentencias y sintaxis
 /*
    Identificadores: no empieza por numero. Empiezan por letras,_,$
        despues ya si pueden tener numeros,letras , o lo que sea
    Case sensitive: distingue mayusculas  y minusculas no es lo mismo var VAr
    No podemos usar palabras reservadas para los identificadores: var,let,const,while,for
    Las instrucciones acaban con ;
    No instrucciones muy largas y si son largas cortarlas por un oprador +
    Los espacios en blanco no se tienen en cuenta
    Concepto de Bloque: es lo que va entre llaves {}
 */ 
//Sintaxis var identificador = valor
var cadena = "mi primera cadena";
var numero = 4/3;
var boolean = true;
var sinvalor; // undefined
console.log(cadena);
console.log(numero);
console.log(boolean);
console.log(sinvalor);
console.log(typeof(sinvalor));
sinvalor = 4;
console.log(sinvalor);
console.log(typeof(sinvalor));
sinvalor = "hola";
console.log(sinvalor);
console.log(typeof(sinvalor));
sinvalor = false;
console.log(sinvalor);
console.log(typeof(sinvalor));
//typeof(); muestra el tipo de dato


//VARIABLES
/*
    var(anterior 2015)
    let(2015)
    const(2015)
*/ 

//var
var fruta = "kaki";
console.log(fruta);
//redeclarar SI
var fruta = "limón";
console.log(fruta);
//reasignar SI
fruta = "manzana"
console.log(fruta);

console.log(comida);
//let
let carne = "chorizo";
console.log(carne);
//Redeclarar NO
//let carne = "FIlete";
//console.error(carne)
//reasignar SI
carne = "cerdo"
console.log(carne);

//const
const vegetales ="tomate";
console.log(vegetales);
//Redeclarar NO (es constante)
//const vegetales ="Albahaca"
//console.error(vegetales);
//reasignar NO
vegetales = "zanahoria"
console.log(vegetales);

const pi = 3.14;
console.log("El radio de la circunferencia es :"+pi*5);