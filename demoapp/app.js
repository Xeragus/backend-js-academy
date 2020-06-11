const express = require('express')
const app = express()
const countriesRouter = require('./routes/countries')

app.use(express.json())
app.use('/countries', countriesRouter)

app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})