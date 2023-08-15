import React, { useState, useEffect } from "react";

const currencyCodeMap = {
  Pounds: "GBP",
  Dollars: "USD",
  Euros: "EUR",
  Shekels: "ILS",
};

function Display({ activeMenu }) {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [exchangeRates, setExchangeRates] = useState({});
  const [conversionResult, setConversionResult] = useState(null);
  const currencies = ["Pounds", "Dollars", "Euros", "Shekels"];

  useEffect(() => {
    // Fetch exchange rates when the component mounts
    fetchExchangeRates();
  }, [fromCurrency]);

  const fetchExchangeRates = async () => {
    try {
      if (!fromCurrency) {
        console.log("Please select a 'Convert from' currency.");
        return;
      }

      const apiKey = "9f96c186ad4629eb33dbb614e88e4569"; // Replace with your API key
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${currencyCodeMap[fromCurrency]}`
      );
      const data = await response.json();
      setExchangeRates(data.rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

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
    if (!amount || !fromCurrency || !toCurrency) {
      console.log("Please enter all required information.");
      return;
    }

    if (!exchangeRates[currencyCodeMap[toCurrency]]) {
      console.log("Exchange rate not available for the selected currency.");
      return;
    }

    const convertedAmount = (
      amount * exchangeRates[currencyCodeMap[toCurrency]]
    ).toFixed(2);

    // Update the state with the calculated result
    setConversionResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
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
          <br />
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
        <br>
        </br>
        <div >
        {conversionResult && <div>{conversionResult}</div>}
        </div>
       
      </div>
    );
  }

  return (
    <div className="display">
      {activeMenu === "My history" && <div>This is my history</div>}
    </div>
  );
}

export default Display;