const express = require('express')
const app = express()

app
  .get('/', (req, res) => {
    res.send('Zdravo prijateli!')
  })
  .get('/clubs', (req, res) => {
    console.log('nie sme mnogu dobra grupa')
    res.send('Ova e /clubs rutata')
  })

app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})