const express = require('express')
const app = express()
const db = require('./db') 
require('dotenv').config();

const bodyParser =require('body-parser');
app.use(bodyParser.json());

const PORT=process.env.PORT||3001;

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

app.listen(PORT)