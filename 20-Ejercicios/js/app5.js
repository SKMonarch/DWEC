function dibujarTriangulo() {
    let numero = parseInt(document.getElementById('entradaNumero').value);
    let salida = document.getElementById('salidaTriangulo');
    salida.textContent = '';

    if (numero <= 0 || isNaN(numero)) {
        console.error('Número no válido');
        return;
    }

    for (let i = 1; i <= numero; i++) {
        salida.textContent += '* '.repeat(i) + '\n'; 
    }
}
