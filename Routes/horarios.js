const express = require('express');
const router = express.Router();
const conexion = require('../database');

router.get('/', (req, res) => {
    res.render('../Views/home.ejs');
})


//Actualizar todo lo que está debajo y dejar fijo el código anterior en TODAS las rutas
router.get('/horarios', (req, res) => {

    conexion.query('SELECT * FROM horarios', (error, results) => {
        if (error) {
            throw error;
        } else {
            //res.render('formapagoViews/formapago.ejs', {results:results});      
            res.render('../Views/horariosViews/horarios.ejs', { results: results });
        }
    })
})

router.get('/crearhorarios', (req, res) => {
    res.render('../Views/horariosViews/crearhorarios.ejs');
})


router.get('/deletehorarios/:idhorario', (req, res) => {
    const idcorreo = req.params.idcorreo;
    conexion.query('DELETE FROM horarios WHERE idhorario= ?', [idhorario], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/horarios');
        }
    })
});

router.get('/editarhorarios/:idhorario', (req, res) => {
    const idcorreo = req.params.idcorreo;
    conexion.query('SELECT * FROM horarios WHERE idhorario=?', [idhorario], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/horariosViews/editarhorarios.ejs', {horarios:results[0]});
        }
    });
});


const horarios = require('../Controllers/horariosController');
router.post('/guardarhorarios', horarios.guardarhorarios);
router.post('/actualizarhorarios', horarios.actualizarhorarios);

module.exports = router;
