import { Header } from "./components/Header"
import team from './img/team.jpg'
import { useEffect } from "react"

const Home = () => {

    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4 py-8">
          {/* Hero Section */}
          <section
            className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 md:p-16 mb-16"
            data-aos="fade-up"
          >
            <div className="flex-1 space-y-8">
              <h1 className="text-4xl md:text-6xl font-extrabold text-orange-500 leading-tight mb-4">
                Unlock Your Global Potential
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl max-w-lg">
                Join Ferdinand Global and connect with a vibrant international network. Entrepreneurship, mentorship, and wellness—reimagined for you.
              </p>
              <div className="flex gap-4 mt-8">
                <button
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold shadow-lg hover:scale-105 transition"
                  onClick={() => document.getElementById('cta-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </button>
                <a
                  href="#latest-trainings"
                  className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-50 transition"
                >
                  Explore Trainings
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center mt-10 md:mt-0" data-aos="zoom-in">
              <img
                src={team}
                alt="Team"
                className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-orange-200"
              />
            </div>
          </section>

          {/* Vision Section */}
          <section
            className="max-w-5xl mx-auto bg-gradient-to-r from-orange-100 to-white rounded-2xl shadow-lg p-10 text-center mb-16"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 text-xl italic">
              “Impact lives worldwide by teaching, empowering, inspiring, and motivating people to reach their dreams.”
            </p>
          </section>

          {/* Success Stories */}
          <section className="max-w-6xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-orange-500 mb-8 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center" data-aos="flip-left">
                <img src="/images/elias.jpg" alt="Elias Muhoozi" className="w-20 h-20 rounded-full mb-4 shadow-lg" />
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">
                  “Ferdinand Global transformed my life. The mentorship and community are unmatched!”
                </p>
                <span className="text-orange-400 font-semibold">Elias Muhoozi</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center" data-aos="flip-up">
                <img src="/images/rafael.jpg" alt="Rafael Vergara" className="w-20 h-20 rounded-full mb-4 shadow-lg" />
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">
                  “I found financial freedom and a supportive network. Highly recommended!”
                </p>
                <span className="text-orange-400 font-semibold">Rafael Vergara</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center" data-aos="flip-right">
                <img src="/images/jane.jpg" alt="Jane Doe" className="w-20 h-20 rounded-full mb-4 shadow-lg" />
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">
                  “The trainings and support helped me grow personally and professionally.”
                </p>
                <span className="text-orange-400 font-semibold">Jane Doe</span>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                className="px-8 py-3 rounded-xl bg-orange-500 text-white font-bold shadow-lg hover:bg-orange-600 transition"
                onClick={() => document.getElementById('cta-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Journey
              </button>
            </div>
          </section>

          {/* Latest Trainings */}
          <section id="latest-trainings" className="max-w-6xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-orange-500 mb-8 text-center">Latest Trainings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6" data-aos="fade-right">
                <h3 className="font-semibold text-orange-400 mb-2 text-xl">Why Network Marketing?</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Discover the power of network marketing and how it can transform your life. Learn from global leaders and start your journey today!
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6" data-aos="fade-left">
                <h3 className="font-semibold text-orange-400 mb-2 text-xl">Ed Plan 3.0 Explained</h3>
                <video controls className="w-full rounded-xl mb-4 shadow-lg">
                  <source src="/videos/edplan.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Watch our exclusive video on the Ed Plan 3.0 and see how you can benefit!
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Form */}
          <section
            id="cta-form"
            className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mt-16"
            data-aos="zoom-in"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">Ready to Join?</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-3 rounded-xl hover:scale-105 transition"
              >
                Get Started
              </button>
            </form>
            <div className="flex justify-center mt-6 space-x-6">
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold text-lg hover:underline">
                WhatsApp
              </a>
              <a href="https://facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold text-lg hover:underline">
                Facebook
              </a>
            </div>
          </section>
        </main>
      </>
    )
}

export default Home