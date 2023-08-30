const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'registered'
});

router.get('/', function (req, res){
    // console.log("user: " + global.user);
    let sendHistory;
    let sql = `SELECT history FROM users WHERE email='${global.user}'`;
    con.query(sql, async (err, rst) => {
        if (rst.length > 0 ) {
            sendHistory = JSON.parse(rst[0].history);
            // console.log("get history: " + sendHistory);
            res.json({ history: sendHistory });
        }
        else {
            console.log("err: " + err);
            res.json(err);
        }
        //console.log("send: " + sendHistory);
    });
});

router.post('/update', async function (req, res) {
    console.log("user:" + global.user);
    let allHistory = [{},{},{}];
    let sql = `SELECT history FROM users WHERE email='${global.user}'`;
    await con.query(sql, (err, rst) => {
        rst[0].history ? allHistory = JSON.parse(rst[0].history) : console.log("err: " + err);     
        let { category, search, results } = req.body;
        let inObject;
        if (category == 'Currency_conversion') { //display
            inObject = {
                category: category,
                search: `Convert ${search.amount} ${search.fromCurrency} to ${search.toCurrency}`,
                results: results
            };
        }
        else if (category == 'Historical_and_current_rates') { //calendar
            inObject = {
                category: category,
                search: `Convert ${search.fromCurrency} to ${search.toCurrency},date: ${search.selectedDate}`,
                results: results
            };
        }       
        allHistory.shift();
        allHistory.push(inObject);
        allHistory = JSON.stringify(allHistory);
        sql = `UPDATE users SET history='${allHistory}' WHERE email = '${global.user}'`;
        con.query(sql, (err) => {
            err ? console.log(err) : console.log('update history');
        });
    });
});

// router.get('/clear', async function(req, res){//for dibug only. user havent acsess
//     let allHistory = [{},{},{}];
//     let sql= `UPDATE users SET history='${JSON.stringify(allHistory)}' WHERE email = '${global.user}'`;
//         await con.query(sql, (err)=>{
//             console.log(err?err.message:global.user);
//         });
//     res.send('clear');
// })

module.exports = router;