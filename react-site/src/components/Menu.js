import React from "react";
import "./menu.css";

function Menu({ setActiveMenu }) {
  const handleCurrencyConversionClick = () => {
    setActiveMenu("Currency_conversion");
  };
  const setActiveMenuCalendar = () => {
      setActiveMenu("Historical_and_current_rates");
  }
  
  const setActiveTest = () => {
    setActiveMenu("test");
}
  return (
    <div className="menu">
      <div className="menu-item" onClick={setActiveMenuCalendar} >
        Historical and future rates
      </div>
      <div className="menu-item" onClick={() => setActiveMenu("My_history")}>
        My history
      </div>
      <div className="menu-item" onClick={handleCurrencyConversionClick}>
        Currency conversion
        
      </div>
    

    </div>
  );
}

export default Menu;