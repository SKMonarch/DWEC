function generarTablaUnicode() {
    const cuerpoTabla = document.getElementById('unicode-table-body');

    for (let i = 0; i < 1000; i++) {
        const fila = document.createElement('tr');
        
        const celdaCodigo = document.createElement('td');
        celdaCodigo.textContent = i;
        
        const celdaCaracter = document.createElement('td');
        celdaCaracter.textContent = String.fromCharCode(i);

        fila.appendChild(celdaCodigo);
        fila.appendChild(celdaCaracter);
        
        cuerpoTabla.appendChild(fila);
    }
}

document.addEventListener('DOMContentLoaded', generarTablaUnicode);
