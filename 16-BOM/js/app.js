//Alertas
window.alert("Esto es una Alerta de Window")

//Ancho y Alto
console.log("Altura de la ventana:",window.innerHeight);
console.log("Ancho de la ventana:", window.innerWidth);


//Crear nueva Ventana

const nuevaVentana = window.open("https://www.google.com", "_blank", "width=800, height=800");


// Ver el historial de navegación
console.log("Historial del navegador:", window.history);






/*

MAnejador:
    Se encarga de realizar la acción tras capturas el evento

Modelo de eventos en linea
    Dentro de la etiqueta html se incluye un atributo para controlar el evento
    onclick, onmouseover, onmouseout, onload, etc...
    Se incluye dentro del html código javascript (no es tan legible, no reutilizable....)

Modelo de eventos del W3C
    No se incluye dentro de la etiqueta html
    Se utiliza un método addEventListener
    Se pueden crear varios eventos
    Sintaxis:
        document.getElementById("id").addEventListener("evento_sin_on",funcion,false/true)
        
    */






function colorear(id){
    document.getElementById(id).style.color = "";
}




function colorOriginal(){
    document.getElementById("p1").style.color = "green";
}


function mostrarFecha(){
    document.getElementById("p2").innerHTML = new Date()
}


document.getElementById("p3").addEventListener("click",saludo)
function saludo(){
    alert("Hola");
}
document.getElementById("p3").addEventListener("click",saludo2)
function saludo2(){
    alert("Que tal");
}
document.getElementById("p3").addEventListener("click",cambiarEstilos)
function cambiarEstilos (){
    const colors = ["red", "blue", "green" ]; 
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
    document.getElementById("p3").style.color = randomColor;
}