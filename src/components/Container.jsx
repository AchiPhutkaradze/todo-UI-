import React, { useState, useEffect } from "react";
import "./container.css";
import Delete from "../assets/delete.svg";
import Plus from "../assets/plus.svg";
import { isToday, isYesterday } from "date-fns";

function Container(props) {
  const [value, setValue] = useState("");
  const [allTodo, setAllTodo] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );

  const day = (date) => {
    const daysOfWeek = date.getDay();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = dayNames[daysOfWeek];
    return day;
  };
  const btn = () => {
    setAllTodo([
      {
        text: value,
        date: new Date(),
      },
      ...allTodo,
    ]);
    setValue("");
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
          placeholder="Note"
        />

        <button type="submit" className="add" onClick={btn}>
          <img src={Plus} />
        </button>
      </div>
      <form className="texts">
        <div className="child">
          {allTodo.map((item, index) => {
            if (item.text != "") {
              return (
                <div className="list" key={index}>
                  <div className="time-text">
                    <span className="inp-value" key={index}>
                      {item.text}
                    </span>
                    <div className="day-time">
                      <div className="item-day">
                        {isToday(new Date(item.date))
                          ? "Today"
                          : isYesterday(new Date(item.date))
                          ? "Yesterday"
                          : day(new Date(item.date))}
                      </div>
                      at
                      <div className="item-time">
                        {new Date(item.date).getHours()}
                        {":"}
                        {new Date(item.date).getMinutes()}{" "}
                        {new Date(item.date).getHours() > 12 < 0 ? "AM" : "PM"}
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
                  </div>
                </div>
              );
            }
          })}
        </div>
      </form>
    </div>
  );
}
export default Container;
{
  /* {" "}
                        {item.time > 12 < 0
                          ? `${item.time}AM`
                          : `${item.time}PM`} */
}
