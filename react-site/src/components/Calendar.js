import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles


function MyCalendar({ activeMenu }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }
  
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
        <div style={{color: 'white', fontSize: '20px', fontFamily: 'revert'}}>
          <form>
            <label htmlFor="amount"> amount: </label>
            <input type="amount" id="amount:" name="amount:"/>
          </form>
        </div>
      </div>
      
    ) : null
    
  )
}




export default MyCalendar;
