const express = require('express')
const country_controller = require('../controllers/countries')
const router = express.Router()

router.get('/', country_controller.get_all)
      .get('/:id', country_controller.get_one_country)
      .post('/', country_controller.create_country)
      .put('/:id', country_controller.update_country)
      .delete('/:id', country_controller.delete_country)

module.exports = router