const express = require('express');
const router = express.Router();


const profesoresController = require('../Controller/profesoresController');
router.get('/', profesoresController.list);
router.post('/add', profesoresController.save);
router.get('/delete/:idprofesor', profesoresController.delete);
router.get('/update/:idprofesor', profesoresController.edit);
router.post('/update/:idprofesor', profesoresController.update);

module.exports = router;