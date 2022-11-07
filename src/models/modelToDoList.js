const mongoose = require('mongoose');

const toDoListSchema = new mongoose.Schema({
    tarefa:[{ type: String, require: true }]
})


module.exports = mongoose.model('ToDoList', toDoListSchema)