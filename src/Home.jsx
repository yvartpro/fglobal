import { Header } from "./components/Header"
import team from './img/team.jpg'

const Home = () => {
  
    return (
      <>
    <Header/>
    <main className="flex flex-col items-center justify-center px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12 mb-8">
        <div className="flex-1 md:text-left space-y-6">
          <h1 className="text-2xl md:text-5xl font-extrabold text-gray-600 leading-tight mb-2">
            Welcome to Ferdinand Global
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Empowering people worldwide through entrepreneurship, mentorship, and wellness. Join our international network marketing team and unlock your potential!
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button
              className="px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition duration-200"
              onClick={() => document.getElementById('cta-form').scrollIntoView({ behavior: 'smooth' })}
            >
              Join Us Now
            </button>
            <a
              href="#latest-trainings"
              className="px-6 py-3 rounded-lg border border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 transition duration-200"
            >
              See Trainings
            </a>
          </div>
      
        </div>
        <div className="hidden md:block flex-1 ml-8">
          <img
            src={team}
            alt="Empowerment image"
            className="w-full max-w-xs mx-auto rounded-xl shadow"
            style={{ minWidth: 220 }}
          />
        </div>
      </section>
      {/* Vision Section */}
      <section className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Our Vision</h2>
        <p className="text-gray-600 dark:text-gray-300">
          “To Make Impact in Many People's Lives Worldwide by Teaching, Empowering, Inspiring and Motivating Them.”
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example testimonial */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col">
            <img src="/images/elias.jpg" alt="Elias Muhoozi" className="w-16 h-16 rounded-full mb-2" />
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              “Joining Ferdinand Global changed my life. The mentorship and products are world-class!”
            </p>
            <span className="text-orange-400 font-semibold">Elias Muhoozi</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col">
            <img src="/images/rafael.jpg" alt="Rafael Vergara" className="w-16 h-16 rounded-full mb-2" />
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              “I found financial freedom and a supportive community. Highly recommended!”
            </p>
            <span className="text-orange-400 font-semibold">Rafael Vergara</span>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="px-5 py-2 rounded bg-orange-400 text-white font-medium hover:bg-orange-500 transition"
            onClick={() => document.getElementById('cta-form').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Success Story
          </button>
        </div>
      </section>

      {/* Training Posts Section */}
      <section className="w-full max-w-4xl mt-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Latest Trainings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="font-semibold text-orange-400 mb-2">Why Network Marketing?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Discover the power of network marketing and how it can transform your life. Learn from global leaders and start your journey today!
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="font-semibold text-orange-400 mb-2">Ed Plan 3.0 Explained</h3>
            <video controls className="w-full rounded-lg mb-2">
              <source src="/videos/edplan.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-700 dark:text-gray-300">
              Watch our exclusive video on the Ed Plan 3.0 and see how you can benefit!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Form */}
      <section id="cta-form" className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-12">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Ready to Join?</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-orange-400 text-white font-semibold py-2 rounded hover:bg-orange-500 transition"
          >
            Get Started
          </button>
        </form>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold">
            WhatsApp
          </a>
          <a href="https://facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
            Facebook
          </a>
        </div>
      </section>
    </main>
    </>
    )
}

export default Home