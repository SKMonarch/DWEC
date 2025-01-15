/*
    Objeto:estructura de datos que guarda propiedades (pares clave:valor) y métodos que son 
    funiones almacenadas como propiedades.
    clave-cadena, el valor puede ser cualquier cosa, otro objeto, una función.
    Diferencias con Map:
        Las claves en el Map podrian ser cualqier cosa, en los objetos son cadenas o simbolos, si ponemos otra cosa se autoconvierte en cadena
        
        Orden de inserciónsi usamps cadenas como claves es el orden de la propia inserción, sino puede variar
        
        En el Map hay métodos específicos como set, get , size y en el object no
        
        */



// Cómo crearlo. 1 Forma : usando literales
const Coche =  { 
    marca:"Citroen",
    modelo: "Exsala",
    color: "Rojo",
    anho: 2025,
    extras:["Antiniebla", "Sensor Aparcamiento"]
}

//2 Forma: creado el objeto vacío y añadiendo las propiedades
const Coche1 = {}

//nombreObjeto.nombrePropiedad = valor;

Coche1.marca = "Renault";
Coche1.modelo = "Kangoo",
Coche1.color = "Azul"
Coche1.anho = 2020;
Coche1.extras = ["Navegador"];


//3 Forma: No la vamos a usa es con new

const Coche2 = new Object();
//añadimos las propiedades con la anterior forma


//Añadir propiedad a un objeto
//nombreObjeto.nombrePropiedad = valor;
Coche.consumo = 10;
Coche.anho= 2024;

console.table(Coche);
console.table(Coche1);



//Eliminar propiedades
//Delete nombreObjeto.nombrePropiedad

delete Coche.anho;

console.log(Coche.anho); // cuando accedo a una propuedad que no existe undefined
console.log(`El coche ${Coche.marca} con modelo ${Coche.modelo} tiene un consumo de ${Coche.consumo} con los extras ${Coche.extras[0]} y ${Coche.extras[1]}`)




const Animal = {
    nombre : "Lucas",
    tipo: "Pato",
    color : "Blanco",
    veterinario : {
        nombre : "Pepe",
        apellido : "López López",
        edad: 40
    }
    }

    Animal.edad = 2;
    Animal.veterinario.carnet = true;
    console.table(Animal);


    delete Animal.veterinario.edad;
    console.log(Animal.veterinario.edad);


    //Visualizar Objetos
    //1 Forma: es accediendo a cada propiedad de forma individual nombreObjeto.nombreropiedad

    console.log(Animal.tipo);

    //bucle for...in for...of (con for ..of no funciona al no ser iterables los objetos)

        for(let i in Animal){
            console.log(Animal[i]);
        }

    /*
    for(let i of Animal) {
        console.log(i); //El objeto no es directamente iterable
        
    }*/

    //otra forma de acceder a las propiedades
    console.log(Animal["nombre"]);
    console.log(Animal.nombre);    


    console.log(typeof Animal)
    console.log(Animal instanceof Object)
    //El objeto puede tener métodos: funciones que se almacenan como propiedades
    //Tengo que crear un objeto con un métodos y saber cómo se crean y cómo se acceden a ellos y cómo se borran



    const Enemigo = {
        nombre : "Osbaldo",
        raza: "Orco",
        vida: 100,
        daño: 20,
        atacar: function() {
            console.log(`${this.nombre} está atacando he hizo ${this.daño} de daño`);
        },
        defender() {
            console.log(`${this.nombre} se está defendiendo!`);
        }
    }
    //llamar  a funciones del objeto
    Enemigo.atacar();
    Enemigo.defender();


    //Añadir una funcion  al objeto
    Enemigo.huir = function() {
        console.log(`${this.nombre} está huyendo!`);
    };
    
    Enemigo.huir(); 


//borrar funcion del objeto
delete Enemigo.atacar;
console.log(Enemigo.atacar);




const fruta = {
        nombre:"Pera",
        tipo:"Conferencia",
        precio:2.95,
        descuento:true,
        info: function () {
            return `La fruta ${this.nombre} de tipo ${this.tipo} tiene un precio de ${this.precio}`;
        },
        precioDescuento: function(){
            if(this.descuento)
                return this.precio -0.5;
        },
        actualizarPrecio: function(nuevoprecio){
            this.precio = nuevoprecio;
            
        }
    }


console.table(fruta);
//añadir propiedades a un objeto

fruta.color = "Verde";

//añadir métodos a un objeto
//nombreObjeto.nombreMétodo = function() { // instrcciones}
//Añade un método que compare dos frutas y devuelva una cadena indicando cuál es la fruta que menos vale

fruta.compararPrecio = function (otraFruta) {
    if (this.precio < otraFruta.precio) {
        return `${this.nombre} es más barata que ${otraFruta.nombre}`;
    } else if (this.precio > otraFruta.precio) {
        return `${otraFruta.nombre} es más barata que ${this.nombre}`;
    } else {
        return `Ambas frutas tienen el mismo precio`;
    }
}




//llamadas a

console.log(fruta.info());
console.log(`El precio con descuento es : ${fruta.precioDescuento()}`);


const fruta2 = {
    nombre:"Manza",
    tipo:"Conferencia",
    precio:1.95,
    descuento:true,
    info: function () {
        return `La fruta ${this.nombre} de tipo ${this.tipo} tiene un precio de ${this.precio}`;
    },
    precioDescuento: function(){
        if(this.descuento)
            return this.precio -0.5;
    },
    actualizarPrecio: function(nuevoprecio){
        this.precio = nuevoprecio;
        
    }
}


console.log(fruta.compararPrecio(fruta2));



//eliminar propiedades o metodos
//delete nombreObjeto.nombrePropiedad
//delete nombreObjeto.nombreMétodo

//VISUALIZAR un objeto
console.log(fruta.nombre);

//for..in for..of _> no funciona el objeto no es iterable directamente
for(let a in fruta){
    if (typeof fruta[a]!=='function'){
        console.log(fruta[a])
    }
}



//métodos: Object.values(nombreObnjeto), Object.keys(nombreObjeto), Object.entries(nombreObjeto)
//Cada uno de ellos devuelve un array, con los valores del objeto, con las claves del objeto, y con los pares
//clava-valor del objeto


console.log(Object.values(fruta));

console.log(Object.keys(fruta));
console.log(Object.entries(fruta));


for (let valor of Object.values(fruta)){
    if(typeof valor !== 'function'){
        console.log(valor);
    }
}




//Convierte a una cadena de texto en formato JSON
const cadenaObjeto = JSON.stringify(fruta);
console.log(cadenaObjeto);




//Función constructura de Objetos
function Persona(nombre, ap1, ap2, fnac, ocup, ojps = "Marrones"){
    this.nombre = nombre;
    this.apellido1 = ap1;
    this.apellido2 = ap2;
    this.fnacimiento = new Date(fnac);
    this.ocupacion = ocup;
    //propiedades con valores por defecto
    //this.ojos = "Marrones";
    this.ojos = this.ojos;


    //Métodos
    this.nombreCompleto = function(){
        return `Mi nombre es ${this.nombre} ${this.apellido1} ${this.apellido2}`;
    };


    this.cambiarOcupacion = function(nuevaOcupacion){
        return this.ocupacion = nuevaOcupacion;
    };


    this.obetenerEdad = function(){
        const anhoActual = new Date().getFullYear();
        return  anhoActual - this.fnacimiento.getFullYear();
    }


    this.infoCompleta = function(){
        return `${this.nombreCompleto()} y trabajo de ${this.ocupacion} y tengo ${ this.obetenerEdad()}`
    }
}



//Intanciar objetos Persona
const miPadre = new Persona("Federico","Romero","Blanco","1964-02-24","Carnicero");
const miMadre = new Persona("Juana","Santo","Nieve","1967-03-02","Cocinera","Amarillo");


//Visualizamos el objeto

for ( let v of  Object.values(miPadre)){
    if(typeof v !== 'function'){
        console.log(v);
    }
}

//Cambiar propiedad en los objetos instanciados
miMadre.ojos = "Verdes";
console.log(miMadre.ojos);


//añadir propiedad adicional a los objetos instanciados
//no va en el constructor!! solo está en el objeto al que se la añadimos
miMadre.altura = 1.70;
console.log(miMadre.altura);
console.log(miPadre.altura); // undefined no existe la propiedad



//Como añado propiedades o métodos en el constructor
//Persona.altura = 1.70; no
Persona.prototype.altura = 1.70;
Persona.prototype.infoOcupacion = function(){
        return `Trabajo de ${this.ocupacion}`;
}

const yo = new Persona("Felip3","Pérez","Negro","2003-03-14","Camionero");

console.log(yo);


//Métodos asocuados a los objetos
console.log("================================");
console.log("Object.create()");
// Crear un objeto basado en miMadre como prototipo
const hija = Object.create(miMadre);
hija.nombre = "Ana";
hija.apellido1 = "Santo";
console.log(hija.nombreCompleto()); 
console.log("================================");

console.log("Object.assign()"); 
// Copiar las propiedades de miMadre en un nuevo objeto
const copiaMadre = Object.assign({}, miMadre);
console.log(copiaMadre);
// se podría hacer  l mismo con el operador de propagación
const copiaMadre2 = { ...miMadre };
console.log(copiaMadre2);
console.log("================================");
console.log("Object.freeze()");
// Congelar miMadre para que no se puedan modificar sus propiedades
Object.freeze(miMadre);
miMadre.nombre = "María"; // No se aplicará
console.log(miMadre.nombre); 
console.log("================================");
console.log("Object.seal()");
// Sellar copiaMadre para evitar añadir o eliminar propiedades
Object.seal(copiaMadre);
copiaMadre.apellido1 = "Santos"; // Permitido
delete copiaMadre.apellido2; // No permitido
console.log(copiaMadre);
console.log("================================");
console.log("Object.isSealed()");
// Verificar si copiaMadre está sellado
console.log(Object.isSealed(copiaMadre)); 
// true
console.log("================================");
console.log("Object.isFrozen()");
// Verificar si miMadre está congelado
console.log(Object.isFrozen(miMadre)); 
// true
console.log("================================");

console.log("Object.hasOwnProperty()");
// Verificar si una propiedad pertenece al objeto y no a la cadena prototípica
console.log(miMadre.hasOwnProperty("nombre")); 
// true
console.log(hija.hasOwnProperty("nombreCompleto")); 
// false (porque lo hereda de miMadre)
// Alternativa con el operador `in`
console.log("nombre" in miMadre); 
// true
console.log("nombreCompleto" in hija); 
console.log("================================");