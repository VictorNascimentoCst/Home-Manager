const express = require('express');

const router = express.Router();

let GastosFixos = require('../models/modelGastosFixos')

router.get('/gastosfixos', async (req, res)=>{
    try {
        const gastosfixos = await GastosFixos.find({})
        res.status(200).render('../views/gastosFixos', {gastosfixos: gastosfixos});
    } catch (error) {
        console.log(error)
    }
    
})
router.post('/gastosfixos', async (req, res)=>{
        const { nome } = req.body.gastosfixos
        const { custo } = req.body.gastosfixos
        const gastosfixos = new GastosFixos({nome, custo})
    try {
        gastosfixos.save()
        res.status(200).redirect('../gastosFixos');
    } catch (error) {
        console.log(error)
    }
    
})

router.delete('/gastosfixos/:id', async (req,res) => {
    try {
        await GastosFixos.findByIdAndRemove(req.params.id)
        res.redirect('../gastosfixos')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router