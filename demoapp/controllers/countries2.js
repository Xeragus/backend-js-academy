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

module.exports = {
  get_all: (req, res) => {
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
  },

  get_one: (req, res) => {
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
}