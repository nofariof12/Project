import React from "react";
import "./menu.css";

function Menu({ setActiveMenu }) {
  const handleCurrencyConversionClick = () => {
    setActiveMenu("Currency_conversion");
  };
  const setActiveMenuCalendar = () => {
      setActiveMenu("Historical_and_current_rates");
  }
  const setActiveMenuHistory = () => {
    setActiveMenu("My_history");
}
  
  return (
    <div className="menu">
      <div className="menu-item" onClick={setActiveMenuCalendar} >
        Historical and future rates
      </div>
      <div className="menu-item" onClick={setActiveMenuHistory}>
        My history
      </div>
      <div className="menu-item" onClick={handleCurrencyConversionClick}>
        Currency conversion
        
      </div>
    

    </div>
  );
}

export default Menu;