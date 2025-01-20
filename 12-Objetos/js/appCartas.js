


function Cartas(palo,valor){
    
    if (palo < 1 || palo > 4  || valor < 1 || valor >10){
        return null;
    }

    this.palo = palo;
    this.valor = valor;
    

    this.paloToString = () => {
        switch(this.palo){
            case 1: return "ORO"
            case 2: return "ESPADAS"
            case 3: return "BASTOS"
            case 4: return "COPAS"
        }
    }
    
    this.valorToString = () => {
        switch(this.valor){
            case 1: return "AS"
            case 2: return "DOS"
            case 3: return "TRES"
            case 4: return "CUATRO"
            case 5: return "CINCO"
            case 6: return "SEIS"
            case 7: return "SIETE"
            case 8: return "SOTA"
            case 9: return "CABALLO"
            case 10: return "REY"
        }
    }

    this.toString = () => {
        return `${this.valorToString()} de ${this.paloToString()}`


    }

    this.darValor = (palo,valor) => {
        if (palo < 1 || palo > 4 || valor < 1 || valor > 10) {
            return null;
        }
        this.palo = palo;
        this.valor = valor;

    }
    
} 
function Baraja(){
    
    this.Cartas = [];
    this.iniciar = () => {
        for(let palo = 1; palo <= 4; palo++){
            for(let valor = 1; valor <= 10; valor ++){
                this.Cartas.push(new Cartas(palo,valor));
            }
        }
       
    }
   

    this.barajar = () => {
        for(let i=this.Cartas.length-1; i>0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            let tempCartas = this.Cartas[i];
            this.Cartas[i]=this.Cartas[j];
            this.Cartas[j] = tempCartas;
        }
    }
    
    this.toString = () =>{
        return this.Cartas.map(carta => carta.toString()).join(", ");

    }

}


// Crear una nueva baraja
const baraja = new Baraja();

// Inicializar la baraja
baraja.iniciar();

console.log(baraja.toString());

// Barajar las cartas
baraja.barajar();
console.log(baraja.toString());
