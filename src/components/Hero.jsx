export const Hero = ()=> <section
  className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-fixed bg-cover bg-center bg-no-repeat px-4 py-10 md:py-20"
  style={{
    backgroundImage: "url('/images/global-network.jpg')",
  }}
>  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50 dark:bg-gray-900/70"></div>

  {/* Hero content */}
  <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Text */}
    <div className="text-white text-center md:text-left flex-1">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
        Empowering Dreams.
        <br className="hidden sm:block" />
        Building Global Entrepreneurs.
      </h1>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
        Join Ferdinand and thousands across continents in reshaping the future of income and opportunity — in the digital age.
      </p>
      <div className="mt-6 flex justify-center md:justify-start gap-4 flex-wrap">
        <a
          href="/join"
          className="bg-orange-400 text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-orange-500 transition"
        >
          Get Started
        </a>
        <a
          href="/about"
          className="border border-orange-400 text-orange-400 px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-50 dark:hover:bg-gray-800 transition"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* Ferdinand Image */}
    <div className="flex-1 flex justify-center md:justify-end">
      <div className="w-40 h-40 md:w-60 md:h-60 bg-white/10 backdrop-blur-md border border-white/20 rounded-full md:rounded-2xl shadow-xl overflow-hidden">
        <img
          src="/images/ferdinand.jpeg"
          alt="Ferdinand"
          className="w-full h-full object-cover rounded-full md:rounded-2xl"
        />
      </div>
    </div>
  </div>
</section>

