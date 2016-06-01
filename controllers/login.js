var express = require('express');
var router = express.Router();
var usuarioDB = require("../models/usuario");
var md5 = require("md5")
var randomstring = require('randomstring');

exports.login = function(req, res) {
    
    var username = req.body.lusername;
    var password = req.body.lpassword;
    var pss = md5(password);
  
    usuarioDB.selectUsuario(req, res, username, pss);
    
};