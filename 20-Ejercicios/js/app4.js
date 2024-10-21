function iniciarJuego() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let numeroUsuario;
    let jugando = true;

    while (jugando) {
        numeroUsuario = prompt("Adivina un número del 1 al 100:");

        if (numeroUsuario === null) {
            alert("El juego se ha cancelado.");
            break;
        }

        if (numeroUsuario.trim() === "") {
            alert("Debes introducir un número.");
            continue;
        }

        numeroUsuario = parseInt(numeroUsuario);
        
        if (isNaN(numeroUsuario)) {
            alert("El dato insertado no es un número.");
            continue;
        }

        intentos++;

        if (numeroUsuario < numeroAleatorio) {
            alert("El número buscado es mayor.");
        } else if (numeroUsuario > numeroAleatorio) {
            alert("El número buscado es menor.");
        } else {
            alert(`¡Has acertado! El número era ${numeroAleatorio}. Te tomó ${intentos} intentos.`);
            jugando = false; // Termina el juego
        }
    }
}
