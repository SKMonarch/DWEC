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
  



//ARROW FUNCTIONS

const doble2 = x => 2*x;