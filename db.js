const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection;
db.on('connected',()=>{
    console.log("connected to mongo server");
});
db.on('error',()=>{
    console.log("error on mongo server");
});
db.on('disconnected',()=>{
    console.log("disconnected to mongo server");
});

module.exports = db;