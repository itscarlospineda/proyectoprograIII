const conexion = require('../database');

//ACTUALIZAR TODO EL CODIGO SIGUIENTE

//GUARDAR un REGISTRO

exports.guardarcursos = (req, res) => {
    const idcurso = req.body.idcurso;
    const idprograma = req.body.idprograma;
    const descripcion = req.body.descripcion;
    const objetivos = req.body.objetivos;
    const requisitos = req.body.requisitos;
    const precio = req.body.precio;
    const duracion = req.body.duracion;
    const estado = req.body.estado;



    conexion.query('INSERT INTO cursos SET?', [{ idcurso: idcurso, idprograma: idprograma, 
        descripcion: descripcion, objetivos: objetivos, requisitos: requisitos, precio: precio, duracion: duracion,
         estado: estado}] , (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/cursos');
        }
    });
};

//ACTUALIZAR un REGISTRO
exports.actualizarcursos = (req, res) => {
    const idcurso = req.body.idcurso;
    const idprograma = req.body.idprograma;
    const descripcion = req.body.descripcion;
    const objetivos = req.body.objetivos;
    const requisitos = req.body.requisitos;
    const precio = req.body.precio;
    const duracion = req.body.duracion;
    const estado = req.body.estado;

    conexion.query('UPDATE cursos SET ? WHERE idcurso=?', [{ idprograma: idprograma, descripcion: descripcion,
        objetivos: objetivos, requisitos: requisitos, precio: precio, duracion: duracion, estado:estado}, idcurso],
         (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/cursos');
        }
    });
};
