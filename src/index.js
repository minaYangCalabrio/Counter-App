import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
// counter does not need a curly bracket because it is export default
import App from "./App";

ReactDom.render(<Counters />, document.getElementById("root"));
