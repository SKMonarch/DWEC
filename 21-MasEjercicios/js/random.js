const frecuencias = new Map();

for (let i = 1; i <= 10; i++) { 
    frecuencias.set(i, 0);
}

for (let i = 0; i < 10000; i++) { 
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    frecuencias.set(numeroAleatorio, frecuencias.get(numeroAleatorio) + 1); 
}                                                                          
for (let [numero, frecuencia] of frecuencias.entries()) { 
    console.log(`Número ${numero}: ${frecuencia}`);
}
