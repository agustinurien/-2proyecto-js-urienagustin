// NO SE PORQUE NO ME FUNCIONA EL DOM - AYUDA//

let signup = true
let login = true

const usuarios = []

while (signup === true) {
    let usuario1 = prompt("Ingrese tu nombre de usuario").trim();
    let contraseñaUsuario1 = prompt("Crea una contraseña").trim();
    let edadUsuario1 = parseInt(prompt("Ingrese su Edad"));
    usuarios.push({ nombre: usuario1, edad: edadUsuario1, contraseña: contraseñaUsuario1 }); // la idea es poder tener varios usuarios en la pag y ver en el localstorage el array con nombres y contraseñas de los usuarios //

    if (usuario1.trim() === "" || contraseñaUsuario1.trim() === "") {
        alert("Create una cuenta para poder navegar");
    } else {
        alert("Ahora logeate para poder navegar en la web");
        signup = false
        do {
            let usuario = prompt("Ingrese un nombre de usuario existente").trim();
            let contraseña = prompt("ingrese la contraseña");
            if (usuario === usuario1 && contraseña === contraseñaUsuario1) {
                alert("Bienvenido, " + usuario1.toUpperCase());
                login = false
            } else {
                alert("Nombre de usuario o contraseña incorrecta");
                login = true
            }
        } while (login === true);
    }
}

const usuariosJSON = JSON.stringify(usuarios);
localStorage.setItem("Usuarios", usuariosJSON);

const usuariosLocalS = JSON.parse(localStorage.getItem("Usuarios"));
console.log(usuariosLocalS);


const productos = [
    { nombre: "zapatillas deportivas", precio: 30000, codigo: 1 },
    { nombre: "zapatillas urbanas", precio: 45000, codigo: 2 },
    { nombre: "sandalias", precio: 50000, codigo: 3 },
    { nombre: "zapatos de vestir", precio: 80000, codigo: 4 },
    { nombre: "chanclas", precio: 12000, codigo: 5 }
];


const mensajeElegir = "ESCOJA UN PRODUCTO \n" +
    "Zapatillas Deportivas \n" +
    "Zapatillas Urbanas \n" +
    "Sandalias \n" +
    "Zapatos de Vestir \n" +
    "Chanclas \n"



function consultarProductos() { // funcion para consultar productos //
    let eleccionU = prompt(mensajeElegir).trim().toLowerCase();
    console.log(productos.filter((producto) => producto.nombre === eleccionU))
    if (eleccionU.includes("zapatillas")) {
        console.log(productos.filter((producto) => producto.nombre.includes("zapatillas")))
    }
}

let terminoCompra = false
const carrito = []

function comprar() {  //si el usuario elige esta funcion, podra elegir que producto desea comprar y se crea un array simulando el carrito. ese carrito se guarda en local Storage. //
    let encontrarProducto = true
    do {
        let agregar = prompt(mensajeElegir).trim().toLowerCase();

        for (let i = 0; i < productos.length; i++) {
            if (agregar === productos[i].nombre) {
                carrito.push(productos[i]);
                encontrarProducto = confirm("Desea agregar otro producto?")
                break
            }
        }
        if (agregar === "" || agregar === null) {
            alert("no es un producto valido")
            encontrarProducto = confirm("Desea agregar un producto?")
        }
    } while (encontrarProducto === true) {
    }

    const total = calcularOff(carrito);
    localStorage.setItem("Ganancias", total);

    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("Carrito", carritoJSON);

    const carritoLocalS = JSON.parse(localStorage.getItem("Carrito"));
    console.log(carritoLocalS);
}

function calcularOff(carrito) { // si la suma de los productos del carrito es mayor a 70000, se hace un descuento //
    const total = carrito.reduce((ac, producto) => ac + producto.precio, 0);
    if (total > 70000) {
        const descuentoTotal = total * 0.5;
        return alert("Al haber realizado una compra superior a $70.000 te hicimos un 50% de descuento! El total de tu compra es de: " + "$" + descuentoTotal);
    } else {
        return total
    }

}



const botonMode = document.getElementById("botonDark");
const body = document.body

botonMode.addEventListener("click", cambiarFondo);

function cambiarFondo() {  // funcion que cambia a dark y light mode //
    body.classList.toggle("modoOscuro")
    if (body.classList.contains("modoOscuro")) {
        botonMode.innerText = "cambiar a Light mode";
    } else {
        botonMode.innerText = "cambiar a Dark mode";
    }
}

const secCarrito = document.getElementById("seccionCarrito");

for (i = 0; i < carrito.length; i++) { // crea una lista en el html con los productos del carrito y se ve en la pagina //
    const lista = document.createElement("ul");
    lista.innerHTML = `<li class = "item">${carrito.nombre[i]}</li>`
    secCarrito.append(lista);
}

