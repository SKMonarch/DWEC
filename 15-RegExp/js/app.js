/*
    EXPRESIÓN REGULAR
    Son patrones de búsqueda para identificar,extraer o manipular texto.
    
    Sintaxis:
        const patron = /patron/modificador;

    Modificadores:
        i : no distingue entre mayúsculas y minúsculas
        g : la búsqueda se realiza de forma global, en toda la cadena

    Patrones:
        [abc] : que se busca alguno de los caracteres entre corchetes
        [^abc]: busca algún caracter que no esté incluido en el corchete
        [a-z] : cualquier letra de la a-z en minusculas
        [A-Z] : cualquier letra de la A-Z en mayuscuñas
        [0-9] : cualquier numero entre 0 y 9
        (x | y) busca un de los dos caracteres entre paréntesis

    Métodos de cadenas que se suelen emplear con expresiones regulares
    patron.test(cadena): comprueba si un patrón está en una cadena y devuelve true o false
    
    search()
    match()
    replace()
    
    */


    const saludo = "Hola gente";
    const p1 = /ola/ ;// true
    const p2 = /[ola]/;// true
    const p3 = /[opq]/;// true
    const p4 = /[^ola]/;// true
    const p5 = /[UOE]/; // false
    const p6 = /[UOE]/i; // true
    console.log(p1.test(saludo));
    console.log(p2.test(saludo));
    console.log(p3.test(saludo));
    console.log(p4.test(saludo));
    console.log(p5.test(saludo));
    console.log(p6.test(saludo));   


    //SEARCH()

    const indice = saludo.search("gente")
    console.log(indice); // 5 primer indice de coincidencia
    const indice2 = saludo.search(/[g]/);
    console.log(indice2); // 5 indice que coincide
    const indice3 = saludo.search("personas");
    console.log(indice3); // -1 no encontrado


    //MATCH()
    const resultado = saludo.match("gente");
    const resultado2 = saludo.match(/[gen]/);
    const resultado3 = saludo.match("persona");
    console.log(resultado);
    console.log(resultado2);// indica el index, el input que es la cadena y groups(segmentos especificos de texto que se han delimitado en la expresión regular mediante paréntesis)
    console.log(resultado3); // No lo encuentra y devuelve un null


    //REPLACE()
    //string.replace(a,b)
    //a: texto que deseas reemplazar
    //b : el texto que vas a reemplazar
    const salida = saludo.replace("gente","personas")// cambia la cadena por la otra cadena expresada
    const salida2 = saludo.replace(/e/,"@") // cambia la primera e encontrada en el texto por el @, si se mete g como modificador cambia todas
    console.log(salida);
    console.log(salida2);