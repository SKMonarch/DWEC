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