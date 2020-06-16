var express = require('express')
var router = express.Router()
const todos_controller = require('../controllers/todos')

router.get('/', todos_controller.index)
      .get('/create', todos_controller.get_create)
      .get('/update', todos_controller.get_update)
      .post('/create', todos_controller.post_create)

module.exports = router
