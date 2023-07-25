const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from profesores', (err, idprofesor) => {
            if (err) {
                res.json(err);
            }
        });

    }
    );
};

//Funcion para guardar registros
controller.save = (req, res) => {
    const idprofesor = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into profesores set?', [idprofesor], (err, profesores) => {
            console.log(profesores);
            res.redirect('/');
        });
    })
};

//Funcion para listar registros
controller.edit = (req, res) => {
    const { idprofesor } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select *from profesores where idprofesor=?', [idprofesor], (err, profesores) => {
            res.render('profesores_edit', {
                data: profesores[0]
            });
        });
    });
};

//Funcion para actualizar
controller.update = (req, res) => {
    const { idprofesor } = req.params;
    const nuevo_idprofesor = req.body;
    req.getConnection((err, conn) => {
        conn.query('update profesores set ? where idprofesor=?', [nuevo_idprofesor, idprofesor], (err, profesores) => {
            res.redirect('/');
        });
    });
};

//Funcion para Eliminar registros
controller.delete = (req, res) => {
    const { idprofesor } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from profesores where idprofesor=?', [idprofesor], (err, profesores) => {
            res.redirect('/');
        });
    })
};
module.exports = controller;