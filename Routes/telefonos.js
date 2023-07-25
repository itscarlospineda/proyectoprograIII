const express = require('express');
const router = express.Router();


const telefonosController = require('../Controller/telefonosController');
router.get('/', telefonosController.list);
router.post('/add', telefonosController.save);
router.get('/delete/:idtelefono', telefonosController.delete);
router.get('/update/:idtelefono', telefonosController.edit);
router.post('/update/:idtelefono', telefonosController.update);

module.exports = router;