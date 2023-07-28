const conexion = require('../database');


//ACTUALIZAR TODO EL CODIGO SIGUIENTE
//<GUARDAR un REGISTRO

exports.guardarprofesores = (req, res) => {
    const idprofesor = req.body.idprofesor;
    const appaterno = req.body.appaterno;
    const apmaterno = req.body.apmaterno;
    const nombres = req.body.nombres;
    const nacimiento = req.body.nacimiento;
    const direccion = req.body.direccion;
    const referencia = req.body.referencia;
    const genero = req.body.genero;
    const estado = req.body.estado;

    conexion.query('INSERT INTO profesores SET ?', [{ idprofesor: idprofesor, appaterno: apparteno, 
        apmaterno: apmaterno, nombres: nombres, nacimiento: nacimiento, direccion: direccion, 
        referencia: referencia, genero: genero, estado: estado}], (error, results) => {

        if (error) {
            console.log(error);
        } else {
            res.redirect('/profesores');
        }
    });
};


//ACTUALIZAR un REGISTRO
exports.actualizarprofesores = (req, res) => {
    const idprofesor = req.body.idprofesor;
    const appaterno = req.body.appaterno;
    const apmaterno = req.body.apmaterno;
    const nombres = req.body.nombres;
    const nacimiento = req.body.nacimiento;
    const direccion = req.body.direccion;
    const referencia = req.body.referencia;
    const genero = req.body.genero;
    const estado = req.body.estado;

    conexion.query('UPDATE profesores SET ? WHERE idprofesor =?', [{ appaterno: apparteno, apmaterno: apmaterno,
        nombres: nombres, nacimiento: nacimiento, direccion: direccion, referencia: referencia, genero: genero,
         estado: estado }, idprofesor], (error, results) => {
            
        if (error) {
            console.log(error);
        } else {
            res.redirect('/profesores');
        }
    });
};
