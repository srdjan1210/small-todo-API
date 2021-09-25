const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required for ToDo!']
    }, 
    text: {
        type: String, 
        required: [true, 'Body text is required for ToDo!']
    }, 
    important: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const todoModel = mongoose.model('ToDo', todoSchema);

module.exports = todoModel;