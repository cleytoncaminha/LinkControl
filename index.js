const express = require('express');
const app = express()
const PORT = 3000;
const mongoose = require('mongoose');
const path = require('path')
const linkRoute = require('./routes/linkRoute')


mongoose.connect('mongodb://localhost/newlinks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

 
let db = mongoose.connection;

db.on("error", ()=>{console.log("houve um erro")});
db.once("open", ()=>{console.log('banco carregado')});


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'templates'))
app.use('/', linkRoute);

app.listen(PORT, console.log('app listen on port ' + PORT ));