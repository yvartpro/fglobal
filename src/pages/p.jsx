import { useParams } from "react-router-dom"
import { countryData } from "../assets/countryData"
import { FAQ } from "../components/Faq"
import { useEffect } from "react"

export default function PresentationPage() {
  const { country } = useParams()
  const data = countryData[country]
console.log(data)
  useEffect(() => {
    if (data) document.title = `Presentation - ${data.name}`
  }, [data])

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-400">
        Country not found. Please check the link.
      </main>
    )
  }

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      {/* Hero */}
      <section className="px-4 py-16 bg-gradient-to-r from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 border-b dark:border-gray-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-500 dark:text-orange-400 mb-4">
              Presentation – {data.name}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-md">
              {data.description}
            </p>
          </div>
          <div>
            <video
              controls
              poster={data.poster}
              className="w-full rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <source src={data.videoUrl} type="video/mp4" />
              Your browser does not support this video.
            </video>
            <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">
              Ed Plan 3.0 – {data.language}
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-4 py-20 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8">
            ✨ How to Join
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {data.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="px-4 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
            💰 Bonuses You Can Earn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.bonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-orange-500 dark:text-orange-400 mb-2">
                  {bonus.title} – {bonus.amount}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {bonus.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Summary */}
      <section className="px-4 py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            🎯 What You Get With Your Package
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-orange-400 p-6 shadow-md text-left text-sm text-gray-700 dark:text-gray-300">
            <ul className="list-disc list-inside space-y-2">
              {data.packageSummary.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-orange-400 dark:bg-orange-500 text-white text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
          <p className="text-sm sm:text-base">
            Click below to join or reach out directly via WhatsApp for guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href="/join"
              className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition"
            >
              Join Now
            </a>
            <a
              href="https://wa.me/254111878523"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-300 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <FAQ/>
    </main>
  )
}
