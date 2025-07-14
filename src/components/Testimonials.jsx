export const Testimonials = ()=> <section
className="bg-white dark:bg-gray-900 px-4 py-20 border-t border-gray-100 dark:border-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
      Real Stories. Real Impact.
    </h2>
    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
      These people started with humble beginnings — and now lead businesses that impact nations.
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <video
          className="w-full rounded-md mb-4"
          controls
          preload="none"
          poster="/images/testimonial1-thumb.jpg"
        >
          <source src="https://yourdomain.com/videos/testimonial1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Rafael Vergara – From Bus Conductor to Global Mentor
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Once a conductor in the Philippines, Rafael embraced the opportunity and is now mentoring leaders across continents.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <video
          className="w-full rounded-md mb-4"
          controls
          preload="none"
          poster="/images/testimonial2-thumb.jpg"
        >
          <source src="https://yourdomain.com/videos/testimonial2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
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
        className="inline-block text-sm font-medium text-orange-400 hover:text-orange-500 transition"
      >
        View More Testimonials →
      </a>
    </div>
  </div>
</section>
