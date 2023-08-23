const express = require('express');
const router = express.Router();
const fs = require("fs");
const csv = require("csv-parser");

router.get('/', (req, res) => {
    const { date, currency1, currency2 } = req.query;
    if (!currency1 || !currency2 || !date) {
      return res
        .status(400)
        .json(
          {message:'One or more of the fields are missing'}
        );
    }
    
    const csvFile = `data/${currency1}_${currency2}.csv`;
        if (!fs.existsSync(csvFile)) {
        return res.status(404).json({message:"CSV file for the given currency pair not found."});
    }

    const [year, month, day] = date.split('-');
    const searchDate = `${day}/${month}/${year}`;
    let value;
  
    fs.createReadStream(csvFile)
    .pipe(csv(['ds', 'yhat']))
    .on('data', (row) => {
      if (row.ds === searchDate) {
        value = row.yhat;
      }
    })
    .on('end', () => {
      if (value) {
        res.json({ date: date, value: value });
      } else {
        res.status(404).json({message:'Date not found in the CSV file.'});
      }
    })
    .on('error', (error) => {
      res.status(500).json({message:'Error reading the CSV file.'});
    });
});

module.exports = router;