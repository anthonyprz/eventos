var express = require('express');
var router = express.Router();
var evento = require("../models/evento");

exports.mostrareventos = function(req, res) {
    
    var idusuario = req.params.idusu;

    
    evento.selecteventos(req,res)
    
};