function verificar() {
    let texto = document.getElementById("texto").value;
    let limpio = ""; 
    let invertido = "";
  
  
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i].toLowerCase();
      if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        limpio += char;
      }
    }
  
  
    for (let i = limpio.length - 1; i >= 0; i--) {
      invertido += limpio[i];
    }
  
  
    if (limpio === invertido && limpio.length > 0) {
      document.getElementById("resultado").textContent = "¡Es un palíndromo!";
    } else {
      document.getElementById("resultado").textContent = "No es un palíndromo.";
    }
  }
  