let numeros = [];

for (let i = 0; i < 20; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 50) + 1;
  numeros.push(numeroAleatorio);
}

for (let i = 0; i < numeros.length; i++) {
  let asteriscos = "";
  for (let j = 0; j < numeros[i]; j++) {
    asteriscos += "*";
  }
  console.log(`Elemento ${i + 1}: ${asteriscos} (${numeros[i]})`);
}
