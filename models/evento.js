var connection = require('../models/connection');
var evento = {};

exports.insertEvento = function( req, res, idevento, nombre,descripcion,idusuario,fechainicio, fechafin, limite, direccion, publico) {
	var unocero = 0; 
	if (publico == 'true'){unocero = 1;}
	var data = {
		id: idevento,
	    Nombre:nombre,
	    descripcion:descripcion,
	    idusuario:idusuario,
	    fecha_inicio:fechainicio,
	    fecha_fin:fechafin,
	    limite_usuarios:limite,
	    direccion:direccion,
	    publico:unocero,
	};
	var query = connection.query('INSERT INTO eventos SET ?', data, function(err, result) {
		if (err) {
			console.log("error al añadir " + err);
		//	throw err;
		
		}
		else {
			console.log("evento creado")
		} 
	});
	console.log(query.sql);
		res.render('home')
		
}

exports.selecteventos = function(req, res) {
	
	var idusuario = req.params.idusu;

	var sql = "select * from eventos where idusuario='" + idusuario + "';";

	connection.query(sql, function(error, result) {
		if (error) {
			console.log("problem" + error);
			//throw error;
			res.redirect("/")
		}
		else {
	//	console.log(result)
		res.json({ eventos: result })
	//	callback(jsn)
//		return callback;
		}

	});



};