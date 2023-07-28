const conexion = require('../database');


//ACTUALIZAR TODO EL CODIGO SIGUIENTE
//<GUARDAR un REGISTRO

exports.guardar = (req, res) => {
    const idlaboratorio = req.body.idlaboratorio;
    const descripcion = req.body.descripcion;
    const local = req.body.local
    const estado = req.body.estado;

    conexion.query('INSERT INTO laboratorios SET ?', {
        idlaboratorio: idlaboratorio, descripcion: descripcion,
        local: local
    }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/laboratorios');
        }
    });
};


//ACTUALIZAR un REGISTRO
exports.actualizarlaboratorios = (req, res) => {
   const idlaboratorio = req.body.idlaboratorio;
    const descripcion = req.body.descripcion;
    const local = req.body.local
    const estado = req.body.estado;

    conexion.query('UPDATE laboratorios SET ? WHERE idlaboratorio =?', [{ descripcion: descripcion, local: local, estado: estado, 
         }, idprograma], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/laboratorios');
        }
    });
};
