function cifrarCesar(texto, clave) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let codigoUnicode = texto.charCodeAt(i);
        let nuevoCodigo = codigoUnicode + clave;
        resultado += String.fromCharCode(nuevoCodigo);
    }
    return resultado;
}

let textoUsuario = prompt("Introduce el texto a cifrar:");
let claveUsuario = parseInt(prompt("Introduce la clave (número):"));
let textoCifrado = cifrarCesar(textoUsuario, claveUsuario);
console.log("Texto original:", textoUsuario);
console.log("Texto cifrado:", textoCifrado);
