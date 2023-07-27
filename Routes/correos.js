const express = require('express');
const router = express.Router();
const conexion = require('../database');

router.get('/', (req, res) => {
    res.render('../Views/home.ejs');
})


//Actualizar todo lo que está debajo y dejar fijo el código anterior en TODAS las rutas
router.get('/correos', (req, res) => {

    conexion.query('SELECT * FROM correos', (error, results) => {
        if (error) {
            throw error;
        } else {
            //res.render('formapagoViews/formapago.ejs', {results:results});      
            res.render('../Views/correosViews/correos.ejs', { results: results });
        }
    })
})

router.get('/crearcorreos', (req, res) => {
    res.render('../Views/correosViews/crearcorreos.ejs');
})


router.get('/deletecorreos/:idcorreo', (req, res) => {
    const idcorreo = req.params.idcorreo;
    conexion.query('DELETE FROM correos WHERE idcorreo= ?', [idcorreo], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/correos');
        }
    })
});

router.get('/editarcorreos/:idcorreo', (req, res) => {
    const idcorreo = req.params.idcorreo;
    conexion.query('SELECT * FROM correos WHERE idcorreo=?', [idcorreo], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/correosViews/editarcorreos.ejs', {correos:results[0]});
        }
    });
});


const correos = require('../Controllers/correosController');
router.post('/guardarcorreos', correos.guardarcorreos);
router.post('/actualizarcorreos', correos.actualizarcorreos);

module.exports = router;
