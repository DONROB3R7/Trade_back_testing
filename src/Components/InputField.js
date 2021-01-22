import React, { useState } from "react";

const InputField = (props) => {
  const WinTimes = Array.from(Array(props.WinTimes).keys());
  const LoseTimes = Array.from(Array(props.LoseTimes).keys());

  console.log(WinTimes);
  const listItemsWin = WinTimes.map((WinTime) => (
    <div className="win" key={WinTime}>
      {WinTime}
    </div>
  ));

  const listItemsnLose = LoseTimes.map((LoseTime) => (
    <div className="lose" key={LoseTime}>
      {LoseTime}
    </div>
  ));
  return (
    <React.Fragment>
      {listItemsWin}
      {listItemsnLose}
    </React.Fragment>
  );
};

export default InputField;
