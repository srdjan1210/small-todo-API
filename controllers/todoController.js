const asyncCatch = require('../utils/asyncCatch')
const todoModel = require('../models/todoModel')
const AppError = require('../utils/AppError')

exports.createTodo = asyncCatch(async (req, res, next) => {
    let { title, text, important } = req.body;

    let todo = await todoModel.create({ title, text, important });
    if(!todo) return next( new AppError('Creation failed!', 500));

    res.status(201).json({
        status: 'Success',
        data: {
            todo
        }
    })
});


exports.deleteTodo = asyncCatch( async (req, res, next) => {
    let _id = req.params.id;

    let todo = await todoModel.findByIdAndRemove(_id);

    if(!todo) {
        return next(new AppError('No todo found with this id!', 404));
    }

    res.status(204).json({
        status: 'Success',
        data: {}
    })
    
});

exports.updateTodo = asyncCatch( async (req, res, next) => {
    let _id = req.params.id;
    let update = {
        title: req.body.title,
        text: req.body.text,
        important: req.body.important
    }

    let todo = await todoModel.findByIdAndUpdate(_id, update);
    if(!todo) return next(new AppError('No todo found with this id!', 404));

    res.status(200).json({
        status: 'Success',
        data: {
            todo
        }
    })
});


exports.getAllTodos = asyncCatch( async (req, res, next) => {
    let todos = await todoModel.find();

    res.json({
        status: 'Success',
        data: {
            todos
        }
    })
});

exports.getSingleTodo = asyncCatch( async (req, res, next) => {
    console.log('HIT')
    let _id = req.params.id;

    let todo = await todoModel.findById(_id);

    if(!todo) return next(new AppError('No todo found with this id!', 404));

    res.status(200).json({
        status: 'Success',
        data: {
            todo
        }
    })
});