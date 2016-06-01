var express = require('express');
var router = express.Router();
var usuarioDB = require("../models/usuario");
var md5 = require("md5")
var randomstring = require('randomstring');

exports.registro = function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;

    // console.log(username,password,email)
    if (password == password2) {
        var iduser = randomstring.generate(40);
        var pss = md5(password)
        usuarioDB.insertUsuario(iduser, username, email, pss);
    }
    else console.log("contraseñas incorrectas");
};