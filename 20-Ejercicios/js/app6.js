document.getElementById('botonGenerar').addEventListener('click', () => {
    const cantidad = parseInt(document.getElementById('cuadradosCount').value);
    
 
    if (isNaN(cantidad) || cantidad <= 0) {
        console.error('Por favor, ingrese un número entero positivo.');
        alert('Error: Debe ingresar un número entero positivo.');
        return;
    }

    document.body.querySelectorAll('.cuadrado').forEach(cuadrado => cuadrado.remove());

    for (let i = 0; i < cantidad; i++) {
        crearCuadradoAleatorio();
    }
});

function crearCuadradoAleatorio() {
    const cuadrado = document.createElement('div');
    const tamaño = Math.random() * 100 + 20; 
    const color = obtenerColorAleatorio();
    const x = Math.random() * (window.innerWidth - tamaño);
    const y = Math.random() * (window.innerHeight - tamaño);

    cuadrado.className = 'cuadrado';
    cuadrado.style.width = `${tamaño}px`;
    cuadrado.style.height = `${tamaño}px`;
    cuadrado.style.backgroundColor = color;
    cuadrado.style.left = `${x}px`;
    cuadrado.style.top = `${y}px`;

    document.body.appendChild(cuadrado);
}

function obtenerColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
