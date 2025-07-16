import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Home from "./pages/Home"
import PresentationDRC from "./pages/Presentation"
import Join from "./pages/Join"
import Products from "./pages/Products"
import Testimonials from "./pages/Testimonials"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Header } from "./components/Header"
import { Protected } from "./Protected"
import AOS from "aos"
import "aos/dist/aos.css"


const App = () =>{
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/presentation/:country" element={<PresentationDRC/>}/>
          <Route path="/join/:country" element={<Join/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:country" element={<Products/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
