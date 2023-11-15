import Container from "./components/Container";
import React from "react";
import "./app.css";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [time, setTime] = useState("");
  const [currentTimeState, setCurrentTimeState] = useState(new Date());
  return (
    <>
      <div className="main-container">
        <Header
          time={time}
          setTime={setTime}
          currentTimeState={currentTimeState}
        />
        <Container
          time={time}
          setTime={setTime}
          currentTimeState={currentTimeState}
        />
      </div>
    </>
  );
}

export default App;
