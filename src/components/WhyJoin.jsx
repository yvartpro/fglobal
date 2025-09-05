import { useGlobalContext } from "../GlobalContext";


export const WhyJoin = () => {
  const { locale, country } = useGlobalContext();
  return (
  <section className="bg-white dark:bg-gray-900 px-4 py-20 border-t border-gray-100 dark:border-gray-800">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4" data-aos="fade-up" data-aos-duration="700">
        {locale.why_join}
      </h2>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        {locale.why_sub}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:bg-orange-50 hover:border-orange-500 active:bg-orange-100 active:border-orange-500 dark:hover:bg-gray-800 dark:active:bg-gray-900" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-2">🌍 {locale.why_join_1}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {locale.why_join_desc_1}
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:bg-orange-50 hover:border-orange-500 active:bg-orange-100 active:border-orange-500 dark:hover:bg-gray-800 dark:active:bg-gray-900" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-2">🕒 {locale.why_join_2}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {locale.why_join_desc_2}
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:bg-orange-50 hover:border-orange-500 active:bg-orange-100 active:border-orange-500 dark:hover:bg-gray-800 dark:active:bg-gray-900" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-2">🎓 {locale.why_join_3}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {locale.why_join_desc_3}
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:bg-orange-50 hover:border-orange-500 active:bg-orange-100 active:border-orange-500 dark:hover:bg-gray-800 dark:active:bg-gray-900" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-2">🚀 {locale.why_join_4}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {locale.why_join_desc_4}
          </p>
        </div>
      </div>
    </div>
  </section>
);}
