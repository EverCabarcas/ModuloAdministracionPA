var express = require('express');
var router = express.Router();
var programa = require('../models/programa');

router.post('/administrarprograma', function (req, res, next) {
    var p = new programa({
       codigo : req.body.nombre,
        nombre: req.body.codigo
    });
    p.save();
});

module.exports = router;
