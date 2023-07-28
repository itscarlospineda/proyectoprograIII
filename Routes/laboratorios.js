const express = require('express');
const router = express.Router();
const conexion = require('../database');

router.get('/', (req, res) => {
    res.render('../Views/home.ejs');
})


//Actualizar todo lo que está debajo y dejar fijo el código anterior en TODAS las rutas
router.get('/frecuencias', (req, res) => {

    conexion.query('SELECT * FROM laboratorios', (error, results) => {
        if (error) {
            throw error;
        } else {
            //res.render('formapagoViews/formapago.ejs', {results:results});      
            res.render('../Views/laboratoriosViews/laboratorios.ejs', { results: results });
        }
    })
})

router.get('/crearlaboratorios', (req, res) => {
    res.render('../Views/laboratoriosViews/crearlaboratorios.ejs');
})


router.get('/deletelaboratorios/:idlaboratorio', (req, res) => {
    const idlaboratorio = req.params.idlaboratorio;
    conexion.query('DELETE FROM laboratorios WHERE idlaboratorio= ?', [idlaboratorios], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/laboratorios');
        }
    })
});

router.get('/editarlaboratorios/:idlaboratorio', (req, res) => {
    const idlaboratorio = req.params.idlaboratorio;
    conexion.query('SELECT * FROM cursos WHERE idlaboratorio=?', [idlaboratorio], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/laboratorioViews/editarlaboratorios.ejs', { laboratorios: results[0] });
        }
    });
});


const correos = require('../Controllers/laboratoriosController');
router.post('/guardarlaboratorios', laboratorios.guardarlaboratorios);
router.post('/actualizarlaboratorios', laboratorios.actualizalaboratorios);

module.exports = router;
