/*
let signup = true
let login = true

while (signup === true) {
    let usuario1 = prompt("Ingrese tu nombre de usuario").trim()
    let contraseñaUsuario1 = prompt("Crea una contraseña").trim()
    if (usuario1.trim() === "" || contraseñaUsuario1.trim() === "") {
        alert("Create una cuenta para poder navegar")
    } else {
        alert("Ahora logeate para poder navegar en la web")
        signup = false
        do {
            let usuario = prompt("Ingrese un nombre de usuario existente").trim();
            let contraseña = prompt("ingrese la contraseña")
            if (usuario === usuario1 && contraseña === contraseñaUsuario1) {
                alert("Bienvenido, " + usuario1.toUpperCase())
                login = false
            } else {
                alert("Nombre de usuario o contraseña incorrecta")
                login = true
            }
        } while (login === true);
    }
}
*/

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



function consultarProductos() {
    let eleccionU = prompt(mensajeElegir).trim().toLowerCase();
    console.log(productos.filter((producto) => producto.nombre === eleccionU))
    if (eleccionU.includes("zapatillas")) {
        console.log(productos.filter((producto) => producto.nombre.includes("zapatillas")))
    }
}

let terminoCompra = false
const carrito = []

function comprar() {
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
    console.log(carrito);
    const descuento = calcularOff(carrito);
    console.log(descuento);
}

function calcularOff(carrito) {
    const total = carrito.reduce((ac, producto) => ac + producto.precio, 0);
    if (total > 70000) {
        const descuentoTotal = total * 0.5;
        return alert("Al haber realizado una compra superior a $70.000 te hicimos un 50% de descuento! El total de tu compra es de: " + "$" + descuentoTotal);
    } else {
        return total
    }

}




