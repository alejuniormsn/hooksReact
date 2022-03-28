import {useState} from "react"

export default function EstadoReact() {

  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
  }

  const decrementCount = () => {
    setCount((prevState) => prevState - 1)
  }

  return (
    <div>
      <h2>useState</h2>
      <p>
        Contador : {count}
      </p>
      <button type="button" onClick={incrementCount}>Incremento</button>
      <button type="button" onClick={decrementCount}>Decremento</button>
      <hr />
    </div>
  )

}