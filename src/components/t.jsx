import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const Packages = ({ images = [] }) => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    if (!container) return
    const scrollAmount = 300
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })
  }

  return (
    <section className="px-4 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          📦 Package Previews
        </h2>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 shadow rounded-full border border-gray-300 dark:border-gray-600"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 shadow rounded-full border border-gray-300 dark:border-gray-600"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable Carousel */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex space-x-4 pb-2 scrollbar-hide"
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 snap-center bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={img}
                  alt={`Package ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 p-2 text-center">
                  Package {idx + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
