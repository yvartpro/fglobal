import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export const FAQ = ({ title = "Frequently Asked Questions", data = defaultFaqs }) => {
  const [openIndex, setOpenIndex] = useState(null)

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
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          {title}
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
const defaultFaqs = [
  {
    question: "Do I need a degree or experience to start?",
    answer:
      "No, anyone can start. You’ll receive full training and mentorship even if you're new.",
  },
  {
    question: "Can I run the business from anywhere?",
    answer:
      "Yes. This is a global business. You can work from any country with internet access.",
  },
  {
    question: "Is it a one-time payment?",
    answer:
      "Yes. You pay once for your package and own the business for life — no monthly renewals.",
  },
  {
    question: "How do I receive payments?",
    answer:
      "Earnings are sent to your AIM wallet. From there you can withdraw via supported channels.",
  },
  {
    question: "What will I receive after registering?",
    answer:
      "You’ll receive product packages, digital tools, a dashboard, and lifetime mentorship.",
  },
  {
    question: "Can I register multiple accounts?",
    answer:
      "Yes, you can register 1, 3, 7, 15, or 31 accounts to increase your income potential.",
  },
]
