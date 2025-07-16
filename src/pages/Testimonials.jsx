import { testimonialsData } from "../assets/testimonialsData"
import { LazyVideo } from "../components/LazyVideo"

const Testimonials = ()=>{
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      {/* Hero */}
      <section className="px-4 py-16 text-center bg-gradient-to-b from-orange-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            💬 Real Testimonials, Real Impact
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            These success stories prove that anyone can start from nothing and grow into greatness — just like you.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <video
                controls
                poster={t.poster}
                className="w-full aspect-video rounded-t-md"
              >
                <source src={t.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-orange-500 dark:text-orange-400">
                  {t.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {t.name} – {t.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-orange-400 dark:bg-orange-500 text-white text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">You Could Be Next 💫</h2>
          <p className="text-sm sm:text-base">
            Start your journey today. You don’t need experience — just a dream.
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
              Talk to Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Testimonials
