require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./database/database')()
const errorController = require('./controllers/errorController')

//Routers
const todoRouter = require('./routes/todoRouter');




app.use(express.json({ urlencoded: false}));
app.use(express.static(__dirname + "/public"));

app.use('/todos', todoRouter);
app.use(errorController.errorHandler)

module.exports = app;