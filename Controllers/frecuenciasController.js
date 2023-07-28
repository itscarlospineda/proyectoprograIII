const conexion = require('../database');

//ACTUALIZAR TODO EL CODIGO SIGUIENTE

//GUARDAR un REGISTRO

exports.guardarfrecuencias = (req, res) => {
    const idfrecuencia = req.body.idfrecuencia;
    const descripcion = req.body.descripcion;
    const horainicio = req.body.horainicio;
    const horafin = req.body.horafin;
    const estado = req.body.estado;


    conexion.query('INSERT INTO frecuencias SET ?', [{ idfrecuencia: idfrecuencia, descripcion: descripcion,
        horainicio: horainicio, horafin: horafin, estado: estado }], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/frecuencias');
        }
    });
};

//ACTUALIZAR un REGISTRO
exports.actualizafrecuencias = (req, res) => {
    const idfrecuencia = req.body.idfrecuencia;
    const descripcion = req.body.descripcion;
    const horainicio = req.body.horainicio;
    const horafin = req.body.horafin;
    const estado = req.body.estado;

    conexion.query('UPDATE frecuencias SET ? WHERE idfrecuencia =?', [{ descripcion: descripcion, 
        horainicio: horainicio, horafin: horafin, estado: estado }, idfrecuencia], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/frecuencias');
        }
    });
};