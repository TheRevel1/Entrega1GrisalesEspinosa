let carrito = localStorage.getItem("productosCarrito")
let contenedorCarrito = document.getElementById("contenedor-videojuegos")

carrito = JSON.parse(carrito)

function traerCarrito(videojuegosCarrito) {
    contenedorCarrito.innerHTML = ""

    if (videojuegosCarrito.length === 0) {
        const mensajeVacio = document.createElement("p")
        mensajeVacio.textContent = "El carro de compras está vacío."
        
        contenedorCarrito.appendChild(mensajeVacio)

    } else {
        let totalPrecio = 0
        videojuegosCarrito.forEach(videojuego => {
            const tarjeta = document.createElement("tarjeta")
            tarjeta.classList.add("tarjeta")
            tarjeta.innerHTML =
                            `<h4>${videojuego.nombre}</h4>
                            <p>${videojuego.precio}</p>
                            <button class = "eliminarProducto" id=${videojuego.id}>Remover</button>`

            contenedorCarrito.appendChild(tarjeta)
            totalPrecio += parseFloat(videojuego.precio)
        })

        const totalPrecioElemento = document.createElement("p")
        totalPrecioElemento.classList.add("total-precio")
        totalPrecioElemento.textContent = `Total: $${totalPrecio.toFixed(2)}`
        contenedorCarrito.appendChild(totalPrecioElemento)

        const botonContinuarCompra = document.createElement("button")
        botonContinuarCompra.textContent = "Continuar con la compra"
        botonContinuarCompra.classList.add("continuarCompra")

        botonContinuarCompra.onclick = (e) => {
            const alertaGracias = document.createElement("p")
            alertaGracias.textContent = "Gracias por tu compra!"
            contenedorCarrito.appendChild(alertaGracias)
            e.currentTarget.disabled = true
            }

        const contenedorBotonVaciar = document.createElement("div")
        contenedorBotonVaciar.classList.add("contenedor-boton-vaciar")
        const botonVaciar = document.createElement("button")

        botonVaciar.textContent = "Vaciar carro de compras"
        botonVaciar.classList.add("vaciarProducto")

        botonVaciar.onclick = () => {
            videojuegosCarrito.length = 0
            localStorage.setItem("productosCarrito", JSON.stringify(videojuegosCarrito))

            traerCarrito(videojuegosCarrito)
        }

        contenedorCarrito.appendChild(botonContinuarCompra)

        contenedorCarrito.appendChild(botonVaciar)
        

        agregarBotonEliminar()
    }
}

traerCarrito(carrito)

function eliminarProductoDelCarrito(idProducto) {
    carrito = carrito.filter(producto => producto.id != idProducto)
    console.log("Producto eliminado:", carrito)

    localStorage.setItem("productosCarrito", JSON.stringify(carrito))

    traerCarrito(carrito)
}

function agregarBotonEliminar() {
    const eliminarBoton = document.querySelectorAll(".eliminarProducto")
    eliminarBoton.forEach(boton => {
        boton.onclick = (e) => {
            const productoId = e.currentTarget.id
            eliminarProductoDelCarrito(productoId)
        }
    })
}