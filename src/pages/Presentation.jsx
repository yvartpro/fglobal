import { useParams } from "react-router-dom"
import { countryData } from "../assets/countryData"
import { FAQ } from "../components/Faq"
import { Packages } from "../components/Packages"
import { VideoPlayer } from "../components/VideoPlayer"
import { useEffect } from "react"
import { cashFlow } from "../assets/cashFlow"
import { useWhatsAppNumber } from "../WhatsAppNumberContext"


export default function PresentationPage() {
  const { country } = useParams()
  const data = countryData[country] || countryData["kenya"]
  const whatsappNumber = useWhatsAppNumber()


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
      {/* Cashflow Quadrant Section */}
      <section className="px-4 pt-10 pb-4 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8" data-aos="fade-up" data-aos-duration="700">
            {cashFlow.title}
          </h2>
          <div className="w-full">
            <div className="md:float-left md:w-64 w-full mb-6 md:mb-4 md:mr-8" data-aos="zoom-in" data-aos-duration="800">
              <img
                src={cashFlow.image}
                alt={cashFlow.title}
                className="w-full rounded-xl shadow-lg object-contain"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
            <div className="flex-1">
              <p className="text-base text-gray-700 dark:text-gray-300 mb-6" data-aos="fade-up" data-aos-delay="100">
                {cashFlow.explanation}
              </p>
              <ul className="space-y-4">
                {cashFlow.quadrants.map((q, idx) => (
                  <li key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow" data-aos="fade-right" data-aos-delay={idx * 100}>
                    <span className="font-bold text-gray-700 dark:text-gray-200">{q.quadrant}:</span>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{q.details[cashFlow.countryDetails[country]?.language || "english"]}</span>
                  </li>
                ))}
              </ul>
              {/* Country-specific summary */}
              {cashFlow.countryDetails[country] && (
                <div className="mt-6 bg-gray-100 dark:bg-gray-900 rounded-lg p-4 border-l-4 border-gray-400" data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">In {countryData[country]?.name || country}:</h3>
                  <p className="text-gray-700 dark:text-gray-300">{cashFlow.countryDetails[country].summary}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Hero */}
      <section className="px-4 py-16 bg-gradient-to-t from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 border-b dark:border-gray-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div data-aos="fade-up" data-aos-duration="700">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-500 dark:text-orange-400 mb-4">
              {data.hero.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-md">
              {data.hero.subtitle}
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="800">
            <VideoPlayer src={data.video.url} poster={data.video.poster} />
            <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">
              {data.video.label}
            </p>
          </div>
        </div>
      </section>
      {/* Join Steps */}
      <section className="px-4 py-20 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8" data-aos="fade-up" data-aos-duration="700">
            ✨ How to Join
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 space-y-4" data-aos="fade-up" data-aos-delay="100">
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {data.joinSteps.map((step, idx) => (
                <li key={idx} data-aos="fade-right" data-aos-delay={idx * 100}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      {/* Bonuses */}
      <section className="px-4 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900 dark:text-white" data-aos="fade-up" data-aos-duration="700">
            💰 Bonuses You Can Earn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.bonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
                data-aos="fade-up" data-aos-delay={idx * 100}
              >
                <h3 className="text-lg font-semibold text-orange-500 dark:text-orange-400 mb-2">
                  {bonus.title} – {bonus.amount}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{bonus.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Package Summary */}
      <section className="px-4 py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6" data-aos="fade-up" data-aos-duration="700">
            🎯 {data.package.name}
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-orange-400 p-6 shadow-md text-left text-sm text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
            <ul className="list-disc list-inside space-y-2">
              {data.package.items.map((item, idx) => (
                <li key={idx} data-aos="fade-right" data-aos-delay={idx * 100}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-4 py-16 bg-orange-400 dark:bg-orange-500 text-white text-center">
        <div className="max-w-xl mx-auto space-y-4" data-aos="zoom-in" data-aos-duration="700">
          <h2 className="text-2xl font-bold">{data.cta.heading}</h2>
          <p className="text-sm sm:text-base">{data.cta.text}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href={`/join/${data.code}`}
              className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition"
              data-aos="fade-up" data-aos-delay="100"
            >
              Join Now
            </a>
            <a            
              href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-300 transition"
              data-aos="fade-up" data-aos-delay="200"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      {/* FAQ */}
      {data.faq && data.faq.length > 0 && <FAQ title="Frequently Asked Questions" data={data.faq} />}
    </main>
  )
}
