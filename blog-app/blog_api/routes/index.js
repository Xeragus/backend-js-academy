var express = require('express');
var router = express.Router();
const Post = require('../models/post')
const mongoose = require('mongoose')

router
  .post('/create', async (req, res) => {
    const resContent = {
      message: 'Post is successfully created!',
      error: false
    }

    try {
      const post = new Post({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
      })

      await post.save()
      
      resContent.post = post
    } catch (error) {
      resContent.error = true
      resContent.message = error.message
    }

    res.json(resContent)
  })

module.exports = router;
