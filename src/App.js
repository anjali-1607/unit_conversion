import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Input } from "semantic-ui-react";

export default function App() {
  return (
    <>
      <div className="main_div">
        <div className="div1">
          <h2>UNIT CONVERSION</h2>
        </div>
        <div className="div2">
          <Dropdown
            className="drop_1"
            floating
            labeled
            search
            text="Select Unit"
          />
          <Dropdown
            className="drop_1"
            floating
            labeled
            search
            text="Select Unit"
          />
        </div>
        <div className="div3">
          <Input />
        </div>
      </div>
    </>
  );
}
