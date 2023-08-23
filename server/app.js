const express = require('express');
const app = express();
const cors = require('cors');
const fs = require("fs");
const csv = require("csv-parser");

global.haveUser = true;

//
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/login',  require('./routes/logIn'));
app.use('/create', require('./routes/createDB'));
app.use('/data', require('./routes/calendar'));

app.get('/api', function(req, res){
    res.json({ message: "Hello from server!" });
 });
 app.get('/', function (req, res){
});

app.get('/login/register', function (req, res) {});
app.get('/login', function (req, res) {});
app.get('/main', function (req,res) {  
  res.json({ user:global.haveUser});
});

app.use('*', function(req, res){
  res.status(404).json('page not found');
});

//
async function run(){    
    app.listen(3001, ()=>console.log('server start'));
}
run().catch(err => console.log(err));