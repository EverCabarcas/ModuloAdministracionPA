var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    codigo: {type: String, required: true},
    nombre: {type: String, required:true}
});

module.exports = mongoose.model('Programa', schema);