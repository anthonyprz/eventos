var connection = require('../models/connection');
var user = {};


exports.insertUsuario = function(iduser, username, email, password) {
	var data = {
		Id: iduser,
		username: username,
		email: email,
		password: password
	};
	var query = connection.query('INSERT INTO Users SET ?', data, function(err, result) {
		if (err) {
			console.log("error al añadir " + err);
			throw err;
		}
		else {
			console.log("usuario registrado")
		} //else
	});
	console.log(query.sql);
}



exports.selectUsuario = function(req, res, username, pss) {
	var sql = "select * from Users where username='" + username + "' and password = '" + pss + "';";

	connection.query(sql, function(error, result) {
		if (error) {
			console.log("problem" + error);
			//throw error;
			res.redirect("/")
		}
		else {

			req.session.usuario = result[0].username;
			console.log("session " + req.session.usuario);

		 res.render('home',{
		 	session : req.session.usuario,
		 	usuario: result[0].username,
		 	email: result[0].email,
		 	idusuario : result[0].id
		 	
		 });
		
		}

	});
};