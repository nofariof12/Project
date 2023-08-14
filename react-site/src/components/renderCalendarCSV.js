import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Papa from 'papaparse';

function CalendarWithCSVData() {
  const [csvData, setCsvData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('foreign exchange DATA\ILS\ILS_GBP_pred.csv');
      const text = await response.text();
      const parsedData = Papa.parse(text, { header: true }).data;
      setCsvData(parsedData);
    }

    fetchData();
  }, []);

  const formattedCsvData = csvData.map(item => ({
    ...item,
    dt: new Date(item.dt), // Convert date strings to Date objects
  }));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Calendar with CSV Data</h2>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        tileContent={({ date }) => {
          const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
          const matchingEvents = formattedCsvData.filter(item => {
          const eventDate = item.date.toISOString().split('T')[0]; // Convert to ISO date string
          console.log(eventDate);
          console.log(formattedCsvData);
            return eventDate === formattedDate;
          
          });
        
          if (matchingEvents.length > 0) {
            return <div>{matchingEvents.length} events</div>;
          }

          return null;
        }}
      />
    </div>
  );
}

export default CalendarWithCSVData;
