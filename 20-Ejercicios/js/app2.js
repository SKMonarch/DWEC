/*Crea una página web que cada vez que se abra muestre por consola una página
recomendada aleatoria y un mensaje al usuari@ de la forma:
• (si son entre las 07 y las 14) Buenos días usuari@ hoy es Miércoles y el
enlace del día es: www.google.es
• (a partir de las 14 y hasta las 20) Buenas tardes usuari@ hoy es Miércoles y
el enlace del día es: www.google.es
• (a partir de las 20 y hasta las 07) Buenas noches usuari@ hoy es Miércoles
y el enlace del día es: www.google.es
• La/s páginas posibles a mostrar las escoges tú. La fecha se obtiene con un
objeto llamado Date.*/ 



const pages = [
    "https://www.google.es",
    "https://www.youtube.com",
    "https://www.wikipedia.org",
    "https://www.github.com",
    "https://www.reddit.com"
];


function RandomPage() {
    const randomIndex = Math.floor(Math.random() * pages.length);
    return pages[randomIndex];
}


const dia = new Date();
const horas = dia.getHours();
const dia_semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const dia_actual = dia_semana[dia.getDay()];


const pagina = RandomPage();


let sms;
if (horas >= 7 && horas < 14) {
    sms = `Buenos días usuari@, hoy es ${dia_actual} y el enlace del día es: ${pagina}`;
} else if (horas >= 14 && horas < 20) {
    sms = `Buenas tardes usuari@, hoy es ${dia_actual} y el enlace del día es: ${pagina}`;
} else {
    sms = `Buenas noches usuari@, hoy es ${dia_actual} y el enlace del día es: ${pagina}`;
}


console.log(sms);

