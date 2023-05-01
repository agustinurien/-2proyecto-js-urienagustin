const botonComprar = document.querySelector(".bComprar");
const botonVaciar = document.querySelector(".bVaciar");
const seccionC = document.querySelector(".seccionCompra");
const carritoHtml = document.querySelector(".fondoCarrito");

const carrito = []

const botonAgregar = document.querySelectorAll(".boton")

botonAgregar.forEach(boton => {
    boton.addEventListener("click", agregarCarrito);
});

function agregarCarrito(e) {
    const codigo = e.target.id
    const productoEncontrado = productos.find((producto) => producto.codigo == codigo)
    carrito.push(productoEncontrado);

    const productoJS = JSON.stringify(carrito);
    localStorage.setItem("carrito", productoJS);
}




function mostrarCarrito() {
    carritoHtml.innerHTML = "";
    let productoLS = JSON.parse(localStorage.getItem("carrito"));

    if (!localStorage.getItem("carrito")) {
        seccionC.innerHTML = "<p class='mensajeVacio'>Su carrito está vacío...</p>";
        const div = document.createElement(`div`);
        div.innerHTML = "";
        seccionC.append(div);

    } else {
        productoLS.forEach((producto) => {
            const tarjeta = document.createElement("div");
            tarjeta.innerHTML = `
                <div class="tarjetaCarrito">
                    <ul class="datosTarjeta">
                        <div class="imagen">
                            <img src="${producto.img}">
                        </div>
                        <li class="nombre">$${producto.nombre}</li>
                        <li>$${producto.precio}</li>
                        <li>
                            <button class="eliminar" id="${producto.codigo}" >E</button>
                        </li>
                    </ul>
                </div>
            `;
            carritoHtml.append(tarjeta);

            const botonEliminar = tarjeta.querySelector('.eliminar');
            botonEliminar.addEventListener("click", eliminarProducto);
        });
    }

    subTotal();
}

mostrarCarrito();

function eliminarProducto(e) {
    let productoLS = JSON.parse(localStorage.getItem("carrito"));

    const codigo = e.target.id;
    const productoIndex = productoLS.findIndex((producto) => producto.codigo == codigo);
    if (productoIndex !== -1) {
        productoLS.splice(productoIndex, 1);
    }
    localStorage.setItem("carrito", JSON.stringify(productoLS));

    mostrarCarrito();
}

botonComprar.addEventListener("click", () => {
    localStorage.clear();
    carritoHtml.innerHTML = "";

    if (!localStorage.getItem("carrito")) {
        seccionC.innerHTML = "<p class='mensajeVacio'>Su carrito está vacío...</p>";

        const div = document.createElement(`div`);
        div.innerHTML = "";
        seccionC.append(div);
        swal("¡Gracias por su compra!", "", "success");

        compro();

    } else {
        noCompro();
    }
});


botonVaciar.addEventListener("click", () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            carritoHtml.innerHTML = "";
            if (!localStorage.getItem("carrito")) {
                seccionC.innerHTML = "<p class='mensajeVacio'>Su carrito está vacío...</p>";

                const div = document.createElement(`div`);
                div.innerHTML = "";
                seccionC.append(div);
                vaciarCarrito();
            }
            Swal.fire(
                'Deleted!',
                'Se vacio el carrito.',
                'success'
            );
        } else {
            hayProductos();
        }
    });
});


/* vaciar */
function interval() {
    console.log("resultado en:")
    let contador = 4
    const intervalo = setInterval(() => {
        contador--;
        console.log(contador);
        if (contador === 0) {
            clearInterval(intervalo);
        }
    }, 1000)
}


const eventoFuturov = (res) => {
    interval();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            res === true ? resolve("El usuario vacio el carrito") : reject("El usuario cancelo vaciar el carrito");
        }, 4000);
    })
}


function hayProductos() {
    const valor = false
    eventoFuturov(valor)
        .then((respuesta) => {
            console.log(respuesta)
        })
        .catch((respuesta) => {
            console.log(respuesta)
        })
        .finally(() => {
            console.log("termino la decision del usuario")
        })
}

function vaciarCarrito() {
    const valor = true
    eventoFuturov(valor)
        .then((respuesta) => {
            console.log(respuesta)
        })
        .finally(() => {
            console.log("termino la decision del usuario")
        })
}

/* comprar */

const eventoFuturoc = (res) => {
    interval();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            res === true ? resolve("El usuario compro") : reject("El usuario no compro");
        }, 4000);
    })
}


function noCompro() {
    const valor = false
    eventoFuturoc(valor)
        .then((respuesta) => {
            console.log(respuesta)
        })
        .catch((respuesta) => {
            console.log(respuesta)
        })
        .finally(() => {
            console.log("termino la decision del usuario")
        })
}

function compro() {
    const valor = true
    eventoFuturoc(valor)
        .then((respuesta) => {
            console.log(respuesta)
        })
        .finally(() => {
            console.log("termino la decision del usuario")
        })
}

function subTotal() {
    let productoLS = JSON.parse(localStorage.getItem("carrito"));

    let precios = productoLS.map(producto => producto.precio);
    let total = precios.reduce((acumulado, precio) => acumulado + precio, 0);
    
    document.querySelector(".total").textContent = `Total: $${total}`;
}

