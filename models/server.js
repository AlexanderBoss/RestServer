const express = require('express')
const port = process.env.PORT || 3000;
const cors = require('cors')


//levantar puerto con clases
class Server{

    constructor(){
        this.app = express()
        this.usuariosPath = '/api/user';
    //Middlewares : Una funcion que siempre se ehjecuta cuando levantamos un servidor
        this.middlewares()
    //Rutas de mi aplicacion
        this.routes()
    }

    middlewares(){
        
        //CORS
        this.app.use(cors())

         // Lectura y parseo del body : Cualkier informacion lo va serializar en un JSON 
         // de PUT SET POST 
         this.app.use( express.json() );


        //Directorio publico
        this.app.use( express.static('public') )
    }



    routes(){
                  //routes           //directorio
    this.app.use( this.usuariosPath , require('../routes/usuarios') )

    }

    listen(){
        this.app.listen(port,() =>{
            console.log(`Conectado al puerto ${port}`)
        })
    }




}



module.exports = Server;