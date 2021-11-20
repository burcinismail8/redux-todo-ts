import React from "react";
import "./App.css";
import Input from "./app/components/input";
import ToDoListContainer from "./app/components/toDoListCont";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <ToDoListContainer />
        <Input />
      </div>
    </div>
  );
}

export default App;
