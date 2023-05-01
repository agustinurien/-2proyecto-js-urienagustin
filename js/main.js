const botonMode = document.querySelector(".botonDark");
const body = document.body
const container = document.querySelector(".container");
const productosD = document.querySelector(".productosNuevos");

botonMode.addEventListener("click", cambiarFondo);

function cambiarFondo() {  // funcion que cambia a dark y light mode //
    body.classList.toggle("modoOscuro")
    container.classList.toggle("containerDark")
    productosD.classList.toggle("productosNuevosD")
    botonMode.classList.toggle("botonLight")
    if (body.classList.contains("modoOscuro")) {
        botonMode.innerText = "cambiar a Light mode";
    } else {
        botonMode.innerText = "cambiar a Dark mode";
    }
}

const productos = [
    { nombre: "zapatillas deportivas", precio: 30000, codigo: 1, class: "zptllD", img: "../img/zapatilla\ deportiva.webp" },
    { nombre: "zapatillas urbanas", precio: 45000, codigo: 2, class: "zptllU", img: "../img/zapatilla\ urbana.webp" },
    { nombre: "sandalias", precio: 50000, codigo: 3, class: "sandalias", img: "../img/sandalia.webp" },
    { nombre: "zapatos de vestir", precio: 80000, codigo: 4, class: "zptDv", img: "../img/zapatos\ dv.webp" },
    { nombre: "chanclas", precio: 12000, codigo: 5, class: "chanclas", img: "../img/chanclas.jfif" }
];

const contenedorProductos = document.querySelector(".contenedorProductos");



function cargarProductos() {
    productos.forEach((producto) => {

        const li = document.createElement(`li`);
        li.classList.add("tarjeta");
        li.innerHTML = `
        <div class="img">
            <button type="button" class="${producto.class}"></button>
        </div>
        <div class="info">
            <h4>${producto.nombre}</h4>
            <p>$${producto.precio}</p>
            <button class="boton" id="${producto.codigo}">AGREGAR</button>
        </div>
        `;

        contenedorProductos.append(li);
    })
}

cargarProductos();