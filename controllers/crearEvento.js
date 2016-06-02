var express = require('express');
var router = express.Router();
var evento = require("../models/evento");
var randomstring = require('randomstring');

exports.crearevento = function(req, res) {
    var idevento = randomstring.generate(40);
    var nombre = req.body.nombre;
    var descripcion = req.body.descripcion;
    var idusuario = req.body.idusuarioF;
    var fechainicio = req.body.fechainicio;
    var fechafin = req.body.fechafin;
    var limite = req.body.limite;
    var direccion = req.body.direccion;
    var publico = req.body.publico;
    
    
    console.log(idevento,nombre,descripcion,idusuario,fechainicio,fechafin,limite,direccion,publico)
    
    evento.insertEvento(idevento,nombre,descripcion,idusuario,fechainicio,fechafin,limite,direccion,publico);
    
}
