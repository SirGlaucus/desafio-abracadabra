const express = require("express")

const app = express()

// Crear un servidor con Express en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000")
})

//  Definir la carpeta “assets” como carpeta pública del servidor
app.use(express.static("assets"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios.

const usuarios = {
    usuarios: ["Juan", "Joselyn", "Astrid", "Maria", "Ignacia", "Javier", "Brain"]
}
app.get("/abracadabra/usuarios", (req, res) => {
    res.send(usuarios)
})

// Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el
// usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en el servidor

app.use("/abracadabra/juego/:usuario", (req, res, next) => {

    const nombre = req.params.usuario

    const usuariosArray = usuarios.usuarios
    const usuarioFiltrado = usuariosArray.find((element) => element === nombre)

    if (usuarioFiltrado) {
        next()
    } else {
        res.redirect('/who.jpeg')
    }
})
// En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen “who.jpeg”.

app.get("/abracadabra/juego/:usuario", (req, res) => {
    const nombre = req.params.usuario
    res.send(nombre)
})

// Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria.

app.get("/abracadabra/conejo/:n", (req, res) => {
    const numeroElegido = parseInt(req.params.n)
    const numeroAlAzar = Math.floor((Math.random() * 4) + 1)
    console.log(numeroAlAzar, numeroElegido)
    if (numeroAlAzar === numeroElegido) {
        res.redirect('/conejito.jpg')
    } else {
        res.redirect('/voldemort.jpg')
    }
})

// Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al consultar una ruta que no esté definida en el servidor.
app.get("*", (req, res) => {
    // Paso 2
    res.send("<center><h1>Esta ruta no existe...</h1> </center>");
});
