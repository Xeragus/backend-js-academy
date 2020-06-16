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
    res.render('update', {
      title: 'Update todo'
    })
  },
  post_create: (req, res) => {
    let todo = req.body
    todo.id = todos.length + 1

    todos.push(todo)

    res.render('index', { 
      title: 'Todos', 
      todos: todos,
      message: 'You have successfully created new todo!'
    })
  }
}