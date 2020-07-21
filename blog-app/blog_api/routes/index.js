var express = require('express');
var router = express.Router();

router.post('/create', (req, res) => {
  console.log('stigna request-ot')
  console.log(req.body)
})

module.exports = router;
