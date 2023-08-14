import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import CalendarWithCSVData from './renderCalendarCSV';



function MyCalendar({ activeMenu }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateChange = date => {
    setSelectedDate(date); // עדכון המשתנה כאשר המשתמש מבחין תאריך
  };

 
  return (
    activeMenu === "Historical_and_current_rates" ? (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
        <br></br>
        <br></br>
          <div style={{color: 'white', fontSize: '20px'}}>
          <p>Selected date: {selectedDate.toLocaleDateString()} </p>
          </div>
        <div style={{color: 'red', display: 'flex', padding: '15px', textAlign: 'center', fontSize: '20px'}}>
          <form>
            <label id='convert from'>convert from:  </label>
              <select>
              <option value="Pounds">Pounds</option>
              <option value="Dollars">Dollars</option>
              <option selected value="Euros">Euros</option>
              <option value="Shekels">Shekels</option>
              </select>
              <br></br>
              <br></br>
              <label id='convert to'>convert to:  </label>
              <select>
              <option value="Pounds">Pounds</option>
              <option value="Dollars">Dollars</option>
              <option selected value="Euros">Euros</option>
              <option value="Shekels">Shekels</option>
              </select>
              <br></br>
              <br></br>
          </form>
          <br></br> <br></br>
        </div>
          <input type="submit" value="Submit" />
          {/* <CalendarWithCSVData/> */}
       </div> 
    ) : null
  )
}




export default MyCalendar;
