const express = require('express')
const { get } = require('mongoose')
const router = express.Router()
const todoController = require('../controllers/todoController')



router.route('/')
    .post(todoController.createTodo)
    .get(todoController.getAllTodos)
router.route('/:id')
    .get(todoController.getSingleTodo)
    .delete(todoController.deleteTodo)
    .put(todoController.updateTodo)


module.exports = router;