import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Dropdown, Input } from "semantic-ui-react";
import axios from "axios";

const options1 = [
  { key: "Km", text: "Km", value: "km" },
  { key: "m", text: "m", value: "m" },
  { key: "cm", text: "cm", value: "cm" },
  { key: "mm", text: "mm", value: "mm" },
  { key: "in", text: "in", value: "in" },
  { key: "ft", text: "ft", value: "ft" },
  { key: "ft-us", text: "ft-us", value: "ft-us" },
  { key: "mi", text: "mi", value: "mi" },
  { key: "yd", text: "yd", value: "yd" },
  { key: "nm", text: "nm", value: "nm" },
  { key: "μm", text: "μm", value: "μm" },
  { key: "nMi", text: "nMi", value: "nMi" },
];
const options2 = [
  { key: "Km", text: "Km", value: "km" },
  { key: "m", text: "m", value: "m" },
  { key: "cm", text: "cm", value: "cm" },
  { key: "mm", text: "mm", value: "mm" },
  { key: "in", text: "in", value: "in" },
  { key: "ft", text: "ft", value: "ft" },
  { key: "ft-us", text: "ft-us", value: "ft-us" },
  { key: "mi", text: "mi", value: "mi" },
  { key: "yd", text: "yd", value: "yd" },
  { key: "nm", text: "nm", value: "nm" },
  { key: "μm", text: "μm", value: "μm" },
  { key: "nMi", text: "nMi", value: "nMi" },
];

// const opr = () => {
//   const [value, setValue] = useState(0);
//   setValue("anjaki");
// };

export default function App() {
  const [data, setdata] = useState("");
  const [op, setOp] = useState("");
  const textt = (num) => {
    setdata({ ...data, value: num.target.value });
    console.log(num.target.value);
  };
  console.log(data);

  const from = (u, { value }) => {
    console.log(value);
    setdata({ ...data, from: value });
  };
  const to = (t, { value }) => {
    console.log({ ...data, to: value });
    setdata({ ...data, to: value });
  };

  const convert = async () => {
    const options = {
      // method: "GET",
      // url: "https://measurement-unit-converter.p.rapidapi.com/length",
      params: data,

      headers: {
        "X-RapidAPI-Key": "44fd12d7e9mshc97fba051aa42bbp1e55c5jsnc2dd769b5228",
        "X-RapidAPI-Host": "measurement-unit-converter.p.rapidapi.com",
      },
    };
    await axios
      .get("https://measurement-unit-converter.p.rapidapi.com/length/", options)
      .then((res) => {
        console.log(res.data);
        setOp(res.data.result);
        // console.log("helllo", setdata);
      });
  };

  return (
    <>
      <div className="main_div">
        <nav className="navbar">
          {" "}
          <h2>Unit Length Converter</h2>
        </nav>
        <div className="ans_div">
          <Input
            size="massive"
            value={op}
            // onChange={(data) => setAns(data.target.value)}
          />
        </div>
        <div className="from_div">
          <label>
            <p>From</p>
          </label>
        </div>
        <div className="unit_div1">
          <Input
            onChange={textt}
            size="large"
            label={<Dropdown options={options1} onChange={from} />}
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
            value={op}
            readOnly
            label={<Dropdown options={options2} onChange={to} />}
            labelPosition="right"
          />
        </div>
        {/* <div className="type_div">
          <Input size="huge" placeholder="Type..." />
        </div> */}
        <div className="convert_div">
          <button className="btn_convert" onClick={convert}>
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
