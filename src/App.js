import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Dropdown, Input } from "semantic-ui-react";

const options = [
  { key: "kg", text: "kg", value: "kg" },
  { key: "gm", text: "gm", value: "gm" },
  { key: "Litre", text: "Litre", value: "Litre" },
  { key: "ml", text: "ml", value: "ml" },
  { key: "Km", text: "Km", value: "Km" },
  { key: "m", text: "m", value: "m" },
  { key: "Cm", text: "Cm", value: "Cm" },
];

export default function App() {
  return (
    <>
      <div className="main_div">
        <nav className="navbar">
          {" "}
          <h2>Unit Converter</h2>
        </nav>
        <div className="ans_div">
          <Input disabled size="massive" />
        </div>
        <div className="from_div">
          <label>
            <p>From</p>
          </label>
        </div>
        <div className="unit_div1">
          <Input
            size="large"
            label={<Dropdown defaultValue="" options={options} />}
            labelPosition="right"
          />
        </div>
        <div className="unit_div2">
          <Input
            size="large"
            label={<Dropdown options={options} />}
            labelPosition="right"
          />
        </div>
        <div className="type_div">
          <Input size="huge" placeholder="Type..." />
        </div>
        <div className="convert_div">
          <Button className="btn_convert" size="huge">
            <h1> Convert</h1>
          </Button>
        </div>
      </div>
    </>
  );
}
