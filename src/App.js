import Counter from "./components/Counter"
import InputTitle from "./components/InputTitle"
import InputTitleClass from "./components/InputTitleClass"
import CounterClass from "./components/CounterClass"
import './App.css';
import { useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(true)

  return (
    <div className="App">
      <Counter />
      {/* <Counter initialCount={10} /> */}

      <button onClick={() => setShowInput(!showInput)}>ShowInput</button>

      {/* {showInput && (
        <InputTitleClass />
      )} */}

      {showInput && (
        <div>
          <InputTitle />
        </div>
      )}
    </div>
  );
}

export default App;
