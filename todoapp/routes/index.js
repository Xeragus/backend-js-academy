var express = require('express')
var router = express.Router()
const todos_controller = require('../controllers/todos')

router.get('/', todos_controller.index)
      .get('/create', todos_controller.get_create)
      .get('/update/:id', todos_controller.get_update)
      .post('/create', todos_controller.post_create)
      .post('/update/:id', todos_controller.post_update)
      .get('/delete/:id', todos_controller.delete)
      .get('/complete/:id', todos_controller.complete)

module.exports = router
