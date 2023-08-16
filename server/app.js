const express = require('express');
const app = express();
const cors = require('cors');

const logIn_router = require('./routes/logIn');
const creatDB_router = require('./routes/createDB');

//
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/login', logIn_router);
app.use('/create', creatDB_router);

app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
  });
app.get('/', function (req, res){
})
app.get('/login/add', function (req, res) {
});
app.get('/login', function (req, res) {    
});

//
async function run(){    
    app.listen(3001, ()=>console.log('server start'));
}
run().catch(err => console.log(err));