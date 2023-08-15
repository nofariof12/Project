app.get('/data', (req, res) => {
  const { date, currency1, currency2 } = req.query;
  
  if (!currency1 || !currency2 || !date) {
      return res.status(400).send("Please provide date, currency1, and currency2 as query parameters.");
  }

  const csvFile = `${currency1}-${currency2}.csv`;

  if (!fs.existsSync(csvFile)) {
      return res.status(404).send("CSV file for the given currency pair not found.");
  }

  const [year, month, day] = date.split('-');
  const searchDate = `${day}.${month}.${year}`;

  let value;
  fs.createReadStream(csvFile)
      .pipe(csv())
      .on('data', (row) => {
          if (row.ds === searchDate) {
              value = row.y;
          }
      })
      .on('end', () => {
          if (value) {
              res.json({ date: date, value: value });
          } else {
              res.status(404).send("Date not found in the CSV file.");
          }
      })
      .on('error', (error) => {
          res.status(500).send("Error reading the CSV file.");
      });
});

