import React, { useState } from 'react';
import { add } from '../utils/StringCalculator';
import './Calculator.css';

function Calculator() {
  //Right now there is only one input field so the data will be stored in state, if more fields are required then we will do it using Formik.
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Function to handle the calculation using the `add` function
  const handleCalculate = () => {
    try {
      setError("");
      setResult(add(input.replaceAll("\\n", "\n")));
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="calculator-container">
      <h2>String Calculator</h2>
      <input
        type="text"
        className="calculator-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button className="calculator-button" onClick={handleCalculate}>
        Calculate
      </button>

      {/* Display error message if there is one */}
      {error && <p className="error-message">{error}</p>}

      {/* Display result if calculation is successful and there's no error */}
      {result !== null && !error && <p className="result-message">Result: {result}</p>}
    </div>
  );
}

export default Calculator;
