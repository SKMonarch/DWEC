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
    
    Enemigo.atacar();
    Enemigo.defender();


    Enemigo.huir = function() {
        console.log(`${this.nombre} está huyendo!`);
    };
    
    Enemigo.huir(); 



delete Enemigo.atacar;

console.log(Enemigo.atacar);