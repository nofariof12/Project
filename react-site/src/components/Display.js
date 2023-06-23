import React, { useState } from "react";

function Display({ activeMenu }) {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const currencies = ["Pounds", "Dollars", "Euros", "Shekels"];

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    const inputAmount = event.target.value;
    // Validate input as a positive number
    if (/^\d*\.?\d*$/.test(inputAmount)) {
      setAmount(inputAmount);
    }
  };

  const handleCalculate = () => {
    // Perform currency conversion calculation
    console.log(`Converting ${amount} ${fromCurrency} to ${toCurrency}`);
  };

  if (activeMenu === "Currency_conversion") {
    return (
      <div className="display">
        <div>
          <label htmlFor="amount">Amount:</label>
          <br />
          <br />
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div>
          <br>
          </br>
          <label htmlFor="fromCurrency">Convert from:</label>
          <br />
          <br />
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
        </div>
        <div>
          <label htmlFor="toCurrency">Convert to:</label>
          <br />
          <br />
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
        <button onClick={handleCalculate}>Calculate</button>
      </div>
    );
  }

  return (
    <div className="display">
      {activeMenu === "My history" && <div>This is my history</div>}
      {activeMenu === "Historical_and_current_rates" && (
        <div>This is historical and current rates</div>
      )}
    </div>
  );
}

export default Display;
