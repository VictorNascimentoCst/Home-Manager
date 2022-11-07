const express = require('express');

const router = express.Router();

let Economia = require('../models/modelEconomia')

router.get('/economia', async (req, res)=>{
    try {
        const economia = await Economia.find({})
        res.status(200).render('../views/economia', {economia:economia});
    } catch (error) {
       console.log(error) 
    }
})
router.post('/economia', async (req, res)=>{
    const {mes} = req.body.economia
    const {saldo} = req.body.economia
    const economia = new Economia({mes,saldo})
    try {
        economia.save()
        res.status(200).redirect('../economia');
    } catch (error) {
            console.log(error) 
    }
})


router.delete('/economia/:id', async (req,res) => {
    try {
        await Economia.findByIdAndRemove(req.params.id)
        res.redirect('../economia')
    } catch (error) {
        console.log(error)
    }
})


module.exports = router