const express = require('express');
const router = express.Router();

// load items model
const Items = require('../models/items');

router.get('/', (req, res) => {
  Items.find({})
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
});

module.exports = router;
