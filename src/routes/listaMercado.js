const express = require('express');
const { findByIdAndRemove } = require('../models/modelListaMercado');

const router = express.Router();



let ListaMercado = require('../models/modelListaMercado')

router.get('/listamercado', async (req, res) => {
    listamercado = await ListaMercado.find({})
    res.render('../views/listaMercado', { listamercado: listamercado});
})

router.post('/listamercado', async (req, res) => {
    const { produto } = req.body.listamercado
    const { quantidade } = req.body.listamercado
    const listamercado = new ListaMercado({ produto, quantidade })
    try {
        listamercado.save();
        res.status(200).redirect('../listamercado')
    } catch (error) {
        console.log(error)
    }
})

router.delete('/listamercado/:id', async (req, res) => {
    try {
        await ListaMercado.findByIdAndRemove(req.params.id)
        res.redirect('../listamercado')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router