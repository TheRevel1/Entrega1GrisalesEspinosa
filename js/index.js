let videojuegosContenedor = document.getElementById("contenedor-videojuegos")
let productosCarrito = []
let videojuegos = []

async function traerVideojuegos() {
    try {
        const respuesta = await fetch("./videojuegos.json")
        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el catálogo de videojuegos")
        }
        videojuegos = await respuesta.json()
        mostrarVideojuegos(videojuegos)
    } catch (error) {
        console.error(error)
    }
}
function mostrarVideojuegos(videojuegosCatalogo) {
    
    videojuegosCatalogo.forEach(videojuego => {
        const tarjeta = document.createElement("div")
        tarjeta.classList.add("tarjeta")
        tarjeta.innerHTML = `
            <h2>${videojuego.nombre}</h2>
            <img class="img-videojuego" src=${videojuego.img} alt=${videojuego.nombre}>
            <p>${videojuego.sinopsis}</p>
            <p>${videojuego.precio}</p>
            <button class="agregarProducto" id=${videojuego.id}>Agregar al carro</button>
        `
        videojuegosContenedor.appendChild(tarjeta)
    })

    agregarBotonAlCarrito()
}

function agregarBotonAlCarrito() {
    const agregarBoton = document.querySelectorAll(".agregarProducto")

    agregarBoton.forEach(boton => {
        boton.onclick = (e) => {
            const videojuegoId = e.currentTarget.id

            const productoSeleccionado = videojuegos.find(videojuego => videojuego.id == videojuegoId)

            if (productoSeleccionado) {
                productosCarrito.push(productoSeleccionado)
                console.log(productosCarrito)

                localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito))

                Toastify({
                    text: `${productoSeleccionado.nombre} agregado al carrito`,
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast()

                e.currentTarget.disabled = true

            } else {
                console.error("Producto no encontrado")
            }
        }
    })
}

traerVideojuegos()