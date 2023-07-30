const express = require('express');
const router = express.Router();
const conexion = require('./database');


////   ACCESO AL SISTEMA/////
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', session : req.session });
  });
  

  router.post('/login', function(request, response, next){
  
      var correo = request.body.correo;
  
      var clave = request.body.clave;
  
      if(correo && clave)
      {
          query = `
          SELECT * FROM cuentausuario WHERE correo = "${correo}"  `;
  
          conexion.query(query, function(error, data){

              if(data.length > 0)
              {
                  for(var count = 0; count < data.length; count++)
                  {
                      if(data[count].clave == clave)
                      {
                          request.session.id = data[count].id;
  
                          response.redirect("/home");
                      }
                      else
                      {
                          response.send('Clave Incorrecta');
                      }
                  }
              }
              else
              {
                  response.send('Correo Incorrecto');
              }
              response.end();
          });
      }
      else
      {
          response.send('Por Favor Digite el Correo y la');
          response.end();
      }
  
  });
  


  router.get('/logout', function(request, response, next){
  
      request.session.destroy();
  
      response.redirect("/");
  
  });


router.get('/home', (req, res)=>{     
    res.render('home.ejs');               
})





// CORREOS
router.get('/correos', (req, res) => {

    conexion.query('select a.idcorreo,a.idprofesor,b.nombres,a.correo from correos a inner join profesores b on a.idprofesor=b.idprofesor;',
     (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/correosViews/correos.ejs', { results: results });
        }
    })
})

router.get('/get_correos', function(request, response, next){
	
    var buscar_query = request.query.buscar_query;    
    var query = `SELECT correo FROM correos WHERE correo LIKE '%${buscar_query}%' LIMIT 1 `;   
    conexion.query(query, function(error, data){    
        response.json(data);    
    });    
});


router.get('/crearcorreos', (req, res)=>{     
    conexion.query('select idprofesor,nombres FROM profesores ORDER BY idprofesor desc',(error, data)=>{  //Query de Mysql.
        if(error){
            throw error;
        } else {                       
            res.render('../views/correosViews/crearcorreos', {data:data});  // Archivo a renderizar            
        }   
    })          
})


router.get('/deletecorreos/:idcorreo', (req, res) => {
    const idcorreo = req.params.idcorreo;
    conexion.query('DELETE FROM correos WHERE idcorreo= ?', [idcorreo], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/correos');
        }
    })
});

router.get('/editarcorreos/:idcorreo', (req, res) => {
    const idcorreo = req.params.idcorreo;
    conexion.query('SELECT * FROM correos WHERE idcorreo=?', [idcorreo], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/correosViews/editarcorreos.ejs', {correos:results[0]});
        }
    });
});


const correos = require('./Controllers/correosController');
router.post('/guardarcorreos', correos.guardarcorreos);
router.post('/actualizarcorreos', correos.actualizarcorreos);





//      CURSOS
router.get('/cursos', (req, res) => {

    conexion.query('SELECT * FROM cursos', (error, results) => {
        if (error) {
            throw error;
        } else {     
            res.render('../Views/cursosViews/cursos.ejs', { results: results });
        }
    })
})

router.get('/crearcursos', (req, res) => {
    res.render('../Views/cursosViews/crearcursos.ejs');
})


router.get('/deletecursos/:idcurso', (req, res) => {
    const idcurso = req.params.idcurso;
    conexion.query('DELETE FROM cursos WHERE idcurso= ?', [idcurso], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/cursos');
        }
    })
});

router.get('/editarcursos/:idcurso', (req, res) => {
    const idcurso = req.params.idcurso;
    conexion.query('SELECT * FROM cursos WHERE idcurso=?', [idcurso], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/cursosViews/editarcursos.ejs', { cursos: results[0] });
        }
    });
});


const cursos = require('./Controllers/cursosController');
router.post('/guardarcursos', cursos.guardarcursos);
router.post('/actualizarcursos', cursos.actualizarcursos);





//          FRECUENCIAS
router.get('/frecuencias', (req, res) => {

    conexion.query('SELECT * FROM frecuencias', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/frecuenciasViews/frecuencias.ejs', { results: results });
        }
    })
})

router.get('/crearfrecuencias', (req, res) => {
    res.render('../Views/frecuenciasViews/crearfrecuencias.ejs');
})


router.get('/deletefrecuencias/:idfrecuencia', (req, res) => {
    const idfrecuencia = req.params.idfrecuencia;
    conexion.query('DELETE FROM frecuencias WHERE idfrecuencia= ?', [idfrecuencia], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/frecuencias');
        }
    })
});

router.get('/editarfrecuencias/:idfrecuencia', (req, res) => {
    const idfrecuencia = req.params.idfrecuencia;
    conexion.query('SELECT * FROM frecuencias WHERE idfrecuencia=?', [idfrecuencia], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/frecuenciasViews/editarfrecuencias.ejs', { frecuencias: results[0] });
        }
    });
});


const frecuencias = require('./Controllers/frecuenciasController');
router.post('/guardarfrecuencias', frecuencias.guardarfrecuencias);
router.post('/actualizafrecuencias', frecuencias.actualizafrecuencias);




//      HORARIOS
router.get('/horarios', (req, res) => {

    conexion.query('SELECT * FROM horarios', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/horariosViews/horarios.ejs', { results: results });
        }
    })
})

router.get('/crearhorarios', (req, res) => {
    res.render('../Views/horariosViews/crearhorarios.ejs');
})


router.get('/deletehorarios/:idhorario', (req, res) => {
    const idhorario = req.params.idhorario;
    conexion.query('DELETE FROM horarios WHERE idhorario= ?', [idhorario], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/horarios');
        }
    })
});

router.get('/editarhorarios/:idhorario', (req, res) => {
    const idhorario = req.params.idhorario;
    conexion.query('SELECT * FROM horarios WHERE idhorario=?', [idhorario], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/horariosViews/editarhorarios.ejs', {horarios:results[0]});
        }
    });
});


const horarios = require('./Controllers/horariosController');
router.post('/guardarhorarios', horarios.guardarhorarios);
router.post('/actualizarhorarios', horarios.actualizarhorarios);





//          LABORATORIOS
router.get('/laboratorios', (req, res) => {

    conexion.query('SELECT * FROM laboratorios', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/laboratoriosViews/laboratorios.ejs',{results:results});
        }
    })
})

router.get('/crearlaboratorios', (req, res) => {
    res.render('../Views/laboratoriosViews/crearlaboratorios.ejs');
})


router.get('/deletelaboratorios/:idlaboratorio', (req, res) => {
    const idlaboratorio = req.params.idlaboratorio;
    conexion.query('DELETE FROM laboratorios WHERE idlaboratorio= ?', [idlaboratorio], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/laboratorios');
        }
    })
});

router.get('/editarlaboratorios/:idlaboratorio', (req, res) => {
    const idlaboratorio = req.params.idlaboratorio;
    conexion.query('SELECT * FROM laboratorios WHERE idlaboratorio=?', [idlaboratorio], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/laboratoriosViews/editarlaboratorios.ejs', { laboratorios: results[0] });
        }
    });
});


const laboratorios = require('./Controllers/laboratoriosController');
router.post('/guardarlaboratorios', laboratorios.guardarlaboratorios);
router.post('/actualizarlaboratorios', laboratorios.actualizarlaboratorios);





//              PERFILES
router.get('/perfiles', (req, res) => {

    conexion.query('SELECT * FROM perfiles', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/perfilesViews/perfiles.ejs', { results: results });
        }
    })
})

router.get('/crearperfiles', (req, res) => {
    res.render('../Views/perfilesViews/crearperfiles.ejs');
})


router.get('/deleteperfiles/:idperfil', (req, res) => {
    const idperfil = req.params.idperfil;
    conexion.query('DELETE FROM perfiles WHERE idperfil= ?', [idperfil], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/perfiles');
        }
    })
});

router.get('/editarperfiles/:idperfil', (req, res) => {
    const idperfil = req.params.idperfil;
    conexion.query('SELECT * FROM perfiles WHERE idperfil=?', [idperfil], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/perfilesViews/editarperfiles.ejs', { perfiles: results[0] });
        }
    });
});


const perfiles = require('./Controllers/perfilesController');
router.post('/guardarperfiles', perfiles.guardarperfiles);
router.post('/actualizarperfiles', perfiles.actualizarperfiles);





//              PROFESORES
router.get('/profesores', (req, res) => {

    conexion.query('SELECT * FROM profesores', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/profesoresViews/profesores.ejs', { results: results });
        }
    })
})

router.get('/crearprofesores', (req, res) => {
    res.render('../Views/profesoresViews/crearprofesores.ejs');
})


router.get('/deleteprofesores/:idprofesor', (req, res) => {
    const idprofesor = req.params.idprofesor;
    conexion.query('DELETE FROM profesores WHERE idprofesor= ?', [idprofesor], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/profesores');
        }
    })
});

router.get('/editarprofesores/:idprofesor', (req, res) => {
    const idprofesor = req.params.idprofesor;
    conexion.query('SELECT * FROM profesores WHERE idprofesor=?', [idprofesor], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/profesoresViews/editarprofesores.ejs', {profesores:results[0]});
        }
    });
});


const profesores = require('./Controllers/profesoresController');
router.post('/guardarprofesores', profesores.guardarprofesores);
router.post('/actualizarprofesores', profesores.actualizarprofesores);





//              PROGRAMAS
router.get('/programas', (req, res) => {

    conexion.query('SELECT * FROM programas', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/programasViews/programas.ejs', { results: results });
        }
    })
})

router.get('/crearprogramas', (req, res) => {
    res.render('../Views/programasViews/crearprogramas.ejs');
})


router.get('/deleteprogramas/:idprograma', (req, res) => {
    const idprograma = req.params.idprograma;
    conexion.query('DELETE FROM programas WHERE idprograma= ?', [idprograma], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/programas');
        }
    })
});

router.get('/editarprogramas/:idprograma', (req, res) => {
    const idprograma = req.params.idprograma;
    conexion.query('SELECT * FROM programas WHERE idprograma=?', [idprograma], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/programasViews/editarprogramas.ejs', { programas: results[0] });
        }
    });
});


const programas = require('./Controllers/programasController');
router.post('/guardarprogramas', programas.guardarprogramas);
router.post('/actualizarprogramas', programas.actualizarprogramas);





//              TELEFONOS
router.get('/telefonos', (req, res) => {

    conexion.query('SELECT * FROM telefonos', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/telefonosViews/telefonos.ejs', { results: results });
        }
    })
})

router.get('/creartelefonos', (req, res) => {
    res.render('../Views/telefonosViews/creartelefonos.ejs');
})


router.get('/deletetelefonos/:idtelefono', (req, res) => {
    const idtelefono = req.params.idtelefono;
    conexion.query('DELETE FROM telefonos WHERE idtelefono= ?', [idtelefono], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/telefonos');
        }
    })
});

router.get('/editartelefonos/:idtelefono', (req, res) => {
    const idtelefono = req.params.idtelefono;
    conexion.query('SELECT * FROM telefonos WHERE idtelefono=?', [idtelefono], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../Views/telefonosViews/editartelefonos.ejs', { telefonos: results[0] });
        }
    });
});


const telefonos = require('./Controllers/telefonoscontroller');
router.post('/guardartelefonos', telefonos.guardartelefonos);
router.post('/actualizartelefonos', telefonos.actualizartelefonos);


module.exports=router;