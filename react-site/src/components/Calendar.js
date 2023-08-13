import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles


function MyCalendar({ activeMenu }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }
  console.log("in Calendar")
  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  )
}



export default MyCalendar;
