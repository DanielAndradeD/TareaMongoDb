var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useFindAndModify', true);
// tu código aquí
var libroSchema=Schema({
    isbn: Number,
    titulo: String,
    autor: {
        nombre: String,
        apellido: String
    },
    editorial: String,
    año: Number
})

module.exports = mongoose.model('Libros',libroSchema);
