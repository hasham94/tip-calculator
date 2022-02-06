import React from "react";
import "./styles.css";

const Calculations = () => {
  return (
    <div className="resultsWrapper">
      <div className="results">
        <div className="resultBox">
          <h3>
            Tip Amount <span>/ person</span>
          </h3>
          <span className="amount">$0.00</span>
        </div>
        <div className="resultBox">
          <h3>
            Total <span>/ person</span>
          </h3>
          <span className="amount">$0.00</span>
        </div>
      </div>
      <button>Reset</button>
    </div>
  );
};

export default Calculations;
