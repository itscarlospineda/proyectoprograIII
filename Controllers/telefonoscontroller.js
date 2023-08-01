const conexion = require('../database');


//ACTUALIZAR TODO EL CODIGO SIGUIENTE
//GUARDAR un REGISTRO

exports.guardartelefonos = (req, res) => {
   // const idtelefono = req.body.idtelefono;
    const idprofesor = req.body.idprofesor;
    const telefono = req.body.telefono;

    conexion.query('INSERT INTO telefonos SET ?', [{idprofessor: idprofesor,
        telefono: telefono}], (error, results) => {

        if (error) {
            console.log(error);
        } else {
            res.redirect('/telefonos');
        }
    });
};


//ACTUALIZAR un REGISTRO
exports.actualizartelefonos = (req, res) => {
    const idtelefono = req.body.idtelefono;
    const idprofesor = req.body.idprofesor;
    const telefono = req.body.telefono;

    conexion.query('UPDATE telefonos SET ? WHERE idtelefono =?', [{ idprofesor: idprofesor, telefono: telefono },
        idtelefono], (error, results) => {

        if (error) {
            console.log(error);
        } else {
            res.redirect('/telefonos');
        }
    });
};
