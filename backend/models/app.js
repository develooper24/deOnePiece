var mongose = require('mongoose');
var Schema = mongose.Schema;

var pruebaSchema = new Schema({});
module.exports = mongose.model('Prueba', pruebaSchema);