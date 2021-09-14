import { useState } from "react";
import useOnChange from "../hooks/useOnChange";

export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount || 0);
  const { value, onChange } = useOnChange("")
  const [showSearch, setShowSearch] = useState(false);

  const onClickHandler = () => setCount(prevCount => prevCount + 1)
  const reset = () => setCount(initialCount || 0)

  console.log('render')

  return (
    <div>
      <button onClick={() => setShowSearch(prevShowSearch => !prevShowSearch)}>
        Toggle input search
      </button>

      {showSearch && (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
      )}

      <button onClick={onClickHandler} type="button">{count}</button>
      <button onClick={reset} type="button">Reset</button>
    </div>
  )
}

