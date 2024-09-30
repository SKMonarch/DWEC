//Number creado a partir de literal
let numero = 3;

//Number creado como objeto new(No se hace por que ocupa demasiado y realentiza)
let numero1 = new Number(3);
console.log("=========================");
console.log(numero == numero1); //Mismo valor, True
console.log(typeof(numero));
console.log(typeof(numero1));
console.log(numero===numero1); // mismo valor pero distinto tipo de dato, False



let cadena = "hola";
let cadena1 = new String("hola");
console.log("=========================");
console.log(cadena == cadena1); //Mismo valor, True
console.log(typeof(cadena));
console.log(typeof(cadena1));
console.log(cadena===cadena1); // mismo valor pero distinto tipo de dato, False
console.log("=========================");
//Comparar 2 objetos
let objeto = new Number(3);
let objeto1 = new Number(3);
console.log(objeto == objeto1); //Son el mismo valor pero al se objeto son impredecibles
console.log(typeof(objeto));
console.log(typeof(objeto1));
console.log(objeto===objeto1); // mismo valor y datos, pero son objetos,son impredecibles
console.log("=========================");


//NAn not a number
let noNumero = NaN;
console.log(noNumero);
console.log(typeof(noNumero));
console.log(3/0); //Infinity
console.log("=========================");
// funcion is NaN();
console.log(isNaN("hola"/"hola"));
console.log(isNaN(3));
console.log("=========================");

//toString()
let num = 123;
let str = num.toString();
console.log(str); // "123"
console.log(typeof str); // "string"
console.log("=========================");
//toFixed()
let num1 = 2.34567;
let fixed = num1.toFixed(2); //redondea a 2
console.log(fixed); // "2.35"
console.log("=========================");
//Number()
let str1 = "123";
let num3 = Number(str1);
console.log(num3); // 123
console.log(typeof num3); // "number"
console.log("=========================");
//parseInt()
let str2 = "holas123.456 holas";// al iniciar con string,no lo detecta como un entero y da e NaN
let str21 = "123.456 holas";//desecha las letras y queda con los numeros enteros
let int = parseInt(str2);
let int1 = parseInt(str21);
console.log(int1);
console.log(int); // 123

let hexStr = "1F";
let hexInt = parseInt(hexStr, 16);
console.log(hexInt); // 31
console.log("=========================");
//parseFloat()
let str3 = "123.456abc";// desecha las letras y se queda con el numero en decimal
let floatNum = parseFloat(str3);
console.log(floatNum); // 123.456
console.log("=========================");
//isInteger()
let num5 = 4;
let num6 = "5";
console.log(Number.isInteger(num5));// Comprueba si es un numero,True
console.log(Number.isInteger(num6));// Al ser un string,aun siendo un numero, lo da como False
console.log("=========================");