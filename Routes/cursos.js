const express = require('express');
const router = express.Router();
const conexion = require('../database');

router.get('/', (req, res) => {
    res.render('../Views/home.ejs');
})


//Actualizar todo lo que está debajo y dejar fijo el código anterior en TODAS las rutas
router.get('/cursos', (req, res) => {

    conexion.query('SELECT * FROM cursos', (error, results) => {
        if (error) {
            throw error;
        } else {     
            res.render('../Views/cursosViews/cursos.ejs', { results: results });
        }
    })
})

router.get('/crearcursos', (req, res) => {
    res.render('../Views/cursosViews/crearcursos.ejs');
})


router.get('/deletecursos/:idcurso', (req, res) => {
    const idcurso = req.params.idcurso;
    conexion.query('DELETE FROM cursos WHERE idcurso= ?', [idcurso], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/cursos');
        }
    })
});

router.get('/editarcursos/:idcurso', (req, res) => {
    const idcurso = req.params.idcurso;
    conexion.query('SELECT * FROM cursos WHERE idcurso=?', [idcurso], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/cursosViews/editarcursos.ejs', { cursos: results[0] });
        }
    });
});


const cursos = require('../Controllers/cursosController');
router.post('/guardarcursos', cursos.guardarcursos);
router.post('/actualizarcursos', cursos.actualizarcursos);

module.exports = router;
