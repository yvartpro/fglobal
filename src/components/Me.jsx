import { PortraitCarousel } from "./Carousel"


export const Me = () => <section
  className="px-4 py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
  data-aos="fade-up">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div data-aos="fade-right" data-aos-delay="100">
      <h2 className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-4">
        Let Me Share With You My Story
      </h2>
      <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
        I'm Ferdinand — a teacher turned entrepreneur with a dream bigger than my fear. 
        I started alone as a student in Burundi, but today, I lead a network in 8+ countries.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
        “If one person can do it, another can too.”
      </p>
      <PortraitCarousel/>
      <a
        href="/about"
        className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Read My Full Journey →
      </a>
    </div>
 
  </div>
 </section>

