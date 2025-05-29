import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>você clicou {count} vezes</p>
      <button
        onClick={() => {
          let index = count;
          setCount((index += 1));
        }}
      >
        <p>Clique</p>
      </button>
    </div>
  );
}

export default App;
