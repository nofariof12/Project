const express = require('express');
const app = express();
const cors = require('cors');

const logIn_router = require('./routes/logIn');
const creatDB_router = require('./routes/createDB');

global.haveUser = false;

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
  global.haveUser = false;
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

// const fs = require('fs');
// const csv = require('csv-parser');

// const app = express();
// const PORT = 3000;

// app.get('/data/', (req, res) => {
//     const { date, currency1, currency2 } = req.query;
    
//     if (!currency1 || !currency2 || !date) {
//         return res.status(400).send("Please provide date, currency1, and currency2 as query parameters.");
//     }

//     const csvFile = `${currency1}-${currency2}.csv`;

//     if (!fs.existsSync(csvFile)) {
//         return res.status(404).send("CSV file for the given currency pair not found.");
//     }

//     const [year, month, day] = date.split('-');
//     const searchDate = `${day}.${month}.${year}`;

//     let value;
//     fs.createReadStream(csvFile)
//         .pipe(csv())
//         .on('data', (row) => {
//             if (row.ds === searchDate) {
//                 value = row.y;
//             }
//         })
//         .on('end', () => {
//             if (value) {
//                 res.json({ date: date, value: value });
//             } else {
//                 res.status(404).send("Date not found in the CSV file.");
//             }
//         })
//         .on('error', (error) => {
//             res.status(500).send("Error reading the CSV file.");
//         });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

