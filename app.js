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



//Importación de Rutas de cada Tabla
const correosRoutes = require('./Routes/correos');
const cursosRoutes = require('./Routes/cursos');
const frecuenciasRoutes = require('./Routes/frecuencias');
//const horariosRoutes = require('./Routes/horarios');
//const laboratoriosRoutes = require('./Routes/laboratorios');
//const perfilesRoutes = require('./Routes/perfiles');
//const profesoresRoutes = require('./Routes/profesores');
//const programasRoutes = require('./Routes/programas');
//const telefonosRoutes = require('./Routes/telefonos');*/


//Inicializando el Servidor
app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:' + port);
});