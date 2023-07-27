const express = require('express');
const router = express.Router();
const conexion = require('../database');

router.get('/', (req, res) => {
    res.render('../Views/home.ejs');
})


//Actualizar todo lo que está debajo y dejar fijo el código anterior en TODAS las rutas
router.get('/perfiles', (req, res) => {

    conexion.query('SELECT * FROM perfiles', (error, results) => {
        if (error) {
            throw error;
        } else {
            //res.render('formapagoViews/formapago.ejs', {results:results});      
            res.render('../Views/perfilesViews/perfiles.ejs', { results: results });
        }
    })
})

router.get('/crearperfiles', (req, res) => {
    res.render('../Views/perfilesViews/crearperfiles.ejs');
})


router.get('/deleteperfiles/:idperfil', (req, res) => {
    const idprograma = req.params.idprograma;
    conexion.query('DELETE FROM perfiles WHERE idperfil= ?', [idperfil], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/perfil');
        }
    })
});

router.get('/editarperfiles/:idperfil', (req, res) => {
    const idprograma = req.params.idprograma;
    conexion.query('SELECT * FROM perfiles WHERE idperfil=?', [idperfil], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/perfilesViews/editarperfiles.ejs', { perfiles: results[0] });
        }
    });
});


const correos = require('../Controllers/perfilesController');
router.post('/guardarperfiles', perfiles.guardarperfiles);
router.post('/actualizarperfiles', perfiles.actualizarperfiles);

module.exports = router;