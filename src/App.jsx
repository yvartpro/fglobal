import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Home from "./pages/Home"
import PresentationDRC from "./pages/Presentation"
import Join from "./pages/Join"
import Products from "./pages/Products"
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import { Header } from "./components/Header"
import { Protected } from "./Protected"
import AOS from "aos"
import "aos/dist/aos.css"
import { WhatsAppFab } from "./components/WhatsAppFab"
import Blog from "./pages/Blog"
import { WhatsAppNumberContext } from "./WhatsAppNumberContext"

const WHATSAPP_NUMBER = "254111878523"; // Set your global WhatsApp number here

const App = () =>{
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <WhatsAppNumberContext.Provider value={WHATSAPP_NUMBER}>
      <Header/>
      <WhatsAppFab/>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/presentation/:country" element={<PresentationDRC/>}/>
          <Route path="/join/:country" element={<Join/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:country" element={<Products/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Router>
    </WhatsAppNumberContext.Provider>
  )
}

export default App
