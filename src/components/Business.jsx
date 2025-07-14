import { useState } from "react"

export const Business = ()=> {
  const [selected, setSelected] = useState(countries[0])

  return (
    <section className="bg-gray-50 dark:bg-gray-800 px-4 py-20 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Explore the Business Opportunity
        </h2>

        {/* Country Selector */}
        <div className="mb-6 flex justify-center">
          <select
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md text-sm focus:outline-none"
            value={selected.code}
            onChange={(e) => {
              const country = countries.find((c) => c.code === e.target.value);
              setSelected(country);
            }}
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
          {selected.description}
        </p>

        {/* Video */}
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <video
            className="w-full rounded-lg"
            controls
            preload="none"
            poster={`/images/posters/${selected.code}.jpg`}
          >
            <source src={selected.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
