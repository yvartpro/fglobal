import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useGlobalContext } from "../GlobalContext"

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const { locale } = useGlobalContext()

  const data = [
  {
    question: locale.faq1,
    answer: locale.rep1,
  },
  {
    question: locale.faq2,
    answer: locale.rep2,
  },
  {
    question: locale.faq3,
    answer: locale.rep3,
  },
  {
    question: locale.faq4,
    answer: locale.rep4,
  },
  {
    question: locale.faq5,
    answer: locale.rep5,
  },
  {
    question: locale.faq6,
    answer: locale.rep6,
  },

]

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  // Split into 2 columns for desktop
  const mid = Math.ceil(data.length / 2)
  const left = data.slice(0, mid)
  const right = data.slice(mid)

  return (
    <section className="px-4 py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-10">
          {locale.faq_title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[left, right].map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {column.map((faq, idx) => {
                const index = colIndex === 0 ? idx : idx + mid
                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 border rounded-lg shadow-sm ${
                      openIndex === index
                        ? "bg-white dark:bg-gray-800 border-orange-400"
                        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full text-left flex justify-between items-center px-4 py-4 text-gray-800 dark:text-white font-medium"
                    >
                      <span>{faq.question}</span>
                      {openIndex === index ? (
                        <ChevronUp size={20} className="text-orange-500" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="px-4 pb-4 text-sm text-gray-700 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Default questions if no props passed
