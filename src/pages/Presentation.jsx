import { useEffect, useState } from "react"
import { FAQ } from "../components/Faq"
import { VideoPlayer } from "../components/VideoPlayer"
import { cashFlow } from "../assets/cashFlow"
import { useWhatsAppNumber } from "../WhatsAppNumberContext"
import { useGlobalContext } from "../GlobalContext"
import { CardShimmer } from "../components/CardShimmer"
import axios from "axios"
import { CountryFallback } from "../components/CountryFallback"

export default function PresentationPage() {
  const { country, locale, presentation, loadingVideo, currency, setLoadingPackages, loadingPackages } = useGlobalContext()

  const whatsappNumber = useWhatsAppNumber()
  const [packages, setPackages] = useState([])
  const message = encodeURIComponent(`Hello Ferdinand, I want to know more about Ferdinand Global services.`);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${message}`;
  console.log(presentation)
  useEffect(() => {
    if (country) document.title = `Presentation - ${country.toUpperCase()}`
    axios.get("https://www.ferdinandglobal.com/api/package/")
      .then(resp => {
        setPackages(resp.data)
        setLoadingPackages(false)
      })
      .catch(err => console.error(err))
  }, [country, setLoadingPackages])
  if (!country) {
    return <CountryFallback target="presentation" />
  }

  // Filter packages for selected country
  const countryPackages = packages.filter(pkg => pkg.country.toLowerCase() === country)

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      {/* Cashflow Quadrant Section */}
      <section className="px-4 pt-10 pb-4 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Image always floats left on desktop, stacks on mobile */}
          <div className="md:w-64 w-full mb-6 md:mb-0 md:mr-8 flex-shrink-0" data-aos="zoom-in" data-aos-duration="800">
            <img
              src={cashFlow.image}
              alt={locale.cfq_title}
              className="w-full rounded-xl shadow-lg object-contain"
              style={{ aspectRatio: '1/1' }}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-center md:text-left text-gray-800 dark:text-gray-100 mb-8" data-aos="fade-up" data-aos-duration="700">
              {locale.cfq_title}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-6" data-aos="fade-up" data-aos-delay="100">
              {locale.cfq_sub}
            </p>
            <ul className="space-y-4">
              <li className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow" data-aos="fade-right" data-aos-delay={100}>
                <span className="font-bold text-gray-700 dark:text-gray-200">{locale.cfq_e}:</span>
                <span className="ml-2 text-gray-700 dark:text-gray-300">{locale.cfq_e_desc}</span>
              </li>
              <li className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow" data-aos="fade-right" data-aos-delay={200}>
                <span className="font-bold text-gray-700 dark:text-gray-200">{locale.cfq_s}:</span>
                <span className="ml-2 text-gray-700 dark:text-gray-300">{locale.cfq_s_desc}</span>
              </li>
              <li className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow" data-aos="fade-right" data-aos-delay={300}>
                <span className="font-bold text-gray-700 dark:text-gray-200">{locale.cfq_b}:</span>
                <span className="ml-2 text-gray-700 dark:text-gray-300">{locale.cfq_b_desc}</span>
              </li>
              <li className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow" data-aos="fade-right" data-aos-delay={400}>
                <span className="font-bold text-gray-700 dark:text-gray-200">{locale.cfq_i}:</span>
                <span className="ml-2 text-gray-700 dark:text-gray-300">{locale.cfq_i_desc}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Hero & Video */}
      <section className="px-4 py-16 bg-gradient-to-t from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 border-b dark:border-gray-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div data-aos="fade-up" data-aos-duration="700">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-500 dark:text-orange-400 mb-4">
              {locale.pre_title}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-md mb-4">
              {locale.pre_sub}
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
              {locale.pre_sure}
            </p>
          </div>
          {loadingVideo ? (
            <ShimmerPlaceholder />
          ) : (
            presentation.map((p, i) => (
              <div key={i} className="p-6 my-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
                <VideoPlayer src={p.videos} poster={p.poster} />
                <h3 className="font-semibold mt-4 text-gray-800 dark:text-gray-100">{p.titre}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{p.detail}</p>
              </div>
            ))
          )}
        </div>
      </section>
      {/* Available Packages for Country */}
      <section className="px-4 py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-4" data-aos="fade-up" data-aos-duration="700">
            🎯 {locale.pre_choose_pack}
          </h2>
          <p className="text-base text-center text-gray-700 dark:text-gray-300 mb-10" data-aos="fade-up" data-aos-delay="100">
            {locale.pre_choose_pack_desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {loadingPackages ? Array.from({ length: 4 }).map((_, idx) => <CardShimmer key={idx} />) :
              countryPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900 rounded-lg border border-orange-400 p-6 shadow-md flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="w-full flex justify-center mb-4">
                    <img
                      src={pkg.photo}
                      alt={pkg.package_name}
                      className="w-full max-w-xs h-auto object-contain rounded shadow"
                      style={{ aspectRatio: '1.2/1' }}
                    />
                  </div>
                  <h3 className="font-bold text-lg text-orange-500 dark:text-orange-400 mb-2 text-center">{pkg.package_name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                    <span className="font-bold text-xl">{pkg.price} {currency}</span>
                  </p>
                  <a
                    href={`/join/${country}?package=${encodeURIComponent(pkg.id)}`}
                    className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition w-full text-center"
                  >
                    {locale.more_info}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-4 py-16 bg-orange-400 dark:bg-orange-500 text-white text-center">
        <div className="max-w-xl mx-auto space-y-4" data-aos="zoom-in" data-aos-duration="700">
          <h2 className="text-2xl font-bold">{locale.pre_cta_title}</h2>
          <p className="text-sm sm:text-base">
            {locale.pre_cta_text}
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-300 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {locale.pre_cta_button}
            </a>
          </div>
        </div>
      </section>
      <FAQ />
    </main>
  )
}

function ShimmerPlaceholder() {
  return (
    <div className="p-6 my-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mt-4 w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-5/6 animate-pulse"></div>
    </div>
  );
}
