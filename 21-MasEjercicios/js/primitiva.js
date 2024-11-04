function generarCombinaciones() {
    const combinaciones = [];
    
    for (let i = 0; i < 50; i++) {
        let combinacion = [];
        while (combinacion.length < 6) {
            const numero = Math.floor(Math.random() * 49) + 1;
            if (!combinacion.includes(numero)) {
                combinacion.push(numero);
            }
        }
        combinaciones.push(combinacion.sort((a, b) => a - b).join(', '));
    }
    
    return combinaciones;
}

function mostrarCombinaciones() {
    const combinaciones = generarCombinaciones();
    console.log("Aquí tienes tus combinaciones para jugar a la Lotería Primitiva:");
    combinaciones.forEach((combinacion, index) => {
        console.log(`Combinación ${index + 1}: ${combinacion}`);
    });
}

document.getElementById('generateButton').onclick = mostrarCombinaciones;
