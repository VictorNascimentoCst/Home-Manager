const mongoose = require('mongoose');

const economiaSchema = mongoose.Schema({
    mes: { type: String, require: true },
    saldo: { type: Number, require: true }
})


module.exports = mongoose.model('Economia', economiaSchema)