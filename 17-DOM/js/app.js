/*
    DOM: Document Object Model
    
    <!DOCTYPE HTML>
    <html lang="en"> 
        <head>
            <title>DOM</title>
        </head>
        <body>
            <h1>DOM</h1>
            <a href="https://dom.org">Link</a>
        </body>
    </html>
    

    COMO ACCEDEMOS A LOS ELEMENTOS DEL DOM
        document.getElementById("id") 
        document.getElementsByTagName("etiqueta")
        document.getElementByClassName("clase")
        document.querySelector("selector")
        document.querySelectorAll("selector")
    
    */ 


const parrafo1 = document.getElementById("parrafo1");
console.log(parrafo1);
console.log(parrafo1.innerHTML)
parrafo1.innerHTML = "Este es el nuevo valor del párrafo"

const noexiste = document.getElementById("noexiste");
console.log(noexiste); //cuando intentamos acceder a un elemento del DOM que no existe

const titulo = document.getElementById("titulo")
console.log(titulo);
titulo.innerHTML = "Este es el nuevo titulo";

/*document.getElementsByTagName("etiqueta") 
    Devolver una HTMLCollection
    
    */
const lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0].innerHTML)
console.log(lis[1].innerHTML)
console.log(lis[2].innerHTML)
for(let li of lis ){
    console.log(li.innerHTML);
}

/*document.getElementByClassName("clase")
Devolver un HTML Collection
 */


const p1 = document.getElementsByClassName("p1")
console.log(p1);
console.log(p1.length);// 2 longitud
for(let p of p1){
    console.log(p.innerHTML);
}

//modificar el contenido de los párrafos
p1[0].innerHTML = "Estoy cambiando el contenido"
p1[1].innerHTML = "Más cosas que cambio"


/*
document.querySelector("selector") 
selecciona el primer objeto que cumple con un selector 
document.querySelectorAll("selector")
selecciona todos los objetos que  cumplen con un selector
Devuelve un NodeList - similar a un array pero tp es como HTMLCollection
*/

const li3 = document.querySelector("li#item3");
console.log(li3);
li3.innerHTML = "MODIFICADO"

const lies = document.querySelectorAll("li")
console.log(lies);

lies.forEach(li =>{
    console.log(li.innerHTML);
}); 


/*
    Diferencia entre HTMLCollection  y NodeList


Como Cambiar el contenido HTML
    innerHTML: accede /modifica todo lo que 
    está dentro de un elemento html, texto, otras etiquetas...
    innerText:
    TextContent:
    */


const subtitulo = document.getElementById("subttitulo");
console.log(subtitulo.innerHTML);
console.log(subtitulo.innerText);
subtitulo.innerHTML = "Esto <i>es</i> un subtitulo";
console.log(subtitulo);
console.log(subtitulo.textContent);


/*CÓMO ACCEDER A UN ATRIBUTO */
const enlace = document.getElementsByTagName("a");
console.log(enlace);
enlace[0].title = "Enlace a Google;"


/*CAMBIAR ESTILOS CSS CON JAVASCRIPT 
    background-color backgroundColor
    font-size fontSize
    */

titulo.style.color = "green";
titulo.style.backgroundColor = "lightblue";

    