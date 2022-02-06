import React from "react";
import MetaFields from "./MetaFields";
import Calculations from "./Calculations";
import LogoImg from "../../resources/images/logo.svg";
import "./styles.css";

const Calculator = () => {
  return (
    <div className="wrapper">
      <img className="logo" src={LogoImg} alt="logo" />
      <div className="calculatorWrapper">
        <MetaFields />
        <Calculations />
      </div>
    </div>
  );
};

export default Calculator;
