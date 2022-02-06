import React from "react";
import MetaFields from "./MetaFields";
import Calculations from "./Calculations";
import "./styles.css";

const Calculator = () => {
  return (
    <div className="wrapper">
      <span>
        SPLI <br />
        TTER
      </span>
      <div className="calculatorWrapper">
        <MetaFields />
        <Calculations />
      </div>
    </div>
  );
};

export default Calculator;
