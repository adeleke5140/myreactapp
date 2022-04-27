import React, { useState } from "react"
import "./App.css"

const HelloWorld = () => {
  const [count, setCount] = useState(0)

  function incrementCount(e) {
    return setCount(count + 1)
  }

  function decrementCount(e) {
    return setCount(count - 1)
  }
  return (
    <>
      <h1 className="first-heading">Hello World, I am Favour</h1>
      <div>counter </div>
      <button onClick={incrementCount}>+</button> {count}{" "}
      <button onClick={decrementCount}>-</button>
    </>
  )
}

//jsx

export default HelloWorld
