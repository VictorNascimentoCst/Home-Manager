const express = require('express');

const router = express.Router();

let ToDoList = require('../models/modelToDoList')

router.get('/home', async (req, res)=>{
    try {
        const todolist = await ToDoList.find({})
        res.status(200).render('../views/home', {todolist: todolist})
    } catch (error) {
        alert(error)
    }
})

router.post('/home', async (req, res)=>{
    const { tarefa } = req.body.todolist
    const todolist = new ToDoList ({tarefa})
    try {
        todolist.save();
        res.status(200).redirect('../home' )
    } catch (error) {
        console.log(error)
    }
})

router.delete('/home/:id', async (req,res) => {
    try {
        await ToDoList.findByIdAndRemove(req.params.id)
        res.redirect('../home')
    } catch (error) {
        console.log(error)
    }
})











module.exports = router