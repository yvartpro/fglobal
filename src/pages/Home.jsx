import { Hero } from "../components/Hero"
import { WhyJoin } from "../components/WhyJoin"
import { NewEra } from "../components/NewEra"
import { Testimonials } from "../components/Testimonials"
import { Business } from "../components/Business"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    document.title = "Welcome to Ferdinand Global"
  }, [])

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Hero/>
      <WhyJoin/>
      <NewEra/>
      <Testimonials/>
      <Business/>
    </main>
  )
}

