const express = require('express')
const app = express()
PORT = 3000
const ejsLayouts = require('express-ejs-layouts')

// Middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)
// controllers
app.use('/hateit', require('./controllers/hateit.js'))
app.use('/loveit', require('./controllers/loveit.js'))

// Routes
//home
app.get('/', (reg, res)=>{
    res.render('home.ejs')
})
// favorite animals
// app.get('/animals.ejs', (req, res)=>{
//    const faveAnimals = [ 'sand crab', 'corny joke dog', 'benedict the sea cucumber'] 
//     res.render('animals.ejs', {animals: faveAnimals})
// })

// app.get('/foods.ejs', (req, res) => {
//     res.render('foods', {foods: ['coconut', 'avocado']});
//   });
  
//   app.get('/movies.ejs', (req, res) => {
//     res.render('movies', {movies: ['split', 'once upon time in maxico']});
//   });
 
//   app.get('/products.ejs', (req, res) => {
//     res.render('products', {products: ['plastic bottle', 'nokia mobile', 'Flaking paint']});
//   });

app.listen(PORT, ()=>{
    console.log('You re running the Love-Hate it')
})