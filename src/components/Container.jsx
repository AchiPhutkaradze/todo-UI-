import React, { useState, useEffect } from "react";
import "./container.css";
import Delete from "../assets/delete.svg";
import Plus from "../assets/plus.svg";

function Container(props) {
  const [value, setValue] = useState("");
  const [allTodo, setAllTodo] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[props.currentTimeState.getDay()];

  const btn = () => {
    setAllTodo([
      ...allTodo,
      {
        text: value,
        time: props.time,
        day: dayOfWeek,
      },
    ]);
    setValue("");
  };
  const user = {
    ...allTodo,
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(allTodo));
  }, [allTodo]);
  //remove function
  const deleteBtn = (deletingTodo, e) => {
    const deleteTodo = allTodo.filter(
      (todo) => todo.text !== deletingTodo.text
    );
    setAllTodo(deleteTodo);
  };
  return (
    <div className="container">
      <div className="input-div">
        <input
          type="text"
          className="note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit" className="add" onClick={btn}>
          <img src={Plus} />
        </button>
      </div>
      <form className="texts">
        <div className="child">
          {allTodo.map((item, index) => {
            return (
              <div className="list" key={index}>
                <div className="time-text">
                  <span className="inp-value" key={index}>
                    {item.text}
                  </span>
                  <div className="day-time">
                    <div className="item-day">{item.day}</div>
                    at
                    <div className="item-time">
                      {" "}
                      {item.time > 12 < 0 ? `${item.time}AM` : `${item.time}PM`}
                    </div>
                  </div>
                </div>

                <div className="chkb-delete">
                  <input type="checkbox" className="icon-circle" />
                  <label className="circle"> </label>
                  <button
                    type="submit"
                    className="delete-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteBtn(item);
                    }}
                  >
                    <img src={Delete} />
                  </button>
                  {/* <img src={Delete} className="delete-icon" /> */}
                  {/* </label> */}
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}
export default Container;
