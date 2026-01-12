import { useEffect, useState, useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Home from "./pages/Home"
import PresentationDRC from "./pages/Presentation"
import Join from "./pages/Join"
import Messages from "./pages/Messages"
import Products from "./pages/Products"
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import { Header } from "./components/Header"
import AOS from "aos"
import "aos/dist/aos.css"
import { WhatsAppFab } from "./components/WhatsAppFab"
import About from "./pages/About"
import Blog from "./pages/Blog"
import { WhatsAppNumberContext } from "./WhatsAppNumberContext"
import axios from "axios"
import { useGlobalContext } from "./GlobalContext"
import { locales } from "./assets/locales"


const App = () => {
  const { setTestimonials, setPresentations, setPhoneNumbers, setLoadingPhones, setLoadingVideo, setLoadingPosts, setPresentation, setPosts, country, language, setLocale, setProducts, setRawProducts } = useGlobalContext()
  const [videos, setVideos] = useState([])

  //refresh when country changes
  const firstLoad = useRef(true);
  const prevCountry = useRef(country);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    if (country !== prevCountry.current) {
      prevCountry.current = country;
      window.location.reload();
    }
  }, [country]);

  useEffect(() => {
    setLoadingPhones(true)
    axios.get("https://ferdinandglobal.com/api/care/")
      .then(resp => setPhoneNumbers(resp.data))
      .catch(err => console.error(err?.response || err.message))
      .finally(() => setLoadingPhones(false))
    axios.get("https://ferdinandglobal.com/api/videos/")
      .then(resp => {
        setVideos(resp.data)
        setLoadingVideo(false)
      })
      .catch(err => console.error("Error fetching videos:", err))

    axios.get("https://ferdinandglobal.com/api/product/")
      .then(resp => {
        setProducts(resp.data)
        setRawProducts(resp.data)
      })
      .catch(err => console.error("Error fetching products:", err))

    axios.get("https://ferdinandglobal.com/api/article/")
      .then(resp => {
        setPosts(resp.data)
        setLoadingPosts(false)
      })
      .catch(err => console.error("Error fetching posts:", err))

    AOS.init({ once: true })
  }, [])

  useEffect(() => {
    const testimonies = videos.filter(v => v.category === "TESTIMONIAL")
    const business = videos.filter(v => v.category === "PRESENTATION")
    setTestimonials(testimonies)
    setPresentations(business)
    setPresentation(business.filter(v => v.country.toLowerCase() === country))
  }, [videos, country])

  useEffect(() => {
    setLocale(locales[language] || locales["english"])
  }, [language])

  return (
    <>
      <Header />
      <WhatsAppFab />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/presentation/:country" element={<PresentationDRC />} />
          <Route path="/join/:country" element={<Join />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:country" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/message" element={<Messages />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
