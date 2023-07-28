const conexion = require('../database');


//ACTUALIZAR TODO EL CODIGO SIGUIENTE
//GUARDAR un REGISTRO

exports.guardarperfiles = (req, res) => {
    const idperfil = req.body.idperfil;
    const idprograma = req.body.idprograma;
    const idprofesor = req.body.idprofesor;
    const estado = req.body.estado;

    conexion.query('INSERT INTO perfiles SET ?', [{ idperfil: idperfil,idprograma: idprograma, 
        idprofesor: idprofesor, estado: estado}], (error, results) => {

        if (error) {
            console.log(error);
        } else {
            res.redirect('/perfiles');
        }
    });
};


//ACTUALIZAR un REGISTRO
exports.actualizarperfiles = (req, res) => {
    const idperfil = req.body.idperfil;
    const idprograma = req.body.idprograma;
    const idprofesor = req.body.idprofesor;
    const estado = req.body.estado;

    conexion.query('UPDATE perfiles SET ? WHERE idperfil =?', [{ idprograma: idprograma, idprofesor: idprofesor, 
        estado: estado }, idperfil], (error, results) => {
            
        if (error) {
            console.log(error);
        } else {
            res.redirect('/perfiles');
        }
    });
};
