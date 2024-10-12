
function bienvenida() {
    alert("¡Bienvenido a Vicious Library, tienda virtual de videojuegos!")
    alert("A continuación te dejaremos una lista de videojuegos:")
}

function opciones() {
    let opcionInicial = ""
    for (const videojuego of videojuegos) {
        opcionInicial = opcionInicial + videojuego.nombre + "\n"
    }
    alert(opcionInicial)
}

function interes() {
    let menu1 = parseInt(prompt("¿Te ha interesado alguno? (1 para SI / 2 para NO)"))

    switch (menu1) {
        case 1: eleccion()
            break
        case 2:
            alert("No estás interesado en ningún videojuego. Hasta luego.")
            console.log("No estás interesado en ningún videojuego. Hasta luego.")
            break
        default:
            alert("No has elegido correctamente. Hasta luego.")
            console.log("No has elegido correctamente. Hasta luego.")
            break
    }
}

function eleccion() {
    let opcionEnumerada = ""
    for (let i = 1; i <= videojuegos.length; i++) {
        opcionEnumerada = opcionEnumerada + i + ". " + videojuegos[i - 1].nombre + "\n"
    }

    let menu2 = parseInt(prompt("¿Cual videojuego te interesa? (Elige un numero para indicar)" + "\n" + opcionEnumerada + "\n"))

    eleccionComprador(menu2)
}

function eleccionComprador(menu2) {
    alert(
        "Nombre: "+videojuegos[menu2 - 1].nombre + "\n" +
        "Sinopsis: "+videojuegos[menu2 - 1].sinopsis + "\n" +
        "Generos: "+videojuegos[menu2 - 1].generos + "\n" +
        "Precio: "+videojuegos[menu2 - 1].precio + "\n"
    )

    confirmarCompra(menu2)
}

function confirmarCompra(numero) {
    let menu3 = parseInt(prompt("¿Estás seguro de comprar "+videojuegos[numero - 1].nombre + "?" + "\n" + "(1 para SI / 2 para NO)"))

    switch (menu3) {
        case 1: compra()
            break
        case 2:
            alert("Aún no estás seguro de tu compra.")
            bienvenida()
            opciones()
            interes()            
            break
        default:
            alert("No has elegido correctamente. Hasta luego.")
            console.log("No has elegido correctamente. Hasta luego.")
            break
    }
}

function compra () {
    prompt("Ingresa tu número de tarjeta de crédito"),
    prompt("Ingresa tu nombre como aparece en tu tarjeta de crédito"),
    prompt("Ingresa la fecha de expiración"),
    prompt("Ingresa el código de seguridad"),
    alert("¡GRACIAS POR TU COMPRA!")
    let menu4 = parseInt(prompt("¿Deseas hacer otra compra? (1 para SI / 2 para NO)"))

    switch (menu4) {
        case 1: eleccion()
            break
        case 2:
            alert("No estás interesado en otro videojuego. Hasta luego.")
            console.log("No estás interesado en otro videojuego. Hasta luego.")
            break
        default:
            alert("No has elegido correctamente. Hasta luego.")
            console.log("No has elegido correctamente. Hasta luego.")
            break
    }
}

const opcion1 = {
    nombre: "Silent Hill 2",
    sinopsis: "«Me llamo... Maria», dice la mujer, sonriendo. Su rostro, su voz... Es igual que ella.",
    generos: "Terror",
    precio: 69.99 + " USD",
}

const opcion2 = {
    nombre: "DRAGON BALL: Sparking! ZERO",
    sinopsis: "DRAGON BALL: Sparking! ZERO lleva a un nuevo nivel el legendario estilo de juego de la serie Budokai Tenkaichi. ¡Domina el poder destructivo de los luchadores más fuertes que han aparecido en DRAGON BALL!",
    generos: "Acción",
    precio: 65.99 + " USD",
}

const opcion3 = {
    nombre: "Elden Ring",
    sinopsis: "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.",
    generos: "Tipo Dark Souls",
    precio: 59.99 + " USD",
}

const opcion4 = {
    nombre: "Project Zomboid",
    sinopsis: "«un RPG survival horror tipo sandbox a cargo de The Indie Stone para PC en el que debemos sobrevivir a un apocalipsis zombi, solos o en modo cooperativo. Busca recursos, construye armas y equipamiento, lucha por tu vida y mucho más en un mundo infestado de zombis.",
    generos: "Zombies",
    precio: 19.99 + " USD",
}

const opcion5 = {
    nombre: "Sea of Thieves: 2024 Edition",
    sinopsis: "Sea of Thieves es un exitoso juego de aventuras piratas que ofrece la experiencia pirata por excelencia de saquear tesoros perdidos, batallas intensas, vencer monstruos marinos y más. Sumérgete en esta edición revisada del juego, que incluye acceso a medios digitales de bonificación.",
    generos: "Multijugador",
    precio: 39.99 + " USD"
}

const opcion6 = {
    nombre: "ARMORED CORE VI FIRES OF RUBICON",
    sinopsis: "Un nuevo juego de acción inspirado en el concepto de la serie ARMORED CORE que aprovecha el conocimiento adquirido durante el desarrollo de los últimos juegos de acción de FromSoftware.",
    generos: "Mechas",
    precio: 45.99 + " USD",
}

const opcion7 = {
    nombre: "Red Dead Redemption 2",
    sinopsis: "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era. También incluye acceso al mundo multijugador compartido de Red Dead Online.",
    generos: "Mundo abierto",
    precio: 69.99 + " USD",
}

const videojuegos = [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6, opcion7]

bienvenida()
opciones()
interes()




