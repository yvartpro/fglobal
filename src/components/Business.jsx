import { useState } from "react";

const countries = [
  {
    code: "rdc",
    name: "RDC (Congo)",
    language: "Français",
    videoUrl: "https://yourdomain.com/videos/rdc.mp4",
    description:
      "Rejoignez AIM Global en RDC avec le Global Package (280 USD) ou Neoverse (430 USD) et bénéficiez de 7 sources de revenus.",
  },
  {
    code: "kenya",
    name: "Kenya",
    language: "English",
    videoUrl: "https://yourdomain.com/videos/kenya.mp4",
    description:
      "Join AIM Global in Kenya with the Global or Neoverse Package. Learn how to earn in the digital economy.",
  },
  {
    code: "tanzania",
    name: "Tanzania",
    language: "Kiswahili",
    videoUrl: "https://yourdomain.com/videos/tanzania.mp4",
    description:
      "Jifunze jinsi ya kuanza AIM Global nchini Tanzania na kupata mapato kwa kutumia simu yako tu.",
  },
  {
    code: "burundi",
    name: "Burundi",
    language: "Kirundi",
    videoUrl: "https://yourdomain.com/videos/burundi.mp4",
    description:
      "Tungura ubuzima bwawe mu Burundi biciye muri AIM Global. Tangura n’idandaza rya 2,200,000 Fbu gusa.",
  },
];

export const Business = ()=> {
  const [selected, setSelected] = useState(countries[0]);

  return (
    <section className="bg-gray-50 dark:bg-gray-800 px-4 py-20 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Business Opportunity by Country
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Select your country to explore the opportunity in your local language and currency.
        </p>

        {/* Country selector */}
        <div className="flex justify-center mb-8">
          <select
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md text-sm focus:outline-none"
            value={selected.code}
            onChange={(e) => {
              const c = countries.find((item) => item.code === e.target.value);
              setSelected(c);
            }}
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name} ({c.language})
              </option>
            ))}
          </select>
        </div>

        {/* Summary + Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              {selected.description}
            </p>
            <a
              href={`/presentation/${selected.code}`}
              className="inline-block bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium px-5 py-2 rounded-md transition"
            >
              View Full Details →
            </a>
          </div>

          <div>
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
      </div>
    </section>
  )
}
