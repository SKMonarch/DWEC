//INSTRUCCIONES DE ENTRADA JS
/*
    confirm: cuadro diálogo con dos botones acep / cancelar
    devuelve un boolean true o false
    sintaxis:
        let resultado = confirm("Mensaje");
    
    prompt: cuadro diálogo con un mensaje y opcional sms con instrucción, dos botones acep/ cancelar
    devuelve un string,null,string vacío
    sintaxis:
            let dato = prompt("Mensaje","Instrucciones");
*/

//let resultado = confirm("¿Quieres cerrar la ventana?")
//console.log(resultado);


//let dato = prompt("Intruzca su edad","Por ejemplo: 20");
//console.log(dato);
//console.log(typeof(dato));


//OBJECTO Math
/*
    No se crea con new,es estático.
    Propiedad:
        Math.propiedad
        Math.PI

    Metodos:
        Math.metodo
        round,trunc,ceil,floor,min,max,abs,sign,pow,random
    */
console.log(Math.trunc(3.234324));
console.log(Math.round(3.834324));
console.log(Math.floor(3.234324));
console.log(Math.sign(3.234324));//1
console.log(Math.sign(-3.234324));//-1
console.log(Math.min(3.234324,-4,58,-49));//-49
console.log(Math.random());//entre 0 y 1 (excluido)
console.log(Math.floor(Math.random()*200));

//NUm aleatorio entre 5-15
// (Math.random()*(max-min))+min


//CONTROL DE FLUJO
/* 
    if (condicion){
        instrucciones;
    }else if(condicion){
        instrucciones;
    }else{
        instrucciones;
    }

    OPERADOR TERNARIO
    (condicion) ? valor1 : valor2;
*/

let local = 3;
let visitante = 2;

if ( local > visitante){
    console.log("Local gana");
}else if(visitante > local){
    console.log("Visitante gana");
}else{
    console.log("Empate");
}

//(condicion) ? valor1 : valor2 ;

console.log((local > visitante) ? "local gana" : ((visitante > local) ? "visitante gana" : "Empatan"));


//Objeto  DATE
/*Objeto que permite crear y manipular fechas y horas
    No es estátoca, tengo que crearlo con new
    Sintaxis:
        const fecha = new Date();
    Métodos:
        getFullYear(), getDate(),getDay(),getHours(),getMinutes,getMonth,getTime();

 */
const fecha = new Date();
console.log(fecha);
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getDate());
console.log(fecha.getDay());// la semana empieza en 0 = domingo
console.log(fecha.getTime());
//creamos dos fechas 1/1/2024 31/12/2024

const fecha1 = new Date("2024-1-1");
const fecha2 = new Date(2024,11,31);
console.log(fecha1);
console.log(fecha2);
let diferenciaFecha = fecha2.getTime() - fecha1.getTime();
let diferenciaDias = diferenciaFecha / (1000 +80 * 60 * 24);
console.log(Math.round(diferenciaDias));


//SWITCH

/*

    Sintaxis:
        switch(expresion){
            case valor1:
                    instrucciones;
                    break;
            case valor2:
                    isntrucciones;
                    break;
            default:
                instrucciones
                 //No hace falta break;
            }
        Tiene comparaciones estrictas!!! === !==
*/

let nota = "5"; //Comparaciones estrictas
switch(nota){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Suspenso");
        break;
    case 5:
        console.log("Suficiente");
        break;
    case 6:
        console.log("Bien");
        break;
    case 7:
        console.log("Notable");
        break;
    case 8:
        console.log("Notable");
        break;
    case 9:
        console.log("Sobresaliente");
        break;
    case 10: 
    console.log("Sobresaliente");
        break;
    default :
    console.log("Nota incorrecta")
};


//FOR
/*
    Sintaxis:
        for(expresionInicial;expresionCondicion;expresionActualizacion){
            Instrucciones;
        } 
*/

//let i = 0; Se puede instanciar fuera del for
for(let i = 1; i <= 5; i++) {
        console.log(i);
}

//OMITIR SEGUNDA EXPRESIÓN
for (let j = 1 ;; j++ ) {
    if (j>10) {
        break;
    }
}

//OMITIR TERCERA EXPRESIÓN

for (let k = 1; k>=10;) {
    console.log(k);
    k++;
}

//continue

for (let u = 1;u <= 10;u++) {
    if (u%2 === 0){
        continue;
    }
    if (u>5){
        break;
    }
}


console.log(u)