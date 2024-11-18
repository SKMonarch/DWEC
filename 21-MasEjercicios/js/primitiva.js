for (let i = 0; i < 50; i++){
    let combinacion = new Set();
    while(combinacion.size < 6){
        let numero = Math.floor(Math.random() * 49) + 1;
        combinacion.add(numero);
    }
    const combinacionArray = [...combinacion];
    const combinacionTexto = combinacionArray.join(' ');
    console.log(combinacionTexto);
}
