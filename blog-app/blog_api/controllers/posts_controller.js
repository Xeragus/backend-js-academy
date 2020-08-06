const Post = require('../models/post')
const mongoose = require('mongoose')

module.exports = {
  get_posts: async (req, res) => {
    const resContent = {
      message: 'Here are all available posts in the database',
      error: false,
      posts: []
    }

    try {
      resContent.posts = await Post.find()
    } catch (error) {
      resContent.error = true
      resContent.message = error.message
    }

    res.json(resContent)
  },
  create_post: async (req, res) => {
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
  },
  delete_post: async (req, res) => {
    const resContent = {
      message: 'You have successfully deleted the post with id' + req.params.id,
      error: false,
      posts: []
    }

    try {
      await Post.remove({_id: req.params.id}) 

      resContent.posts = await Post.find()
    } catch (error) {
      resContent.error = true
      resContent.message = error.message
    }

    res.json(resContent)
  }
}