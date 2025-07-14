import { Hero } from "../components/Hero"
import { WhyJoin } from "../components/WhyJoin"
import { NewEra } from "../components/NewEra"
import { Testimonials } from "../components/Testimonials"
import { Business } from "../components/Business"
import { useEffect } from "react"

const countries = [
  {
    code: "kenya",
    name: "Kenya",
    language: "English",
    videoUrl: "https://yourdomain.com/videos/kenya.mp4",
    description:
      "This business opportunity in Kenya is presented in English and based on the Ed Plan 3.0. Learn how Kenyans are achieving financial freedom through mentorship, digital leverage, and global expansion.",
  },
  {
    code: "tanzania",
    name: "Tanzania",
    language: "Kiswahili",
    videoUrl: "https://yourdomain.com/videos/tanzania.mp4",
    description:
      "Hii fursa ya biashara nchini Tanzania inawasilishwa kwa Kiswahili. Fahamu jinsi Watanzania wanavyotumia Ed Plan 3.0 kujenga uhuru wa kifedha.",
  },
  {
    code: "burundi",
    name: "Burundi",
    language: "Kirundi",
    videoUrl: "https://yourdomain.com/videos/burundi.mp4",
    description:
      "Iyi ni business opportunity iriko igufasha gutangura ubucuruzi utarinze kugira amafaranga menshi. Raba ukuntu abari muri Burundi bariko barahindura ubuzima bwabo.",
  },
  // Add more as needed
];

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
