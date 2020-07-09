const Todo = require('../models/todo')
    , mongoose = require('mongoose')
const { db } = require('../models/todo')

module.exports = {
  index: async (req, res) => {
    const resContent = { 
      title: 'Todos', 
      todos: [],
      error: false
    }

    try {
      resContent.todos = await Todo.find()
    } catch (error) {
      resContent.message = 'An error occured: ' + error.message
      resContent.error = true
    }

    res.render('index', resContent)
  },
  get_create: (req, res) => {
    res.render('create', {
      title: 'Create todo'
    })
  },
  get_update: async (req, res) => {
    const resContent = {
      title: 'Update todo',
      todo: null,
      error: false
    }

    try {
      resContent.todo = await Todo.findOne({ _id: req.params.id })
    } catch (error) {
      resContent.message = 'An error occured: ' + error.message
      resContent.error = true
    }

    res.render('update', resContent)
  },
  post_create: async (req, res) => {
    let resContent = { 
      title: 'Todos', 
      todos: [],
      message: 'You have successfully created new todo!',
      error: false
    }

    try {
      const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description
      })
      await todo.save()

      resContent.todos = await Todo.find()
    } catch (error) {
      resContent.message = 'An error occured: ' + error.message
      resContent.error = true
    }

    res.render('index', resContent)
  },
  post_update: async (req, res) => {
    let resContent = { 
      title: 'Todos', 
      todos: [],
      error: false
    }

    try {
      await Todo.update({ _id: req.params.id }, {
        $set: {
          title: req.body.title,
          description: req.body.description
        }
      })

      resContent.todos = await Todo.find()

      resContent.message = 'You have successfully update the todo with id #' + req.params.id
    } catch (error) {
      resContent.message = 'An error occured: ' + error.message
      resContent.error = true
    }

    res.render('index', resContent)
  },
  delete: async (req, res) => {
    const resContent = { 
      title: 'Todos', 
      todos: [],
      error: false
    }

    try {
      await Todo.remove({ _id: req.params.id })
      resContent.todos = await Todo.find()

      resContent.message = 'You have successfully deleted the todo with id #' + req.params.id
    } catch (error) {
      resContent.message = 'An error occured: ' + error.message
      resContent.error = true
    }

    res.render('index', resContent)
  },
  complete: async (req, res) => {
    let resContent = { 
      title: 'Todos', 
      todos: [],
      error: false
    }

    try {
      await Todo.update({ _id: req.params.id }, {
        $set: {
          completed: true
        }
      })

      resContent.todos = await Todo.find()
    } catch (error) {
      resContent.message = 'An error occured: ' + error.message
      resContent.error = true
    }

    res.render('index', resContent)
  }
}