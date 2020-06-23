let todos = []

module.exports = {
  index: (req, res) => {
    res.render('index', { 
      title: 'Todos', 
      todos: todos
    })
  },
  get_create: (req, res) => {
    res.render('create', {
      title: 'Create todo'
    })
  },
  get_update:  (req, res) => {
    const todo = todos.find(todo => {
      if (todo.id == req.params.id) {
        return todo
      }
    })

    res.render('update', {
      title: 'Update todo',
      todo: todo
    })
  },
  post_create: (req, res) => {
    let resContent = { 
      title: 'Todos', 
      todos: todos,
      message: 'You have successfully created new todo!',
      error: false
    }

    let biggestId = 0

    

    try {
      let todo = req.body

      todos.forEach(todo => {
        if (todo.id > biggestId) {
          biggestId = todo.id
        }
      })
  
      todo.id = biggestId + 1

      todos.push(todo)
    } catch (error) {
      resContent.message = 'An error occured: ' + error.message
      resContent.error = true
    }

    res.render('index', resContent)
  },
  post_update: (req, res) => {
    let resContent = { 
      title: 'Todos', 
      todos: todos,
      error: false
    }

    try {
      const todo = todos.find(todo => {
        if (todo.id == req.params.id) {
          return todo
        }
      })

      todo.title = req.body.title
      todo.description = req.body.description
      
      resContent.message = 'You have successfully update the todo with id #' + todo.id
    } catch (error) {
      resContent.message = 'An error occured: ' + error.message
      resContent.error = true
    }

    res.render('index', resContent)
  },
  delete: (req, res) => {
    const resContent = { 
      title: 'Todos', 
      todos: todos,
      error: false
    }

    try {
      todos = todos.filter(todo => {
        if (todo.id != req.params.id) {
          return todo
        }
      })

      resContent.todos = todos

      resContent.message = 'You have successfully deleted the todo with id #' + req.params.id
    } catch (error) {
      resContent.message = 'An error occured: ' + error.message
      resContent.error = true
    }

    res.render('index', resContent)
  },
  complete: (req, res) => {
    const todo = todos.find(todo => {
      if (todo.id == req.params.id) return todo
    })

    todo.completed = true

    res.render('index', { 
      title: 'Todos', 
      todos: todos
    })
  }
}