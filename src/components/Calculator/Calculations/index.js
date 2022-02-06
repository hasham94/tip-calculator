import React from "react";
import "./styles.css";

const Calculations = ({ tipAmount, total, resetFieldsHandler }) => {
  return (
    <div className="resultsWrapper">
      <div className="results">
        <div className="resultBox">
          <h3>
            Tip Amount <span>/ person</span>
          </h3>
          <span className="amount">${tipAmount}</span>
        </div>
        <div className="resultBox">
          <h3>
            Total <span>/ person</span>
          </h3>
          <span className="amount">${total}</span>
        </div>
      </div>
      <button onClick={resetFieldsHandler}>Reset</button>
    </div>
  );
};

export default Calculations;
