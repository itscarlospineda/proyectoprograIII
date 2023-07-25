const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

//importar rutas
const correosRoutes = require('./Routes/correos');
const cursosRoutes = require('./Routes/cursos');
const frecuenciasRoutes = require('./Routes/frecuencias');
const horariosRoutes = require('./Routes/horarios');
const laboratoriosRoutes = require('./Routes/laboratorios');
const perfilesRoutes = require('./Routes/perfiles');
const profesoresRoutes = require('./Routes/profesores');
const programasRoutes = require('./Routes/programas');
const telefonosRoutes = require('./Routes/telefonos');


//app.set('port', process.env.PORT || 3001);
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
var Connection = require('tedious').Connection;
var config = {
    server: 'Mysql@localhost:3306',
    authentication: {
        type: 'default',
        options: {
            userName: 'root',
            password: '//'
        }
    },
    options: {
        encrypt: true,
        database: 'programacion'
    }
};
var connection = new Connection(config);
connection.on('connect', function (err) {
    console.log("Ingreso");
});
connection.connect();

app.get('/', function (req, res) {
    res.render('programas');
});


//inicializando el server
app.listen(app.get('port'), () => {
    console.log("frecuencias 3000");
});