import React, { useState, useEffect } from "react";
import { P, NUMEROS, ICON } from "../style/count";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const CountDownTimer = ({ hoursMinSecs }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <h1>WE'RE LAUNCHING SOON</h1>
      <P>
        <NUMEROS>
          {" "}
          <p>
            {" "}
            14<pre>DAYS</pre>
          </p>{" "}
        </NUMEROS>
        <NUMEROS>
          {" "}
          <p>
            {" "}
            {`${hrs.toString().padStart(2, "0")}`} <pre>HOURS</pre>
          </p>
        </NUMEROS>
        <NUMEROS>
          {" "}
          <p>
            {" "}
            {`${mins.toString().padStart(2, "0")}`} <pre>MINUTES</pre>
          </p>
        </NUMEROS>
        <NUMEROS>
          {" "}
          <p>
            {" "}
            {`${secs.toString().padStart(2, "0")}`}
            <pre>SECONDS</pre>
          </p>
        </NUMEROS>
      </P>

      <ICON>
        <FacebookOutlined />

        <InstagramOutlined />
      </ICON>
    </div>
  );
};

export default CountDownTimer;
