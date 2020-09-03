import React from "react";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Card from "./Components/Card";
import "./Components/global.css";
import "./Components/layout.css";

function App() {
  return (
    <header className="header">
      <div className="container">
        <NavBar />
        <Content />
        <Card />
      </div>
    </header>
  );
}

export default App;
