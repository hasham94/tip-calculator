import React from "react";
import "./styles.css";
import DollarIcon from "../../../resources/images/icon-dollar.svg";
import UserIcon from "../../../resources/images/icon-person.svg";

const MetaFields = () => {
  return (
    <div className="formWrapper">
      <div className="fieldWrapper">
        <label>Bill</label>
        <div className="textField">
          <input type="number" />
          <img src={DollarIcon} alt="dollar icon" />
        </div>
      </div>
      <div className="selectTipWrapper">
        <label>Select Tip %</label>
        <div className="selectionBox">
          {["5", "10", "15"].map((item) => (
            <span className="selectTip" key={item}>
              {item}%
            </span>
          ))}
        </div>
        <div className="selectionBox">
          {["25", "50", ""].map((item) =>
            item ? (
              <span className="selectTip" key={item}>
                {item}%
              </span>
            ) : (
              <input className="selectTip" type="text" placeholder="Custom" />
            )
          )}
        </div>
      </div>
      <div className="fieldWrapper">
        <label>Number of People</label>
        <div className="textField">
          <input type="number" />
          <img src={UserIcon} alt="dollar icon" />
        </div>
      </div>
    </div>
  );
};

export default MetaFields;
