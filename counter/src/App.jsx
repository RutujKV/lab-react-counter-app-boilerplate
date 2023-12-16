import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleAddd(){
         setCount((prev)=>prev+1);
  }

  function handleSub(){
        setCount((prev)=>prev-1);
  }

  function handleReset(){
      setCount(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <button onClick={handleAddd}>+</button> &nbsp;
      <button onClick={handleSub}  disabled={count==0}>-</button>&nbsp;
      <button onClick={handleReset}>Reset</button>
      </>
  )
}

export default App
