const express = require('express');
const router = express.Router();


const frecuenciasController = require('../Controller/frecuenciasController');
router.get('/', frecuenciasController.list);
router.post('/add', frecuenciasController.save);
router.get('/delete/:idfrecuencia', frecuenciasController.delete);
router.get('/update/:idfrecuencia', frecuenciasController.edit);
router.post('/update/:idfrecuencia', frecuenciasController.update);

module.exports = router;