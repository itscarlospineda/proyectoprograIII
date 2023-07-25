const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from telefonos', (err, idtelefono) => {
            if (err) {
                res.json(err);
            }
        });

    }
    );
};

//Funcion para guardar registros
controller.save = (req, res) => {
    const idtelefono = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into telefonos set?', [idtelefono], (err, telefonos) => {
            console.log(telefonos);
            res.redirect('/');
        });
    })
};

//Funcion para listar registros
controller.edit = (req, res) => {
    const { idtelefono } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select *from telefonos where idtelefono=?', [idtelefono], (err, telefonos) => {
            res.render('telefonos_edit', {
                data: telefonos[0]
            });
        });
    });
};

//Funcion para actualizar
controller.update = (req, res) => {
    const { idtelefono } = req.params;
    const nuevo_idtelefono = req.body;
    req.getConnection((err, conn) => {
        conn.query('update telefonos set ? where idtelefono =?', [nuevo_idtelefono, idtelefono], (err, telefonos) => {
            res.redirect('/');
        });
    });
};

//Funcion para Eliminar registros
controller.delete = (req, res) => {
    const { idtelefono } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from telefonos where idtelefono =?', [idtelefono], (err, telefonos) => {
            res.redirect('/');
        });
    })
};
module.exports = controller;
