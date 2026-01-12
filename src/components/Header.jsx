import { useEffect, useState } from "react"
import { useGlobalContext } from "../GlobalContext"

import { countries } from "../assets/countryData"

export const Header = () => {
  const { setCountry, setLanguage, country, setCurrency, locale } = useGlobalContext()
  const [opened, setOpened] = useState(false)
  const navLinks = [
    {
      name: locale.home,
      href: "/",
    },
    {
      name: locale.blog,
      href: "/blog",
    },
    ...(country
      ? [
        {
          name: locale.presentation,
          href: `/presentation/${country}`,
        },
      ]
      : []),
    {
      name: locale.products,
      href: "/products",
    },
    {
      name: locale.testimonials,
      href: "/testimonials",
    },
    {
      name: locale.contact,
      href: "/contact",
    },
  ];

  const [open, setOpen] = useState(false)

  useEffect(() => {
    switch (country) {
      case "burundi":
        setLanguage("french")
        setCurrency("FBU")
        break;
      case "tanzania":
        setLanguage("english")
        setCurrency("TZS")
        break;
      case "drc":
        setLanguage("french")
        setCurrency("USD")
        break;
      case "kenya":
        setLanguage("english")
        setCurrency("KES")
        break;
      case "rwanda":
        setLanguage("english")
        setCurrency("RWF")
        break;
      case "uganda":
        setLanguage("english")
        setCurrency("UGX")
        break;
      case "ivory":
        setLanguage("french")
        setCurrency("CFA")
        break;
      case "zambia":
        setLanguage("english")
        setCurrency("ZMW")
        break;
      case "safrica":
        setLanguage("english")
        setCurrency("ZAR")
        break;
      case "nigeria":
        setLanguage("english")
        setCurrency("NGN")
        break;
      case "dubai":
        setLanguage("english")
        setCurrency("AED")
        break;
      case "philippine":
        setLanguage("english")
        setCurrency("PHP")
        break;
      default:
        setLanguage("english")
        setCurrency("USD")
    }
  }, [country, setCurrency, setLanguage])

  return (
    <header className="bg-white dark:secondary-light shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <img src="/images/fglobalogo.png" alt="Ferdinand Global Logo" className="h-16 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative flex flex-col items-center"
            >
              <a
                href={link.href}
                className="text-primary-light dark:text-orange-300 font-medium px-2 py-1 rounded hover:bg-orange-100 dark:hover:bg-gray-700 transition"
              >
                {link.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex items-center">

          {/* Custom Country Dropdown */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs">
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-base font-semibold"
                onClick={() => setOpened((state) => !state)}
                aria-haspopup="listbox"
                aria-expanded={opened}
              >
                <span className="flex items-center gap-2">
                  <span className="text-primary-light text-sm">Country</span>
                  <span className={`text-2xl`}>{countries.find(c => c.code == country)?.flag || "🌍"}</span>
                </span>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className={`${!opened && "rotate-180"} text-primary-light`} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              {opened && (
                <ul className="absolute left-0 w-full mt-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10" role="listbox">
                  {countries.map((c) => (
                    <li
                      key={c.code}
                      className={`flex text-xs items-center gap-2 px-4 py-2 cursor-pointer hover:bg-orange-100 dark:text-white dark:bg-secondary-dark dark:hover:bg-orange-400 transition ${country === c.code ? 'bg-orange-50 dark:bg-primary-light dark:text-white font-bold' : ''}`}
                      onClick={() => {
                        setCountry(c.code)
                        localStorage.setItem("country", c.code)
                        setOpened(false)
                      }}
                      role="option"
                      aria-selected={country === c.code}
                    >
                      <span>{c.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 px-0 md:px-2 rounded text-primary-light dark:text-primary-dark focus:outline-none"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h20M4 14h20M4 21h20" />
            </svg>
          </button>
        </div>
      </div>
      {/* Offcanvas Mobile Nav */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-50 transition-opacity duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200 dark:border-gray-700">
          <span className="text-xl font-bold text-gray-900 dark:text-primary-light">Menu</span>
          <button
            className="p-2 rounded text-gray-900 dark:text-primary-light"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2 mt-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-900 dark:text-orange-300 font-medium px-2 py-2 rounded hover:bg-orange-100 dark:hover:bg-gray-700 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
              <div className="text-xs text-gray-500 dark:text-gray-400">{link.desc}</div>
            </a>
          ))}
        </nav>
      </aside>
    </header>
  )
}
