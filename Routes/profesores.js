const express = require('express');
const router = express.Router();
const conexion = require('../database');

router.get('/', (req, res) => {
    res.render('../Views/home.ejs');
})


//Actualizar todo lo que está debajo y dejar fijo el código anterior en TODAS las rutas
router.get('/profesores', (req, res) => {

    conexion.query('SELECT * FROM profesores', (error, results) => {
        if (error) {
            throw error;
        } else {
            //res.render('formapagoViews/formapago.ejs', {results:results});      
            res.render('../Views/profesoresViews/profesores.ejs', { results: results });
        }
    })
})

router.get('/crearprofesores', (req, res) => {
    res.render('../Views/profesoresViews/crearprofesores.ejs');
})


router.get('/deleteprofesores/:idprofesor', (req, res) => {
    const idprofesor = req.params.idprofesor;
    conexion.query('DELETE FROM profesores WHERE idprofesor= ?', [idprofesor], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/profesores');
        }
    })
});

router.get('/editarprofesores/:idprofesor', (req, res) => {
    const idprofesor = req.params.idprofesor;
    conexion.query('SELECT * FROM profesores WHERE idprofesor=?', [idprofesor], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/profesoresViews/editarprofesores.ejs', {profesores:results[0]});
        }
    });
});


const profesores = require('../Controllers/profesoresController');
router.post('/guardarprofesores', profesores.guardarprofesores);
router.post('/actualizarprofesores', profesores.actualizarprofesores);

module.exports = router;
