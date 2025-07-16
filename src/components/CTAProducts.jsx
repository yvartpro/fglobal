export const CTAProducts = () => <section
className="mt-20 bg-orange-400 dark:bg-orange-500 text-white text-center py-14 px-4 rounded-2xl shadow-lg">
  <div className="max-w-3xl mx-auto space-y-4">
    <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
      Ready to Enjoy These Products?
    </h2>
    <p className="text-base sm:text-lg text-white/90">
      These science-backed health and wellness products are only available through AIM Global’s members.
      Join now and unlock exclusive packages, prices, and lifelong benefits.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
      <a
        href="/join"
        className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition"
      >
        Join AIM Global
      </a>
      <a
        href="https://wa.me/254111878523"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-300 transition"
      >
        Chat on WhatsApp
      </a>
    </div>
  </div>
</section>
