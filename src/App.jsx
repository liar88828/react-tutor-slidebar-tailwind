import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { SlideBar } from "./components/SlideBar";

const App = () => (
  <div
    style={
      {
        background: ' linear-gradient(180deg, blue, purple)'
      }}
  >
    <SlideBar />
    {/* hahaha */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
