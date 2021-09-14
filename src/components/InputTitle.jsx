import { useState, useEffect } from "react"
import useOnChange from "../hooks/useOnChange";
import Child from "./Child";

const INITIAL_TITLE = "Hooks"

export default function InputTitle({ prop1 }) {
  const { value, onChange } = useOnChange(INITIAL_TITLE)

  const [count, setCount] = useState(0)

  return (
    <div>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child onReset={() => onChange(INITIAL_TITLE)} title={value} />
    </div>
  )
}