import React, { useState } from 'react';
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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currencies = ["GBP", "USD", "EUR", "ILS"];
 
  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };
   
  const handleDateChange = date => {
    setSelectedDate(date); // עדכון המשתנה כאשר המשתמש מבחין תאריך
  };
const handleSubmit = async () => {
  try {
    debugger
    const response = await fetch(`http://localhost:4000/data?date=${selectedDate.toISOString().split('T')[0]}&currency1=${fromCurrency}&currency2=${toCurrency}`);
    const data = await response.json();

    // Check if data is not empty
    if (data.value) {
      setApiData(data.value);
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
          <p>Selected date: {selectedDate.toLocaleDateString()} </p>
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
        <input type="submit" value="Submit" onClick={handleSubmit} />
        {apiData && (
          <div style={{marginTop: '20px', color: 'white'}}>
            <strong>Value: </strong> {apiData}
          </div>
        )}
        </form>

       </div> 
    ) : null
  )
}
export default MyCalendar;
