const conexion = require('../database');


//ACTUALIZAR TODO EL CODIGO SIGUIENTE
//<GUARDAR un REGISTRO

exports.guardarhorarios = (req, res) => {
    const idhorario = req.body.idhorario;
    const idperfil = req.body.idperfil;
    const idlaboratorio = req.body.idlaboratorio;
    const idfrecuencia = req.body.idfrecuencia;
    const fechainicio = req.body.fechainicio;
    const fechafin = req.body.fechafin;
    const estado = req.body.estado;
    

    conexion.query('INSERT INTO horarios SET ?', [{ idhorario: idhorario, idperfil: idperfil,
        idlaboratorio: idlaboratorio, idfrecuencia: idfrecuencia, fechainicio: fechainicio, fechafin: fechafin,
        estado: estado }], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/horarios');
        }
    });
};


//ACTUALIZAR un REGISTRO
    exports.actualizarhorarios = (req, res) => {
    const idhorario = req.body.idhorario;
    const idperfil = req.body.idperfil;
    const idlaboratorio = req.body.idlaboratorio;
    const idfrecuencia = req.body.idfrecuencia;
    const fechainicio = req.body.fechainicio;
    const fechafin = req.body.fechafin;
    const estado = req.body.estado;

    conexion.query('UPDATE horarios SET ? WHERE idhorario =?', [{ idperfil: idperfil,
        idlaboratorio: idlaboratorio, idfrecuencia: idfrecuencia, fechainicio: fechainicio, fechafin: fechafin, 
        estado:estado }, idhorario], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/horarios');
        }
    });
};
