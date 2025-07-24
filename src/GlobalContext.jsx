import { createContext, useContext, useState, useEffect } from "react"


const GlobalContext = createContext()
export const GlobalProvider = ({children}) => {
    const [country, setCountry] = useState(localStorage.getItem("country") || "")
    useEffect(() => {
  const timeout = setTimeout(() => {
    localStorage.setItem("country", country);
  }, 300); // debounce save

  return () => clearTimeout(timeout);
}, [country]);



    const [testimonials, setTestimonials] = useState([])
    const [presentations, setPresentations] = useState([])
    const [presentation, setPresentation] = useState([])
    const [loadingVideo, setLoadingVideo] = useState(true)
    const [language, setLanguage] = useState("english")
    const [locale, setLocale] = useState("english")
    const [products, setProducts] = useState([])
    const [rawProducts, setRawProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(true)
    const [currency, setCurrency] = useState("KES")
    const [posts, setPosts] = useState([])
    const [loadingPosts, setLoadingPosts] = useState(true)
    const [loadingPackages, setLoadingPackages] = useState(true)
    const [loadingPackage, setLoadingPackage] = useState(true)
    return(
        <GlobalContext.Provider
        value={{
            country, setCountry,
            testimonials, setTestimonials,
            presentations, setPresentations,
            presentation, setPresentation,
            language, setLanguage,
            locale, setLocale,
            products, setProducts,
            currency, setCurrency,
            posts, setPosts,
            rawProducts, setRawProducts,
            loadingProducts, setLoadingProducts,
            loadingVideo, setLoadingVideo,
            loadingPackages, setLoadingPackages,
            loadingPackage, setLoadingPackage,
            loadingPosts, setLoadingPosts
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
