import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const currencyCodeMap = {
  Pounds: "GBP",
  Dollars: "USD",
  Euros: "EUR",
  Shekels: "ILS",
};

function MyCalendar({ activeMenu }) {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [apiData, setApiData] = useState(null);
  const [message, setMessage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [history, setHistory] = useState(null);
  const currencies = ["GBP", "USD", "EUR", "ILS"];
 
  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleDateChange = date => {
    console.log({date})
    date.setHours(13)
    setSelectedDate(date); 
  };

  //handel my history
  const handleHistory = (rst) => {
    const historyData = {
      category:'Historical_and_current_rates',
      search:{fromCurrency, toCurrency, selectedDate}, 
      results:rst
    };
    try{
      fetch('http://localhost:3001/history/update',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(historyData)
      })
      .then((res) => res.json())      
    }
    catch(err) {console.log(err);}
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/data?date=${selectedDate.toISOString().split('T')[0]}&currency1=${fromCurrency}&currency2=${toCurrency}`
        );
      const data = await response.json();
      if(data.message){ setMessage(data.message);}
      if (data.value) {
        setApiData(data.value);        
        setMessage(null);
        handleHistory(`1 ${fromCurrency} = ${data.value} ${toCurrency}`);
      } else {
        setApiData(null);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
      setApiData(null);
    }
  };
  return (
    activeMenu === "Historical_and_current_rates" ? (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
        <br></br>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          
        />
        <br></br>
        <div style={{color: 'white', fontSize: '20px'}}>
          <p>Selected date: {selectedDate.toLocaleDateString().slice(0, 10)} </p>
          </div>
          <br></br>
       <div style={{color: 'white', fontSize: '20px'}}>
          <label htmlFor="fromCurrency">Convert from: </label>
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            <option value="">Select Currency</option>
            {currencies
              .filter((currency) => currency !== toCurrency)
              .map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
          </select>
        <br></br>
        <br></br>
        <div style={{color: 'white', fontsize: '20px'}}>
          <label htmlFor="toCurrency">Convert to: </label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            <option value="">Select Currency</option>
            {currencies
              .filter((currency) => currency !== fromCurrency)
              .map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
          </select>
        </div>
        </div>
        <br></br>
        <form onSubmit={MyCalendar}>
        <div style={{textAlign: 'center'}}><button type="button" onClick={handleSubmit}>submit</button></div>
        <br></br>
        {apiData && (
          <div style={{color: 'white', fontSize: '20px'}}>
            1 {fromCurrency} = {apiData} {toCurrency}
          </div>
        )}
        {message && (
          <div style={{color: 'red', fontSize: '20px'}}>
           {message}
          </div>
        )}
        </form>

       </div> 
    ) : null
  )
}
export default MyCalendar;