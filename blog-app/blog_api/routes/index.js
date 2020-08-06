var express = require('express');
var router = express.Router();
const posts_controller = require('../controllers/posts_controller')

router
  .get('/posts', posts_controller.get_posts)
  .post('/create', posts_controller.create_post)
  .delete('/posts/:id', posts_controller.delete_post)

module.exports = router;
