import { useEffect } from "react"
import { Hero } from "../components/Hero"
import { WhyJoin } from "../components/WhyJoin"
import { Posts } from "../components/Posts"
import { Testimonials } from "../components/Testimonials"
import { Business } from "../components/Business"
import { CallToAction } from "../components/CTA"
import { Footer } from "../components/Footer"

export default function Home() {
  useEffect(() => {
    document.title = "Welcome to Ferdinand Global"
  }, [])

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Hero/>
      <WhyJoin/>
      <Posts/>
      <Testimonials/>
      <Business/>
      <CallToAction/>
      <Footer/>
    </main>
  )
}

