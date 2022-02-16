import Calendar from "./components/calendar";
import Header from "./components/header";
import "./styles.css"
import React, { useState } from "react";



function App() {
  return (
    <div>
      <Header />
      <Calendar />
    </div>
  );
}

export default App;
