import React, { useState } from "react";
import ReactDOM from "react-dom";

import InputField from "../src/Components/InputField";

import "./styles.css";

const App = () => {
  const [WinTimes, addWinTimes] = useState(0);

  const [LoseTimes, addLoseTime] = useState(0);

  const [AccTotal, addAccTotal] = useState(0);

  const [ValueTrade, addValueTrade] = useState(0);

  const totalTrades = WinTimes + LoseTimes;

  return (
    <React.Fragment>
      <h1>Macd Trade</h1>
      <p>AccTotal Input:</p>
      <div className="inputs_value">
        <input
          type="text"
          value={AccTotal}
          onChange={(event) => addAccTotal(event.target.value)}
        />

        <p>ValueTrade Input:</p>
        <input
          type="text"
          value={ValueTrade}
          onChange={(event) => addValueTrade(event.target.value)}
        />
      </div>

      <div>
        <p>AccTotal:{AccTotal}</p>
        <p>Value Per {ValueTrade} </p>

        <button
          className="Button_Win"
          onClick={() => addWinTimes(WinTimes + 1)}
        >
          Win
        </button>
        <p>{WinTimes}</p>
      </div>
      <div>
        <button
          className="Button_Lose"
          onClick={() => addLoseTime(LoseTimes + 1)}
        >
          Lose
        </button>
        <p>{LoseTimes}</p>
      </div>

      <div className="info_section">
        {totalTrades ? (
          <p>WinRate: {((WinTimes / totalTrades) * 100).toFixed(2)}%</p>
        ) : null}
      </div>

      <InputField WinTimes={WinTimes} LoseTimes={LoseTimes} />
    </React.Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
