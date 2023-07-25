const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from frecuencias', (err, idfrecuencia) => {
            if (err) {
                res.json(err);
            }
        });

    }
    );
};

//Funcion para guardar registros
controller.save = (req, res) => {
    const idfrecuencia = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into frecuencias set?', [idfrecuencia], (err, frecuencias) => {
            console.log(frecuencias);
            res.redirect('/');
        });
    })
};

//Funcion para listar registros
controller.edit = (req, res) => {
    const { idfrecuencia } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select *from frecuencias where idfrecuencia=?', [idfrecuencia], (err, frecuencias) => {
            res.render('frecuencias_edit', {
                data: frecuencias[0]
            });
        });
    });
};

//Funcion para actualizar
controller.update = (req, res) => {
    const { idfrecuencia } = req.params;
    const nuevo_idfrecuencia = req.body;
    req.getConnection((err, conn) => {
        conn.query('update frecuencias set ? where idfrecuencia=?', [nuevo_idfrecuencia, idfrecuencia], (err, frecuencias) => {
            res.redirect('/');
        });
    });
};

//Funcion para Eliminar registros
controller.delete = (req, res) => {
    const { idfrecuencia } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from frecuencia where idfrecuencia=?', [idfrecuencia], (err, frecuencia) => {
            res.redirect('/');
        });
    })
};
module.exports = controller;