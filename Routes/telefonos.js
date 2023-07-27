const express = require('express');
const router = express.Router();
const conexion = require('../database');

router.get('/', (req, res) => {
    res.render('../Views/home.ejs');
})


//Actualizar todo lo que está debajo y dejar fijo el código anterior en TODAS las rutas
router.get('/telefonos', (req, res) => {

    conexion.query('SELECT * FROM telefonos', (error, results) => {
        if (error) {
            throw error;
        } else {
            //res.render('formapagoViews/formapago.ejs', {results:results});      
            res.render('../Views/telefonosViews/telefonos.ejs', { results: results });
        }
    })
})

router.get('/creartelefonos', (req, res) => {
    res.render('../Views/telefonosViews/creartelefonos.ejs');
})


router.get('/deletetelefonos/:idtelefono', (req, res) => {
    const idtelefono = req.params.idtelefono;
    conexion.query('DELETE FROM telefonos WHERE idtelefono= ?', [idtelefono], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/telefonos');
        }
    })
});

router.get('/editartelefonos/:idtelefono', (req, res) => {
    const idtelefono = req.params.idtelefono;
    conexion.query('SELECT * FROM telefonos WHERE idtelefono=?', [idtelefono], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/telefonosViews/editartelefonos.ejs', { telefonos: results[0] });
        }
    });
});


const correos = require('../Controllers/telefonoscontroller');
router.post('/guardartelefonos', telefonos.guardartelefonos);
router.post('/actualizartelefonos', telefonos.actualizartelefonos);

module.exports = router;