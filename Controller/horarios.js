const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from horarios', (err, idhorario) => {
            if (err) {
                res.json(err);
            }
        });

    }
    );
};

//Funcion para guardar registros
controller.save = (req, res) => {
    const idhorario = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into horarios set?', [idhorario], (err, horarios) => {
            console.log(horarios);
            res.redirect('/');
        });
    })
};

//Funcion para listar registros
controller.edit = (req, res) => {
    const { idhorario } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select *from horarios where idhorario=?', [idhorario], (err, horarios) => {
            res.render('horarios_edit', {
                data: horarios[0]
            });
        });
    });
};

//Funcion para actualizar
controller.update = (req, res) => {
    const { idhorario } = req.params;
    const nuevo_idhorario = req.body;
    req.getConnection((err, conn) => {
        conn.query('update horarios set ? where idhorario=?', [nuevo_idhorario, idhorario], (err, horarios) => {
            res.redirect('/');
        });
    });
};

//Funcion para Eliminar registros
controller.delete = (req, res) => {
    const { idhorario } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from horarios where idhorario=?', [idhorario], (err, horarios) => {
            res.redirect('/');
        });
    })
};
module.exports = controller;