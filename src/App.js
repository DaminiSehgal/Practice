import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
  const [text, setText] = useState("Hello World");
  const [count, setCount] = useState(0);
  const clickFunction = () => {
    setText("Button is Clicked");
    setCount((count) => count + 2);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        {text} {count > 0 && <span>{count}</span>}
      </h2>
      <button onClick={clickFunction}>Click Me</button>
    </div>
  );
}
