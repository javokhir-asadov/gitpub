const express = require('express');
const app = express();
const drinks = require('./models/drinks');
const foods = require('./models/foods');

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
});
///index
app.get('/drinks', (req, res) => {
    res.render('index.ejs', { drinks });
});
app.get('/foods', (req, res) => {
    res.render('food_index.ejs', { foods });
});
    
    ///show 
    app.get('/drinks/:id', (req, res) => {
        const givenDrink = drinks.find(function(drink) {
            return drink === Number(req.params.id)
        });
        
        res.render('show.ejs', {
            drinks: drinks[req.params.id]
        });
    });
    
    
    app.get('/foods/:id', (req, res) => {
        const givenFoods = foods.find(function(food) {
            return food === Number(req.params.id)
        });
        
        res.render('food_show.ejs', {
            foods: foods[req.params.id]
        });
    });
    
    























app.listen(3000, () => console.log('express is listening'));