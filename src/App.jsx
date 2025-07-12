import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)
useEffect(() => {
  addOne()
},[count])

const addOne = ()=>{
  setInterval(() => {
    setCount(count+1)
  },1000)
}
  return (
    <>
    {count && <p>{count} second</p>}
    <div className="text-center text-sky-500">Hello Ferdinand Global lovers !</div>
    </>
  )
}

export default App
