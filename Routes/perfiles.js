const express = require('express');
const router = express.Router();


const perfilesController = require('../Controller/perfilesController');
router.get('/', perfilesController.list);
router.post('/add', perfilesController.save);
router.get('/delete/:idperfil', perfilesController.delete);
router.get('/update/:idperfil', perfilesController.edit);
router.post('/update/:idperfil', perfilesController.update);

module.exports = router;