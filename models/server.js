const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.middlewares();
        this.app.use( express.json() );
        this.routes();
    };

    middlewares(){
        this.app.use( cors() )
        this.app.use( express.static('public') );
    };
    routes(){
        this.app.use( this.usuariosPath, require('../routes/usuarios.routes') );
    };
    listen(){
        this.app.listen( this.port, () => {
            console.log(`Running in http://localhost:${ this.port }`);
        });
    };

};

module.exports = Server;