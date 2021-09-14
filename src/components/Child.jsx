export default function Child({ title, onReset }) {
  return (
    <div>
      <p>The current title is {title}</p>
      <button onClick={onReset}>Reset title</button>
    </div>
  )
}