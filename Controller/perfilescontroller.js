const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from perfiles', (err, idperfil) => {
            if (err) {
                res.json(err);
            }
        });

    }
    );
};

//Funcion para guardar registros
controller.save = (req, res) => {
    const idperfil = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into perfiles set?', [idperfil], (err, perfiles) => {
            console.log(perfiles);
            res.redirect('/');
        });
    })
};

//Funcion para listar registros
controller.edit = (req, res) => {
    const { idperfil } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select *from perfiles where idperfil=?', [idperfil], (err, perfiles) => {
            res.render('perfiles_edit', {
                data: perfiles[0]
            });
        });
    });
};

//Funcion para actualizar
controller.update = (req, res) => {
    const { idperfil } = req.params;
    const nuevo_idperfil = req.body;
    req.getConnection((err, conn) => {
        conn.query('update perfiles set ? where idperfil=?', [nuevo_idperfil, idperfil], (err, perfiles) => {
            res.redirect('/');
        });
    });
};

//Funcion para Eliminar registros
controller.delete = (req, res) => {
    const { idperfil } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from perfiles where idperfil=?', [idperfil], (err, perfiles) => {
            res.redirect('/');
        });
    })
};
module.exports = controller;