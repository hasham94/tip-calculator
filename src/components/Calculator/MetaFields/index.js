import React, { useState, useEffect } from "react";
import "./styles.css";
import DollarIcon from "../../../resources/images/icon-dollar.svg";
import UserIcon from "../../../resources/images/icon-person.svg";

const peopleRegex = /^[0-9\b]+$/;

const MetaFields = ({
  bill,
  setBill,
  people,
  setPeople,
  isValidPeople,
  setTipAmount,
}) => {
  const [customTip, setCustomTip] = useState("");
  const [tip, setTip] = useState("");

  const tipHandler = (value, isCustom) => {
    if (isCustom) {
      setCustomTip(value);
      setTipAmount(value);
      setTip("");
      return;
    }
    setTip(value);
    setTipAmount(value + "%");
  };
  return (
    <div className="formWrapper">
      <div className="fieldWrapper">
        <label>Bill</label>
        <div className="textField">
          <input
            type="number"
            value={bill}
            placeholder="0"
            onChange={(e) => setBill(e.target.value)}
          />
          <img src={DollarIcon} alt="dollar icon" />
        </div>
      </div>
      <div className="selectTipWrapper">
        <label>Select Tip %</label>
        <div className="selectionBox">
          {["5", "10", "15", "25", "50", ""].map((item) =>
            item ? (
              <span
                className={`selectTip ${tip === item && "selectedTip"}`}
                key={item}
                onClick={() => tipHandler(item)}
              >
                {item}%
              </span>
            ) : (
              <input
                key={item}
                className="selectTip"
                type="number"
                placeholder="Custom"
                value={customTip}
                onChange={(e) => tipHandler(e.target.value, true)}
              />
            )
          )}
        </div>
      </div>
      <div className="fieldWrapper">
        <label>
          Number of People
          {!isValidPeople && <span className="error">Can't be zero</span>}
        </label>
        <div className="textField">
          <input
            type="number"
            value={people}
            placeholder="0"
            onChange={(e) => {
              if (e.target.value === "" || peopleRegex.test(e.target.value)) {
                setPeople(e.target.value);
              }
            }}
          />
          <img src={UserIcon} alt="dollar icon" />
        </div>
      </div>
    </div>
  );
};

export default MetaFields;
