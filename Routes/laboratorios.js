const express = require('express');
const router = express.Router();


const laboratoriosController = require('../Controller/laboratoriosController');
router.get('/', laboratoriosController.list);
router.post('/add', laboratoriosController.save);
router.get('/delete/:idlaboratorio', laboratoriosController.delete);
router.get('/update/:idlaboratorio', laboratoriosController.edit);
router.post('/update/:idlaboratorio', laboratoriosController.update);

module.exports = router;