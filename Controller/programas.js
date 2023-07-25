const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from programas', (err, idprograma) => {
            if (err) {
                res.json(err);
            }
        });

    }
    );
};

//Funcion para guardar registros
controller.save = (req, res) => {
    const idprograma = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into programas set?', [idprograma], (err, programas) => {
            console.log(programas);
            res.redirect('/');
        });
    })
};

//Funcion para listar registros
controller.edit = (req, res) => {
    const { idprograma } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select *from programas where idprograma=?', [idprograma], (err, programas) => {
            res.render('programas_edit', {
                data: programas[0]
            });
        });
    });
};

//Funcion para actualizar
controller.update = (req, res) => {
    const { idprograma } = req.params;
    const nuevo_idprograma = req.body;
    req.getConnection((err, conn) => {
        conn.query('update programas set ? where idprograma=?', [nuevo_idprograma, idprograma], (err, programas) => {
            res.redirect('/');
        });
    });
};

//Funcion para Eliminar registros
controller.delete = (req, res) => {
    const { idprograma } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from programas where idprograma=?', [idprograma], (err, programas) => {
            res.redirect('/');
        });
    })
};
module.exports = controller;