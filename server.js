const express = require('express')
const app = express()
const db = require('./db') 

const bodyParser =require('body-parser');
app.use(bodyParser.json());

const MenuItem = require('./models/MenuItem')

//1st api of restaurant 
app.get('/', function (req, res) {
  res.send('Welcome to our Restaurants')
})





//importing router here
const PersonRoutes=require('./Routes/PersonRoutes')
const MenuRoutes = require('./Routes/MenuRoutes')

//use routes
app.use('/Person',PersonRoutes)
app.use('/MenuItem',MenuRoutes)
app.listen(3001)