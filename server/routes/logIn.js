const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'registered'
});

//
//regidter
router.post('/register', async function (req, res){      
    let email = req.body.email;
    let psw = req.body.password;
    let sql=`SELECT email FROM users WHERE email='${email}'`;
    await con.query(sql,async(err, results)=>
    {
        console.log(err?err.message:results);
        if(results.length==0){
            sql= `INSERT INTO users (email, password) VALUES ('${email}','${psw}')`;
            await con.query(sql, (err)=>{
                console.log(err?err.message:'insert user')
            });
            res.send(`successfully registered. welcome ${email}`);
        }
        else if(results.length>0){
            res.send('This email is already registered');
        }
        else{res.send('error');}  
    });    
})

//login
router.post('/',  async function (req, res){
    let email = req.body.email;
    let psw = req.body.psw;

    let sql=`SELECT password FROM users WHERE email='${email}'`;
    await con.query(sql,async(err, results)=>{
        if(!results[0]){            
            res.send("email doesn't exist");
        }
        else if(results[0].password==psw){
            res.redirect('/');
        }
        else{
            res.send('wrong password');
        }
    })
})

module.exports = router;