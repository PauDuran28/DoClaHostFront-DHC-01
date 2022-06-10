const express = require('express');
const router = new express.Router();
const producto = require('./controllers/producto.js');

router.route('/producto/:id?')
  .get(producto.get);

module.exports = router;