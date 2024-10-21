function obtenerColorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const cajaColor = document.getElementById('cajaColor');
cajaColor.style.backgroundColor = obtenerColorAleatorio();
