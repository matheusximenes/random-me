import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListItemForm from "./components/ListItemForm";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div className="App">
      <ListItemForm />
      <ListItems />
    </div>
  );
}

export default App;
