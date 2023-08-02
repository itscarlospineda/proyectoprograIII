const express = require('express');
const router = express.Router();
const conexion = require('../database');

router.get('/', (req, res) => {
    res.render('../Views/home.ejs');
})


//Actualizar todo lo que está debajo y dejar fijo el código anterior en TODAS las rutas
router.get('/programas', (req, res) => {

    conexion.query('SELECT * FROM programas', (error, results) => {
        if (error) {
            throw error;
        } else {
            //res.render('formapagoViews/formapago.ejs', {results:results});      
            res.render('../Views/programasViews/programas.ejs', { results: results });
        }
    })
})

router.get('/crearprogramas', (req, res) => {
    res.render('../Views/programasViews/crearprogramas.ejs');
})


router.get('/deleteprogramas/:idprograma', (req, res) => {
    const idprograma = req.params.idprograma;
    conexion.query('DELETE FROM programas WHERE idprograma= ?', [idprograma], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/programas');
        }
    })
});

router.get('/editarprogramas/:idprograma', (req, res) => {
    const idprograma = req.params.idprograma;
    conexion.query('SELECT * FROM programas WHERE idprograma=?', [idprograma], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/programasViews/editarprogramas.ejs', { programas: results[0] });
        }
    });
});


const programas = require('../Controllers/programasController');
router.post('/guardarprogramas', programas.guardarprogramas);
router.post('/actualizarprogramas', programas.actualizarprogramas);

module.exports = router;