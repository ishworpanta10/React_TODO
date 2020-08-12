import React from "react";
import logo from "./logo.svg";
import "./App.css";

function formatName(user) {
  if (user) {
    return "Welcome " + user.fname;
  }
  return "Welcome Stranger";
}

const user = {
  fname: "Ishwor",
  lname: "Panta",
};

// const name = "Ishwor Panta";
// const element = <div>Hello , {name}</div>;
const element = (
  <div>
    <h1>
      {formatName(user)}
    </h1>

    <h2>
      It is {new Date().toLocaleDateString()}
      <br>
      </br>
      Current Time is {new Date().toLocaleTimeString()}
    </h2>
  </div>
);

function App() {
  return element;
}

export default App;
