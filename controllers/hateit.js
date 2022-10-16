const express = require('express')
const router = express.Router()

// routes go here
router.get('/movies', (req, res) => {
    res.render('movies', {movies: ['split', 'once upon time in maxico']});
  });
 
  router.get('/products', (req, res) => {
    res.render('products', {products: ['plastic bottle', 'nokia mobile', 'Flaking paint']});
  });

module.exports = router