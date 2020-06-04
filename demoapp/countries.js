const express = require('express')
const app = express()

let countries = [
	{
		id: 1,
		name: "Mexico",
		city: "Mexico City"
	},
	{
		id: 2,
		name: "Argentina",
		city: "Buenos Aires"
	},
	{
		id: 3,
		name: "Cuba",
		city: "Havana"
	}
]

app.use(express.json())

app
  .get('/countries', (req, res) => {
    res.send({
      message: 'This is a list of all the countries available in the database',
      items: countries
    })
  })
  .post('/countries', (req, res) => {
    let country = req.body
    country.id = countries.length + 1

    countries.push(country)

    res.send({
      message: 'You have successfully added new country in the database'
    })
  })

app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})