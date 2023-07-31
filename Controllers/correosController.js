const conexion = require('../database');


//ACTUALIZAR TODO EL CODIGO SIGUIENTE
//<GUARDAR un REGISTRO

exports.guardarcorreos = (req, res) => {
    //const idcorreo = req.body.idcorreo;
    const idprofesor = req.body.idprofesor;
    const correo = req.body.correo;

    conexion.query('INSERT INTO correos SET ?', [{idprofesor: idprofesor, correo: correo}], 
    (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/correos');
        }
    });
};


//ACTUALIZAR un REGISTRO
exports.actualizarcorreos = (req, res) => {
    const idcorreo = req.body.idcorreo;
    const idprofesor = req.body.idprofesor;
    const correo = req.body.correo;

    conexion.query('UPDATE correos SET ? WHERE idcorreo =?', [{ correo: correo }, idcorreo], 
    (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/correos');
        }
    });
};
