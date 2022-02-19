import React from "react";

function App() {
  const print = () => {
    console.log('print me')
  }
  return (
    <div>
      <h2>Hello World!</h2>
      <button onClick={print}>click</button>
    </div>
  )
}

export default App;