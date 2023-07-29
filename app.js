//Declaración de dependencias
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(session({
	secret : 'webslesson',
	resave : true,
	saveUninitialized : true
  }));

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
app.use('/', require('./router'));


//Inicializando el Servidor
app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:' + port);
});