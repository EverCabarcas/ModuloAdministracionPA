var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
   nombre:{type: String, required: true},
   codigo:{type: String, required: true},
   programa:{type: Schema.Types.ObjectId, required: true, ref: 'Programa'}
});

module.export = mongoose.model('Asignatura', schema);