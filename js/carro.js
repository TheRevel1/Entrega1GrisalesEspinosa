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
            contenedorCarrito.innerHTML = ""

            const formularioPago = document.createElement("form")
            formularioPago.classList.add("formulario-pago")

            formularioPago.innerHTML = `
                <h3>Información de pago</h3>
                <label for="nombre">Nombres:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Nombres" required>
        
                <label for="apellido">Apellidos:</label>
                <input type="text" id="apellido" name="apellido" placeholder="Apellidos" required>
        
                <label for="numeroTarjeta">Número de Tarjeta:</label>
                <input type="number" id="numeroTarjeta" name="numeroTarjeta" maxlength="16" required>
        
                <label for="fechaExpiracion">Fecha de Caducidad (MM/AA):</label>
                <input type="text" id="fechaExpiracion" name="fechaExpiracion" placeholder="MM/AA" maxlength="5" required>
        
                <label for="cvc">CVC:</label>
                <input type="text" id="cvc" name="cvc" maxlength="3" required>

                <label for="pais">País:</label>
                <input type="text" id="pais" name="pais" required>
        
                <label for="direccion">Dirección:</label>
                <input type="text" id="direccion" name="direccion" required>        
        
                <label for="codigoPostal">Código Postal:</label>
                <input type="number" id="codigoPostal" name="codigoPostal" required>
        
                <button type="submit" class="finalizarCompra">Finalizar Compra</button>`

            formularioPago.onsubmit = (event) => {
                event.preventDefault()

                const datosPago = {
                    nombre: formularioPago.nombre.value,
                    apellido: formularioPago.apellido.value,
                    numeroTarjeta: formularioPago.numeroTarjeta.value,
                    fechaExpiracion: formularioPago.fechaExpiracion.value,
                    cvc: formularioPago.cvc.value,
                    direccion: formularioPago.direccion.value,
                    pais: formularioPago.pais.value,
                    codigoPostal: formularioPago.codigoPostal.value,
                }

                procesarPago(datosPago)

                function procesarPago(datos) {
                    enviarDatosPago(datos)
                }

                contenedorCarrito.innerHTML = "<p>¡Pago realizado con éxito! Gracias por tu compra.</p>"
            }

            contenedorCarrito.appendChild(formularioPago)

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

function enviarDatosPago(datos) {

    const url = "../videojuegos.json"

    fetch(url)

        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("No se pudo cargar el archivo .JSON local")
            }
            return respuesta.json()
        })

        .then(contenido => {
            console.log("Contenido del .JSON local:", contenido)
            console.log("Datos enviados simulados:", datos)
        })

        .catch(error => {
            console.error("Error al leer el archivo .JSON:", error)
        })
}