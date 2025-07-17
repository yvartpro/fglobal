import { useState } from "react"
import { VideoPlayer } from "./VideoPlayer"

const countries = [
  {
    code: "rdc",
    name: "RDC (Congo)",
    language: "Français",
    videoUrl: "/videos/presentations/drc_business_presentation.mp4",
    description:
      "Rejoignez AIM Global en RDC avec le Global Package (280 USD) ou Neoverse (430 USD) et bénéficiez de 7 sources de revenus.",
  },
  {
    code: "kenya",
    name: "Kenya",
    language: "English",
    videoUrl: "/videos/presentations/ke_presentation.mp4",
    description:
      "Join AIM Global in Kenya with the Global or Neoverse Package. Learn how to earn in the digital economy.",
  },
  {
    code: "tanzania",
    name: "Tanzania",
    language: "Kiswahili",
    videoUrl: "/videos/presentations/tz_presentation.mp4",
    description:
      "Jifunze jinsi ya kuanza AIM Global nchini Tanzania na kupata mapato kwa kutumia simu yako tu.",
  },
  {
    code: "burundi",
    name: "Burundi",
    language: "Kirundi",
    videoUrl: "/videos/presentations/rw_presentation.mp4",
    description:
      "Tungura ubuzima bwawe mu Burundi biciye muri AIM Global. Tangura n’idandaza rya 2,200,000 Fbu gusa.",
  },
]

const countryFlags = {
  rdc: "🇨🇩",
  kenya: "🇰🇪",
  tanzania: "🇹🇿",
  burundi: "🇧🇮",
};

export const Business = () => {
  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-gray-50 dark:bg-gray-800 px-4 py-20 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Business Opportunity by Country
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Select your country to explore the opportunity in your local language and currency.
        </p>
        {/* Custom Country Dropdown */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xs">
            <button
              className="w-full flex items-center justify-between bg-white dark:bg-gray-900 border-2 border-orange-400 px-4 py-2 rounded-md text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={() => setOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">{countryFlags[selected.code]}</span>
                <span>{selected.name} ({selected.language})</span>
              </span>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {open && (
              <ul className="absolute left-0 w-full mt-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10" role="listbox">
                {countries.map((c) => (
                  <li
                    key={c.code}
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900 transition ${selected.code === c.code ? 'bg-orange-50 dark:bg-orange-800 font-bold' : ''}`}
                    onClick={() => {
                      setSelected(c);
                      localStorage.setItem("country", c.code);
                      setOpen(false);
                    }}
                    role="option"
                    aria-selected={selected.code === c.code}
                  >
                    <span className="text-xl">{countryFlags[c.code]}</span>
                    <span>{c.name} ({c.language})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Summary + Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              {selected.description}
            </p>
            <a
              href={`/presentation/${selected.code}`}
              className="inline-block bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium px-5 py-2 rounded-md transition group relative overflow-hidden"
            >
              <span className="flex items-center gap-2">
                View Full Details
                <span className="inline-block transform transition-transform group-hover:translate-x-2">
                  &rarr;
                </span>
              </span>
            </a>
          </div>

          <div>
            <VideoPlayer src={selected.videoUrl} poster={`/images/posters/${selected.code}.jpg`} />
          </div>
        </div>
      </div>
    </section>
  )
}
