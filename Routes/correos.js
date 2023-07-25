const express = require('express');
const router = express.Router();


const correosController = require('../Controller/correos');
router.get('/', correosController.list);
router.post('/add', correosController.save);
router.get('/delete/:idcorreo', correosController.delete);
router.get('/update/:idcorreo', correosController.edit);
router.post('/update/:idcorreo', correosController.update);

module.exports = router;