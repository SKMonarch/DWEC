//EJERCICIO 1

while(true){
let input =prompt("¿Que edad tienes?");
if(input === null){
    console.log("Le has dado a cancelar");
    break;
}
let edad = Number(input);

if(edad === 0 ){
    console.log("Debes escribir una edad");
}else if(isNaN(edad)){
    console.log("No has introducido un número");
}else{
    console.log("Tu edad es "+edad);
    break;
}

}


