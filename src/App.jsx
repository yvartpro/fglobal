import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Home from "./Home"
import { Protected } from "./Protected"


const App = () =>{
  return <Router>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
}

export default App
