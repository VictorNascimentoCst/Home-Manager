const mongoose = require('mongoose');

const listaMercadoSchema = mongoose.Schema({
    produto: { type: String, require: true },
    quantidade: { type: Number, require: true }
})


module.exports = mongoose.model('ListaMercado', listaMercadoSchema)