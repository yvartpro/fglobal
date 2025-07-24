import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { FAQ } from "../components/Faq"
import { useWhatsAppNumber } from "../WhatsAppNumberContext"
import { useGlobalContext } from "../GlobalContext"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import { JoinPageShimmer } from "../components/JoinShimmer"

export default function JoinPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { country, locale, currency, loadingPackage, setLoadingPackage } = useGlobalContext()
  const whatsappNumber = useWhatsAppNumber()
  const [pack, setPackage] = useState(null)
  const [searchParams] = useSearchParams()
  const packId = searchParams.get("package")


  useEffect(() => {
    if (country) document.title = `Join us from – ${country}`
    axios.get(`https://ferdinandglobal.com/api/package/${packId}/`)
      .then(resp => setLoadingPackage(false) || setPackage(resp.data))
      .catch(err => console.error("Error fething package: ", err))
  }, [country, packId])

  const message = encodeURIComponent(
    pack
      ? `Hello Ferdinand, I want to know more about joining Ferdinand Global with ${pack.package_name}.`
      : "Hello Ferdinand, I want to know more about joining Ferdinand Global."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${message}`;

  if (!country) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-400">
      {/* back to home button gracefully */}
        <p className="text-center">
          {locale.p_fallback}
        </p>
        {/* button */}
        <a href="/" className="text-blue-500 hover:underline mt-4">
          {locale.go_back_home}
        </a>
      </main>
    )
  }


  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      {/* Hero & Package Presentation */}
    { pack ? (<> <section className="px-4 py-16 bg-gradient-to-t from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 border-b dark:border-gray-700">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="700">
       
          <>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border-2 border-orange-400 p-4 flex flex-col items-center w-full">
                <img
                  src={pack.photo}
                  alt={pack.package_name}
                  className="w-full h-auto object-contain rounded-xl"
                  style={{ maxHeight: "340px", minHeight: "220px", background: "#fff" }}
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
                <div className="mt-4 text-center">
                  <span className="text-xl font-bold text-orange-500 dark:text-orange-400">
                    {pack.price} {currency}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-500 dark:text-orange-400 mb-4 text-center md:text-left">
                {locale.j_welcome}
              </h1>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center md:text-left">
                {pack.package_name}
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-4 text-center md:text-left">
                {locale.j_welcome_desc} <span className="font-bold">{pack.package_name} </span> {locale.j_welcome_desc_2} <span className="font-bold text-orange-500 dark:text-orange-400 text-xl">{pack.price} {currency}</span>.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-2 text-center md:text-left">
                {pack.accounts} {locale.j_welcome_desc_3}
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition mt-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {locale.j_chat_sponsor}
              </a>
            </div>
          </>
        
      </div>
    </section>

      {/* Bonuses & Profits */}
     
      <section className="px-4 py-10 bg-white dark:bg-gray-900 border-b dark:border-gray-700" data-aos="fade-up" data-aos-duration="700">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-orange-50 dark:bg-gray-800 rounded-lg shadow p-6" data-aos="fade-right" data-aos-delay="100">
            <h3 className="font-bold text-orange-500 dark:text-orange-400 mb-2">{locale.j_ref}</h3>
            <p className="mb-2">
              {locale.j_ref_desc} <span className="font-bold">{pack.package_name}</span> {locale.j_ref_at} 
              <span className="font-bold"> {pack.price} {currency}</span> {locale.j_ref_earn} 
              <span className="font-bold">{pack.ref_bonus} {currency}</span> {locale.j_ref_instantly}
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>{pack.ref_bonus} {currency}</li>
              <li>
                {locale.j_ref_refer3} → 3 x {pack.ref_bonus} {currency} = {3 * pack.ref_bonus} {currency}
              </li>
              <li>
                {locale.j_ref_refer10} → 10 x {pack.ref_bonus} {currency} = {10 * pack.ref_bonus} {currency}
              </li>
            </ul>
            <p className="mt-2">
              ✅ {locale.j_ref_unlimited}
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-gray-800 rounded-lg shadow p-6" data-aos="fade-left" data-aos-delay="200">
            <h3 className="font-bold text-orange-500 dark:text-orange-400 mb-2">{locale.j_pairing}</h3>
            <p className="mb-2">
              {locale.j_pairing_earn} 
              <span className="font-bold"> {pack.pair_bonus} {currency}</span> 
              {locale.j_pairing_condition}
            </p>
            <ul className="list-decimal list-inside ml-4">
              <li>
                {locale.j_pairing_example1} → 
                {locale.j_earn || "Earn"} {pack.pair_bonus} {currency}
              </li>
              <li>
                {locale.j_pairing_example2} {pack.pair_bonus} {currency} 
                ({locale.j_unlimited_times})
              </li>
            </ul>
            <p className="mt-2">🔁 {locale.j_pairing_footer}</p>
          </div>
        </div>
      </section>



      {/* Steps to Join */}
      
        <section className="px-4 py-10 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700" data-aos="fade-up" data-aos-duration="700">
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col justify-center" data-aos="fade-right" data-aos-delay="100">
                <h3 className="font-bold text-orange-500 dark:text-orange-400 mb-4">{locale.j_steps}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{locale.j_steps_desc}</p>
                <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>{locale.j_steps_1} <span className="font-bold">{pack.price} {currency}</span></li>
                  <li>{locale.j_steps_2}</li>
                  <li>{locale.j_steps_3}</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col justify-center" data-aos="fade-left" data-aos-delay="200">
                <h3 className="font-bold text-orange-500 dark:text-orange-400 mb-4">{locale.j_benefits}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{locale.j_benefits_desc}</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>✅ {pack.account} {locale.j_benefits_1}</li>
                  <li>✅ {locale.j_benefits_2}</li>
                  <li>✅ {locale.j_benefits_3}</li>
                  <li>✅ {locale.j_benefits_4}</li>
                  <li>✅ {locale.j_benefits_5}</li>
                </ul>
              </div>
            </div>
          </section>
      </>) : (<JoinPageShimmer/>)}

      {/* CTA */}
      {/* CTA */}
      <section className="px-4 py-16 bg-orange-400 dark:bg-orange-500 text-white text-center" data-aos="zoom-in" data-aos-duration="700">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">{locale.j_cta}</h2>
          <p className="text-sm sm:text-base">
            {locale.j_cta_desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-300 transition"
            >
              {locale.j_cta_whatsapp}
            </a>
          </div>
        </div>
      </section>
      <FAQ/>
    </main>
  )
}
