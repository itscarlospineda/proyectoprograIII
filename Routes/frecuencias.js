const express = require('express');
const router = express.Router();
const conexion = require('../database');

router.get('/', (req, res) => {
    res.render('../Views/home.ejs');
})


//Actualizar todo lo que está debajo y dejar fijo el código anterior en TODAS las rutas
router.get('/frecuencias', (req, res) => {

    conexion.query('SELECT * FROM frecuencias', (error, results) => {
        if (error) {
            throw error;
        } else {
            //res.render('formapagoViews/formapago.ejs', {results:results});      
            res.render('../Views/frecuenciasViews/frecuencias.ejs', { results: results });
        }
    })
})

router.get('/crearfrecuencias', (req, res) => {
    res.render('../Views/frecuenciasViews/crearfrecuencias.ejs');
})


router.get('/deletecursos/:idcurso', (req, res) => {
    const idfrecuencia = req.params.idfrecuencia;
    conexion.query('DELETE FROM frecuencias WHERE idfrecuencia= ?', [idfrecuencia], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/frecuencias');
        }
    })
});

router.get('/editarfrecuencias/:idfrecuencia', (req, res) => {
    const idfrecuencia = req.params.idfrecuencia;
    conexion.query('SELECT * FROM cursos WHERE idfrecuencia=?', [idfrecuencia], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/frecuenciaViews/editarfrecuencia.ejs', { frecuencias: results[0] });
        }
    });
});


const correos = require('../Controllers/frecuenciasController');
router.post('/guardarfrecuencias', correos.guardarfrecuencias);
router.post('/actualizarcorreos', correos.actualizafrecuencias);

module.exports = router;
