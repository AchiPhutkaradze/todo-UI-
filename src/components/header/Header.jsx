import React, { useEffect } from "react";
import "./header.css";

export default function Header(props) {
  const foo = () => {
    let currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    if (m.toString().length == 1) {
      m = "0" + m;
    }
    if (h == 0) {
      h = "0" + h;
    }
    const hm = `${h}:${m} `;
    props.setTime(hm);
  };
  useEffect(() => {
    foo();
    setInterval(foo, 60000);
  }, []);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[props.currentTimeState.getDay()];
  const day = props.currentTimeState.getDate();
  return (
    <div className="main">
      <div className="time">
        {`${dayOfWeek}
        ${day}`}
        <div className="clock">
          {props.time > 12 < 0 ? `${props.time}AM` : `${props.time}PM`}
        </div>
      </div>
    </div>
  );
}
