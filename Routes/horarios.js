const express = require('express');
const router = express.Router();


const horariosController = require('../Controller/horariosController');
router.get('/', horariosController.list);
router.post('/add', horariosController.save);
router.get('/delete/:idhorario', horariosController.delete);
router.get('/update/:idhorario', horariosController.edit);
router.post('/update/:idhorario', horariosController.update);

module.exports = router;