import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const onClickCountup = () => setCount(count + 1);
  console.log("App");
  return (
    <div className="App">
      <input />
      <br />
      <br />
      <button>表示</button>
    </div>
  );
}
