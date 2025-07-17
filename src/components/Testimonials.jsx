import {VideoPlayer} from "./VideoPlayer";


export const Testimonials = ()=> <section
className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-fixed bg-cover bg-center bg-no-repeat px-4 py-10 md:py-20"
>
 {/* Dark overlay */}
  <div className="max-w-6xl mx-auto">
    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
      Real Stories. Real Impact.
    </h2>
    <p className="text-base sm:text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
      These people started with humble beginnings — and now lead businesses that impact nations.
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <VideoPlayer src="/videos/presentations/motivation_home.mp4" poster="/videos/posters/motivation_home.png" />
        <h3 className="font-semibold mt-4 text-gray-800 dark:text-gray-100">
          Rafael Vergara – From Bus Conductor to Global Mentor
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Once a conductor in the Philippines, Rafael embraced the opportunity and is now mentoring leaders across continents.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <VideoPlayer src="/videos/presentations/testimony_muhoozi.mp4" poster="/videos/posters/testimony_muhoozi.png" />
        <h3 className="font-semibold mt-4 text-gray-800 dark:text-gray-100">
          Elias Muhoozi – Started with Borrowed Money
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          From Uganda, Elias believed even when he had nothing — and built a team across Africa through mentorship and faith.
        </p>
      </div>
    </div>

    {/* View More Button */}
    <div className="mt-12 text-center">
      <a
        href="/testimonials"
        className="inline-block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm text-sm font-medium text-orange-400 hover:text-orange-500 transition group relative overflow-hidden"
      >
        <span className="flex items-center gap-2">
          View More Testimonials
          <span className="inline-block transform transition-transform group-hover:translate-x-2">&rarr;</span>
        </span>
      </a>
    </div>
  </div>
</section>
