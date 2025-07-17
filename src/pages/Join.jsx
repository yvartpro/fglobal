import { useParams } from "react-router-dom"
import { countryData } from "../assets/countryData"
import { FAQ } from "../components/Faq"
import { useEffect } from "react"
import { useWhatsAppNumber } from "../WhatsAppNumberContext"

export default function JoinPage() {
  const { country } = useParams() || localStorage.getItem("country") || "kenya"
  const data = countryData[country]
  const whatsappNumber = useWhatsAppNumber()

  useEffect(() => {
    if (data) document.title = `Join us from – ${data.name}`
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
      <section className="px-4 py-16 bg-gradient-to-t from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 border-b dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up" data-aos-duration="700">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-500 dark:text-orange-400 mb-4" data-aos="fade-up" data-aos-duration="700">
            Join us now
          </h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Join Steps */}
      <section className="px-4 py-20 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8" data-aos="fade-up" data-aos-duration="700">
            📝 How to Get Started in {data.name}
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

      {/* Bonuses Summary */}
      <section className="px-4 py-20 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up" data-aos-duration="700">
            💵 Bonuses You Can Earn
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

      {/* Package Overview */}
      <section className="px-4 py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6" data-aos="fade-up" data-aos-duration="700">
            🎁 {data.package.name}
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-orange-400 p-6 shadow-md text-left text-sm text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
            <ul className="list-disc list-inside space-y-2">
              {data.package.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-orange-400 dark:bg-orange-500 text-white text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold" data-aos="fade-up" data-aos-duration="700">{data.cta.heading}</h2>
          <p className="text-sm sm:text-base" data-aos="fade-up" data-aos-delay="100">{data.cta.text}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6" data-aos="fade-up" data-aos-delay="200">
            <a
              href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-300 transition"
            >
              {data.cta.buttonText || "Chat on WhatsApp"}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ if exists */}
      {data.faq?.length > 0 && (
        <FAQ title="Questions ?" data={data.faq} />
      )}
    </main>
  )
}
