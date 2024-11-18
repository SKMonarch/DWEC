
let nombre;
let contraseña;
let nombreCorrecto = false;
let contraseñaCorrecta = false;
let mayuscula = false;
let minuscula = false;
let numero = false;
let caracter = false;


while (!nombreCorrecto){
    nombre = prompt ("Introduce un nombre utilizando minúsculas y números");
    if (nombre === null){
        alert("No se introdujo un nombre")
        break;
    }
    
    nombreCorrecto = true;

    for (let i = 0; i < nombre.length; i++) {
        let char = nombre[i];
        if (!((char >= 'a' && char <='z') || (char >= '0' && char <='9'))){
            alert("El nombre no cumple los requisitos ");
            nombreCorrecto = false;
            break; 
        }
    }
}

    if (nombreCorrecto){
        while(!contraseñaCorrecta){
            contraseña = prompt ("Introduce una contraseña");
        if (contraseña === null){
            alert("No se ha introducido una contraseña")
            break;
        }

       

        for (let i = 0; i < contraseña.length; i++) {
            let char = contraseña[i];

            if (char >= 'A' && char <= 'Z'){
                mayuscula = true;
            }else if (char >= 'a' && char <= 'z'){
                minuscula = true;
            }else if (char >= '0' && char <= '9'){
                numero = true;
            }else {
                caracter = true;
            }
        }

        if (mayuscula && minuscula && numero && caracter) {
            alert("Información almacenada correctamente.");
            contraseñaCorrecta = true;
        } else {
            alert("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        }
    }
}
