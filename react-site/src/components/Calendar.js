import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles


function MyCalendar({ activeMenu }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  console.log(activeMenu)
  
  return (
    activeMenu === "Historical_and_current_rates" ? (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
        <h1>My Calendar</h1>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>
    ) : null
  )
}




export default MyCalendar;
