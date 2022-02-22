import Calendar from "./components/calendar";
import Header from "./components/header";
import "./styles.css"
import React, { useState } from "react";
import Weather from "./components/weather";



function App() {
  return (
    <div>
      <Header />
      <Weather />
      <Calendar />

    </div>
  );
}

export default App;
