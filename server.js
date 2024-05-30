const express = require('express') 
const app = express()
//const MenuItem = require('./models/MenuItem') 
const db = require('./db') 
require('dotenv').config();
const bodyParser =require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT||3001;
const passport = require('./Auth'); 
//Middleware
// const logRequest=(req,res,next)=>{
  //   console.log(`${new Date().toLocaleString()} Request made to : ${req.OriginalUrl}`);
  //   next();
  // }
  //app.use(logRequest);
  
  app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local',{session:false});

//1st api of restaurant 
app.get('/',function (req, res) {
  res.send('Welcome to our Restaurants')
})
//importing router here
const PersonRoutes=require('./Routes/PersonRoutes')
const MenuRoutes = require('./Routes/MenuRoutes');
const Person = require('./models/Person');
//use routes
app.use('/Person',localAuthMiddleware,PersonRoutes)
app.use('/MenuItem',MenuRoutes)
 
app.listen(PORT)