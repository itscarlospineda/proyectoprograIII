//Declaración de dependencias
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

app.set('view engine', 'ejs');
app.use(express.static('public'));


//Habilitación de Puerto
const port = process.env.port || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Llamada de Recursos
app.use('/Resources/Templates', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css/')));
app.use('/Images', express.static('Resources/Images/'));


//Importación de Rutas de Home por medio de las tablas
app.use('/', require('./Routes/correos'));
app.use('/', require('./Routes/cursos'));
app.use('/', require('./Routes/frecuencias'));
app.use('/', require('./Routes/perfiles'));
app.use('/', require('./Routes/programas'));
app.use('/', require('./Routes/telefonos'));
/*app.use('/', require('./Routes/profesores'));
app.use('/', require('./Routes/horarios'));
app.use('/', require('./Routes/laboratorios'));*/

//Rutas por cada tabla
app.use('/correos', require('./Routes/correos'));
app.use('/cursos', require('./Routes/cursos'));
app.use('/frecuencias', require('./Routes/frecuencias'));
app.use('/perfiles', require('./Routes/perfiles'));
app.use('/programas', require('./Routes/programas'));
app.use('/telefonos', require('./Routes/telefonos'));
/*app.use('/profesores', require('./Routes/profesores'));
app.use('/horarios', require('./Routes/horarios'));
app.use('/laboratorios', require('./Routes/laboratorios'));*/



//Inicializando el Servidor
app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:' + port);
});





//const correosRoutes = require('./Routes/correos');
//const cursosRoutes = require('./Routes/cursos');
//const frecuenciasRoutes = require('./Routes/frecuencias');
//const horariosRoutes = require('./Routes/horarios');
//const laboratoriosRoutes = require('./Routes/laboratorios');
//const perfilesRoutes = require('./Routes/perfiles');
//const profesoresRoutes = require('./Routes/profesores');
//const programasRoutes = require('./Routes/programas');
//const telefonosRoutes = require('./Routes/telefonos');*/