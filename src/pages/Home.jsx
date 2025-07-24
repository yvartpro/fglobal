import { useEffect } from "react"
import { Hero } from "../components/Hero"
import { WhyJoin } from "../components/WhyJoin"
import { Posts } from "../components/Posts"
import { Testimonials } from "../components/Testimonials"
import { CallToAction } from "../components/CTA"
import { Footer } from "../components/Footer"
import { Me } from "../components/Me"


export default function Home() {
  useEffect(() => {
    document.title = "Welcome to Ferdinand Global"
  }, [])

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Hero/>
      <WhyJoin/>
      <Posts/>
      <Me/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </main>
  )
}

