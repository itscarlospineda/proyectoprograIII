const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from correos', (err, idcorreo) => {
            if (err) {
                res.json(err);
            }
        });

    }
    );
};

//Funcion para guardar registros
controller.save = (req, res) => {
    const idcorreo = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into correos set?', [idcorreo], (err, correos) => {
            console.log(correos);
            res.redirect('/');
        });
    })
};

//Funcion para listar registros
controller.edit = (req, res) => {
    const { idcorreo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select *from correos where idcorreo=?', [idcorreo], (err, correos) => {
            res.render('correos_edit', {
                data: correos[0]
            });
        });
    });
};

//Funcion para actualizar
controller.update = (req, res) => {
    const { idcorreo } = req.params;
    const nuevo_idcorreo = req.body;
    req.getConnection((err, conn) => {
        conn.query('update correos set ? where idcorreo=?', [nuevo_idcorreo, idcorreo], (err, correos) => {
            res.redirect('/');
        });
    });
};

//Funcion para Eliminar registros
controller.delete = (req, res) => {
    const { idcorreo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from correos where idcorreo=?', [idcorreo], (err, correos) => {
            res.redirect('/');
        });
    })
};
module.exports = controller;
