
const listaNuevo = "Escoge un producto para conocer el precio \n" +
    "a - Zapatillas Deportivas \n" +
    "b - Zapatillas Urbanas \n" +
    "a - Sandalias \n" +
    "b - Zapatos de vestir \n" +
    "e - chanclas \n"


function eleccionProducto() {
    let eleccion = prompt(listaNuevo) // .trim().toLowerCase() (si pongo el trim y lowercase, no me cuenta el null como opcion no valida)
    if (eleccion !== "a" && eleccion !== "b" && eleccion !== "c" && eleccion !== "d" && eleccion !== "e" || eleccion === null) {
        alert("no es una opcion valida")
    } else {
        switch (eleccion) {
            case "a":
                mensajeValor = "Zapatilla Dep. $45.000"
                break
            case "b":
                mensajeValor = "Zapatilla Urbana $34000"
                break
            case "c":
                mensajeValor = "Sandalias $30.000"
                break
            case "d":
                mensajeValor = "Zapatos de vestir $69.900"
                break
            case "e":
                mensajeValor = "Chanclas $15.000"
                break
            default:
                console.error("No esta duncionando correctamente, algo salio mal")
        }
        alert(mensajeValor)
    }
}

let consulta = true

function consultarPrecio() {
    while (consulta) {
        eleccionProducto()
        consulta = confirm("Quieres consultar el precio de algun producto?")
    }
}

let signup = true
let login = true

while (signup === true) {
    let usuario1 = prompt("Ingrese tu nombre de usuario").trim();
    let contraseñaUsuario1 = prompt("Crea una contraseña").trim();
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


