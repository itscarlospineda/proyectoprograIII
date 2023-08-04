const conexion = require('../database');

exports.guardarusuarios = (req, res) => {
    const usuario = req.body.usuario;
    const clave = req.body.clave;
    const correo = req.body.correo;
    const estado = req.body.estado;

    conexion.query('INSERT INTO cuentausuario SET ?', [{usuario: usuario,
        clave: clave, correo:correo, estado:estado}], (error, results) => {

        if (error) {
            console.log(error);
        } else {
            res.redirect('/usuarios');
        }
    })
};
