import React from "react";
//import { useState } from "react";
import "./menu.css";

function Menu({ setActiveMenu }) {
  const handleCurrencyConversionClick = () => {
    setActiveMenu("Currency_conversion");
  };

  return (
    <div className="menu">
      <div className="menu-item" onClick={() => setActiveMenu("My_history")}>
        My history
      </div>
      <div className="menu-item" onClick={handleCurrencyConversionClick}>
        Currency conversion
      </div>
      <div
        className="menu-item"
        onClick={() => setActiveMenu("Historical_and_current_rates")}
      >
        Historical and future rates
      </div>
    </div>
  );
}

export default Menu;
