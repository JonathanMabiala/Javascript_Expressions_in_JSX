import React from "react";
import ReactDOM from "react-dom";

const name = "John";
const lucky_number = Math.round(Math.random() * 10);
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p> Your lucky number is {lucky_number} </p>
  </div>,
  document.getElementById("root")
);
