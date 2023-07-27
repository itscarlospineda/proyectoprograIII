const conexion = require('../database');


//ACTUALIZAR TODO EL CODIGO SIGUIENTE
//GUARDAR un REGISTRO

exports.guardarprogramas = (req, res) => {
    const idprograma = req.body.idprograma;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const objetivos = req.body.objetivos;
    const requisitos = req.body.requisitos;
    const precio = req.body.precio;
    const duracion = req.body.duracion;
    const estado = req.body.estado;

    conexion.query('INSERT INTO programas SET ?', {
        idprograma: idprograma, titulo: titulo,
        descripcion: descripcion, objetivos: objetivos, requisitos: requisitos,
        precio: precio, duracion: duracion, estado: estado
    }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/programas');
        }
    });
};


//ACTUALIZAR un REGISTRO
exports.actualizarprogramas = (req, res) => {
    const idprograma = req.body.idprograma;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const objetivos = req.body.objetivos;
    const requisitos = req.body.requisitos;
    const precio = req.body.precio;
    const duracion = req.body.duracion;
    const estado = req.body.estado;

    conexion.query('UPDATE programas SET ? WHERE idprograma =?', [{ titulo: titulo, descripcion: descripcion, objetivos: objetivos, requisitos: requisitos,
        precio: precio, duracion: duracion, estado: estado }, idprograma], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/programas');
        }
    });
};
