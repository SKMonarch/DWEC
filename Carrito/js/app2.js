const carrito = document.querySelector('#carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const carritoIcono = document.querySelector('#acarrito');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners() {
   
    listaCursos.addEventListener('click', agregarCurso);

  
    carrito.addEventListener('click', eliminarCurso);

  
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    });

    carritoIcono.addEventListener('click', () => {
        contenedorCarrito.classList.toggle('mostrar');
    });
}


function agregarCurso(e) {
    e.preventDefault();// previene que se recargue si el boton dentro tiene un a

    if (e.target.classList.contains('boton')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent.replace('$', ''),
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    actualizarCarrito();
}


function actualizarCarrito() {
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="50"></td>
            <td>${titulo}</td>
            <td>$${precio}</td>
            <td>${cantidad}</td>
            <td><button class="borrar-curso" data-id="${id}">❌</button></td>
        `;
        carrito.appendChild(row);
    });
}


function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        actualizarCarrito();
    }
}


function limpiarHTML() {
    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }
}
