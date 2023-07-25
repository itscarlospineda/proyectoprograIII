const express = require('express');
const router = express.Router();


const cursosController = require('../Controller/cursoscontroller');
router.get('/', cursosController.list);
router.post('/add', cursosController.save);
router.get('/delete/:idcurso', cursosController.delete);
router.get('/update/:idcurso', cursosController.edit);
router.post('/update/:idcurso', cursosController.update);

module.exports = router;