import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Dropdown, Input } from "semantic-ui-react";

const options1 = [
  { key: "kg", text: "kg", value: "kg" },
  { key: "gm", text: "gm", value: "gm" },
  { key: "Litre", text: "Litre", value: "Litre" },
  { key: "ml", text: "ml", value: "ml" },
  { key: "Km", text: "Km", value: "Km" },
  { key: "m", text: "m", value: "m" },
  { key: "Cm", text: "Cm", value: "Cm" },
];
const options2 = [
  { key1: "kg", text1: "kg", value1: "kg" },
  { key2: "gm", text2: "gm", value2: "gm" },
  { key: "Litre", text: "Litre", value: "Litre" },
  { key: "ml", text: "ml", value: "ml" },
  { key: "Km", text: "Km", value: "Km" },
  { key: "m", text: "m", value: "m" },
  { key: "Cm", text: "Cm", value: "Cm" },
];

// const opr = () => {
//   const [value, setValue] = useState(0);
//   setValue("anjaki");
// };

export default function App() {
  return (
    <>
      <div className="main_div">
        <nav className="navbar">
          {" "}
          <h2>Unit Converter</h2>
        </nav>
        <div className="ans_div">
          <Input size="massive" />
        </div>
        <div className="from_div">
          <label>
            <p>From</p>
          </label>
        </div>
        <div className="unit_div1">
          <Input
            size="large"
            label={<Dropdown options={options1} />}
            labelPosition="right"
          />
        </div>
        <div className="to_div">
          <label>
            <p>To</p>
          </label>
        </div>
        <div className="unit_div2">
          <Input
            type="integer"
            size="large"
            label={<Dropdown options={options2} />}
            labelPosition="right"
          />
        </div>
        {/* <div className="type_div">
          <Input size="huge" placeholder="Type..." />
        </div> */}
        <div className="convert_div">
          <button className="btn_convert">
            <h3> Convert</h3>
          </button>
        </div>
        <nav
          style={{
            width: "auto",
            height: "3.5em",
            marginTop: "6em",
            backgroundColor: "#046c7a",
          }}></nav>
      </div>
    </>
  );
}
