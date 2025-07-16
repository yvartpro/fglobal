export const Packages = ({ images = [] })=> {
  return (
    <section className="px-4 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
          📦 Package Previews
        </h2>

        <div className="relative overflow-x-auto snap-x snap-mandatory flex space-x-4 pb-4 scroll-smooth scrollbar-hide">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 snap-center bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700"
            >
              <img
                src={img}
                alt={`Package ${idx + 1}`}
                className="w-full  object-fill rounded-xl"
              />
              {/* <p className="text-sm text-gray-500 dark:text-gray-400 p-2">
                Package {idx + 1}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
