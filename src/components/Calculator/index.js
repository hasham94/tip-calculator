import React, { useEffect, useState } from "react";
import MetaFields from "./MetaFields";
import Calculations from "./Calculations";
import LogoImg from "../../resources/images/logo.svg";
import "./styles.css";

const Calculator = () => {
  const [tipAmount, setTipAmount] = useState("0");
  const [tipPerPerson, setTipPerPerson] = useState("0");
  const [total, setTotal] = useState("0");
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [isValidPeople, setIsValidPeople] = useState(true);
  const [tip, setTip] = useState("");

  useEffect(() => {
    if (people === "0") {
      setIsValidPeople(false);
    } else {
      setIsValidPeople(true);
    }
    if (
      people.length > 0 &&
      bill.length > 0 &&
      people !== "0" &&
      people !== "0"
    ) {
      let tipToAdd = 0;
      if (tipAmount) {
        if (tipAmount.includes("%")) {
          let tipValue = tipAmount.replace("%", "");
          tipToAdd = (parseFloat(bill) * parseInt(tipValue)) / 100;
        } else {
          tipToAdd = parseFloat(tipAmount);
        }
      }
      tipToAdd = parseFloat(tipToAdd) / parseInt(people);
      const total = parseFloat(bill) / parseFloat(people) + tipToAdd;
      setTipPerPerson(tipToAdd.toFixed(2));
      setTotal(total);
    }
  }, [bill, people, tipAmount]);

  const resetFieldsHandler = () => {
    setPeople("");
    setBill("");
    setTotal("0");
    setTipPerPerson("0");
  };
  return (
    <div className="wrapper">
      <img className="logo" src={LogoImg} alt="logo" />
      <div className="calculatorWrapper">
        <MetaFields
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          isValidPeople={isValidPeople}
          setTipAmount={setTipAmount}
          setTip={setTip}
        />
        <Calculations
          tipAmount={tipPerPerson}
          total={total}
          resetFieldsHandler={resetFieldsHandler}
        />
      </div>
    </div>
  );
};

export default Calculator;
