const conexion = require('../database');


//ACTUALIZAR TODO EL CODIGO SIGUIENTE

//GUARDAR un REGISTRO
/*
exports.guardarfpago = (req, res)=>{
    const idfpago = req.body.idfpago;
    const idempresa = req.body.idempresa;
    const formapago = req.body.formapago;
    const estado = req.body.estado;
    
    conexion.query('INSERT INTO FORMAPAGO SET ?',{idfpago:idfpago, idempresa:idempresa, 
        formapago:formapago, estado:estado}, (error, results)=>{
        if(error){
            console.log(error);
        }else{ 
            res.redirect('/formapago');         
        }
    });
};


//ACTUALIZAR un REGISTRO
exports.actualizafpago = (req, res)=>{
    const idfpago = req.body.idfpago;
    const idempresa = req.body.idempresa;
    const formapago = req.body.formapago;
    const estado = req.body.estado;

    conexion.query('UPDATE FORMAPAGO SET ? WHERE IDFPAGO =?', [{idempresa:idempresa, formapago:formapago, 
        estado:estado}, idfpago ], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/formapago');         
        }
    });
};
*/