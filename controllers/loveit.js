const express = require('express')
const router = express.Router()

router.get('/animals', (req, res)=>{
    const faveAnimals = [ 'sand crab', 'corny joke dog', 'benedict the sea cucumber'] 
     res.render('animals.ejs', {animals: faveAnimals})
 })
 
 router.get('/foods', (req, res) => {
     res.render('foods', {foods: ['coconut', 'avocado']});
   });
   module.exports = router