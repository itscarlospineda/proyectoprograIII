const express = require('express');
const router = express.Router();
const conexion = require('../database');

router.get('/', (req,res)=>{
    res.render('../Views/home.ejs');
})


//Actualizar todo lo que está debajo y dejar fijo el código anterior en TODAS las rutas
/*
router.get('/formapago', (req, res)=>{    

    conexion.query('SELECT * FROM FORMAPAGO',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            //res.render('formapagoViews/formapago.ejs', {results:results});      
            res.render('../Views/formapagoViews/formapago.ejs',{results:results});      
        }   
    })
})

router.get('/crearformapago', (req,res)=>{
    res.render('../Views/formapagoViews/crearformapago.ejs');
})


router.get('/deleteformapago/:idfpago', (req, res) => {
    const idfpago = req.params.idfpago;
    conexion.query('DELETE FROM FORMAPAGO WHERE IDFPAGO = ?',[idfpago], (error, results)=>{
        if(error){
            console.log(error);
        }else{         
            res.redirect('/formapago');  
        }
    })
});

router.get('/editarformapago/:idfpago', (req,res)=>{    
    const idfpago = req.params.idfpago;
    conexion.query('SELECT * FROM FORMAPAGO WHERE IDFPAGO=?',[idfpago] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('../Views/formapagoViews/editarformapago.ejs', {formapago:results[0]});            
        }        
    });
});

  
const formapago = require('../Controllers/formapagoController');
router.post('/guardarfpago', formapago.guardarfpago);
router.post('/actualizafpago', formapago.actualizafpago);
*/
module.exports = router;
