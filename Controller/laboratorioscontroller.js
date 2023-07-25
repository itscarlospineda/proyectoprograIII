const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from laboratorios', (err, idlaboratorio) => {
            if (err) {
                res.json(err);
            }
        });

    }
    );
};

//Funcion para guardar registros
controller.save = (req, res) => {
    const idlaboratorio = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into laboratorios set?', [idlaboratorio], (err, laboratorios) => {
            console.log(laboratorios);
            res.redirect('/');
        });
    })
};

//Funcion para listar registros
controller.edit = (req, res) => {
    const { idlaboratorio } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select *from laboratorios where idlaboratorio=?', [idlaboratorio], (err, laboratorios) => {
            res.render('laboratorios_edit', {
                data: laboratorios[0]
            });
        });
    });
};

//Funcion para actualizar
controller.update = (req, res) => {
    const { idlaboratorio } = req.params;
    const nuevo_idlaboratorio = req.body;
    req.getConnection((err, conn) => {
        conn.query('update laboratorios set ? where idflaboratorio=?', [nuevo_idlaboratorio, idlaboratorio], (err, laboratorios) => {
            res.redirect('/');
        });
    });
};

//Funcion para Eliminar registros
controller.delete = (req, res) => {
    const { idlaboratorio } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from laboratorios where idlaboratorio=?', [idlaboratorio], (err, laboratorios) => {
            res.redirect('/');
        });
    })
};
module.exports = controller;