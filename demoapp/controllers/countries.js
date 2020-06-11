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

exports.get_all = (req, res) => {
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
}

exports.get_one = (req, res) => {
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
}

exports.create = (req, res) => {
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
}

exports.update = (req, res) => {
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
}

exports.delete = (req, res) => {
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
}	
