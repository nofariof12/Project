const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');
const { text } = require('express');
const app = express();

app.use(cors());
app.use(express.json());
const PORT=3001;

console.log("test")
app.get('/data', (req, res) => {
    const { date, currency1, currency2 } = req.query;
    if (!currency1 || !currency2 || !date) {
      return res
        .status(400)
        .send(
          'Please provide date, currency1, and currency2 as query parameters.'
        );
    }
    
    const csvFile = `data/${currency1}_${currency2}.csv`;
    console.log(text)
        if (!fs.existsSync(csvFile)) {
        return res.status(404).send("CSV file for the given currency pair not found.");
    }

    const [year, month, day] = date.split('/');
    const searchDate = `${day}.${month}.${year}`;
    console.log(searchDate);
    let value;
  
    fs.createReadStream(csvFile)
    .pipe(csv(['ds', 'yhat'])) //set the column names manually
    .on('data', (row) => {
      if (row.ds === searchDate) {
        //once you find the correct date, there is no need to search more (unless there are 2 rows with the same date, which doesn't make sense if I understand correctly)
        value = row.yhat;
        console.log(value);
      }
    })
    .on('end', () => {
      if (value) {
        res.json({ date: date, value: value });
      } else {
        res.status(404).send('Date not found in the CSV file.');
      }
    })
    .on('error', (error) => {
      res.status(500).send('Error reading the CSV file.');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
