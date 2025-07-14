import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Home from "./Home"
import { Protected } from "./Protected"
import AOS from "aos"
import "aos/dist/aos.css"


const App = () =>{
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return <Router>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
}

export default App
