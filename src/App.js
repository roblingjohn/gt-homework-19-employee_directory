import React from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <nav className="header">
        <h1>Employee Directory</h1>
      </nav>
      <Table />
    </div>
  );
}

export default App;
