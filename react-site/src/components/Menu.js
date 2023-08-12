import React from "react";
import "./menu.css";

function Menu({ setActiveMenu }) {
  const handleCurrencyConversionClick = () => {
    setActiveMenu("Currency_conversion");
  };
  const myCalendar = () => {
      setActiveMenu("Historical_and_current_rates");
  }
  
  
  return (
    <div className="menu">
      <div className="menu-item" onClick={() => setActiveMenu("My_history")}>
        My history
      </div>
      <div className="menu-item" onClick={handleCurrencyConversionClick}>
        Currency conversion
      </div>
      <div className="menu-item" onClick={myCalendar} >
        Historical and future rates
        <myCalendar/>
      </div>
    </div>
  );
}

export default Menu;