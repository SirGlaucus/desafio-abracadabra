# Desafío - Abracadabra

En este desafío, deberás desarrollar un servidor con Express que sirva un sitio web estático con temática de magia, donde se presenten 4 sombreros y al hacer click en uno de estos encontrar el conejo oculto.

IMPORTANTE: Para iniciar el proyecto abrir la terminal en la carpeta donde se cuentra el archivo serverExpress.js y ejectuvar el comando "npm start" (Teniendo nodemon instalado)

### Habilidades a evaluar

 - ¿Qué es Express?
 - Express vs Node puro
 - Creación de rutas
 - Objetos Request y Response
 - Middlewares
 - Devolución de sitios web estáticos

### Requerimientos

- Crear un servidor con Express en el puerto 3000.
- Definir la carpeta “assets” como carpeta pública del servidor
- Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios.
- Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en el servidor.
- Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria.
- Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al consultar una ruta que no esté definida en el servidor.