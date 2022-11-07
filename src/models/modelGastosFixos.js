const mongoose = require('mongoose');

const gastosFixosSchema = mongoose.Schema({
    nome: { type: String, require: true },
    custo: { type: Number, require: true }
})


module.exports = mongoose.model('GastosFixos', gastosFixosSchema)