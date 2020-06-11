var express = require('express')
var router = express.Router()

const todos = [
  'Go swimming',
  'In circles',
  'Write code!'
]

router.get('/', (req, res) => {
        res.render('index', { 
          title: 'Todos', 
          todos: todos
        })
      })
      .get('/create', (req, res) => {
        res.render('create', { title: 'Create Todo' })
      })

module.exports = router
