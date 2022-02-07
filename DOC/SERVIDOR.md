# Crear un servidor con EXPRESS y clases

## Servir Express

```
const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares (son funciones que añadirán características al Web Server). Ver el método.
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    };

    middlewares(){
        // Directorio público al cual accederá por defecto. Deja de tener validez el metodo routes como punto inicial de la app
        this.app.use( express.static('public') );
    };
    routes(){
        this.app.get('/api', ( req, res ) => {
            res.send('Hello World');
        });          
    };
    listen(){
        this.app.listen( this.port, () => {
            console.log(`Running in https://localhost:${ this.port }`);
        });
    };
};

module.exports = Server;
```

## Instanciar la clase

```
// Importaciones
require('dotenv').config();
const Server = require('./models/server');

// Instancia de la clase Server
const server = new Server

// Llamado al listener
server.listen();
```