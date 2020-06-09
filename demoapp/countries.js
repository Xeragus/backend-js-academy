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
    const id = parseInt(req.query.id)

    const country = countries.find(country => country.id == id)

    // ternary operator
    const responseContent = country ? {
      message: 'Wooohoo! We have found your country!',
      item: country
    } : {
      message: 'Here are all the countries',
      items: countries
    }

    res.send(responseContent)
  })
  .get('/countries/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if (Number.isNaN(id)) {
      res.send({
        message: 'Please provide a real id'
      })
    }

    const country = countries.find(country => country.id == id)

    // ternary operator
    const responseContent = country ? {
      message: 'Wooohoo! We have found your country!',
      item: country
    } : {
      message: 'There is no country with the provided id!'
    }

    res.send(responseContent)
  })
  .post('/countries', (req, res) => {
    let country = req.body
    let biggestId = 0

    countries.forEach(country => {
      if (country.id > biggestId) {
        biggestId = country.id
      }
    })

    country.id = biggestId + 1

    countries.push(country)

    res.send({
      message: 'You have successfully added new country in the database'
    })
  })
  .put('/countries/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if (Number.isNaN(id)) {
      res.send({
        message: 'Please provide a real id'
      })
    }

    const country = countries.find(country => country.id == id)

    if (!country) {
      res.send({
        message: 'You cannot update a country that does not exist!'
      })
    }

    country.name = req.body.name
    country.city = req.body.city

      // route parameter
    res.send({
      message: 'You have successfully updated the country with id #' + id,
      item: country
    })
  })
  .delete('/countries/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if (Number.isNaN(id)) {
      res.send({
        message: 'Please provide a real id'
      })
    }

    const country = countries.find(country => country.id == id)

    if (!country) {
      res.send({
        message: 'You cannot delete a country that does not exist!'
      })
    }

    countries = countries.filter(country => country.id != id)

    res.send({
      message: 'You have successfully deleted the country with id #' + id
    })
  })


app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})