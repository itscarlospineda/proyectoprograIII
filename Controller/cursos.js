const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from cursos', (err, idcurso) => {
            if (err) {
                res.json(err);
            }
        });

    }
    );
};

//Funcion para guardar registros
controller.save = (req, res) => {
    const idcurso = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into cursos set?', [idcurso], (err, cursos) => {
            console.log(cursos);
            res.redirect('/');
        });
    })
};

//Funcion para listar registros
controller.edit = (req, res) => {
    const { idcurso } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select *from cursos where idcurso=?', [idcurso], (err, cursos) => {
            res.render('cursos_edit', {
                data: cursos[0]
            });
        });
    });
};

//Funcion para actualizar
controller.update = (req, res) => {
    const { idcurso } = req.params;
    const nuevo_idcurso = req.body;
    req.getConnection((err, conn) => {
        conn.query('update cursos set ? where idcurso=?', [nuevo_idcurso, idcurso], (err, cursos) => {
            res.redirect('/');
        });
    });
};

//Funcion para Eliminar registros
controller.delete = (req, res) => {
    const { idcurso } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from cursos where idcurso =?', [idcurso], (err, cursos) => {
            res.redirect('/');
        });
    })
};
module.exports = controller;
