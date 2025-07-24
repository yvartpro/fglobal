import { testimonialsData } from "../assets/testimonialsData"
import { useWhatsAppNumber } from "../WhatsAppNumberContext"
import { VideoPlayer } from "../components/VideoPlayer"
import { useGlobalContext } from "../GlobalContext"
import { PostsShimmer } from "../components/PostsShimmer";


const Testimonials = ()=>{
  const whatsappNumber = useWhatsAppNumber();
  const { country, locale, testimonials,  loadingVideo, } = useGlobalContext();
  const message = encodeURIComponent(`Hello Ferdinand, I want to know more about Ferdinand Global services and products.`);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${message}`;

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      {/* Hero */}
      <section className="px-4 py-16 text-center bg-gradient-to-b from-orange-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="700">
          <h1 className="text-xl sm:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="700">
            {locale.test_title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg" data-aos="fade-up" data-aos-delay="100">
            {locale.test_sub}
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      { loadingVideo ? ( <PostsShimmer/>) :
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              data-aos="fade-up" data-aos-delay={idx * 100}
            >
              <VideoPlayer src={t.videos} poster={t.poster}/>
              <div className="p-4">
                <h3 className="font-semibold text-gray-700 dark:text-orange-400">
                  {t.titre}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      }

      {/* CTA */}
      <section className="px-4 py-16 bg-orange-400 dark:bg-orange-500 text-white text-center">
        <div className="max-w-xl mx-auto space-y-4" data-aos="zoom-in" data-aos-duration="700">
          <h2 className="text-2xl font-bold">
            {locale.test_cta_title}
          </h2>
          <p className="text-sm sm:text-base">
            {locale.test_cta_text}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-300 transition"
            >
              {locale.test_cta_button_whatsapp}
            </a>
            <a
            href={`/presentation/${country}`}
              className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition"
              data-aos="fade-up" data-aos-delay="100"
          
            >
              {locale.test_cta_button_video} 
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Testimonials

