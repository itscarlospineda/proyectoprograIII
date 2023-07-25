const express = require('express');
const router = express.Router();


const programasController = require('../Controller/programasController');
router.get('/', programasController.list);
router.post('/add', programasController.save);
router.get('/delete/:idprograma', programasController.delete);
router.get('/update/:idprograma', programasController.edit);
router.post('/update/:idprograma', programasController.update);

module.exports = router;