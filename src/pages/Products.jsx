import { useParams } from "react-router-dom"
import { CTAProducts } from "../components/CTAProducts"
import { countryData } from "../assets/countryData"

export default function Products() {
  const { country } = useParams()
  const data = country ? countryData[country] : countryData["kenya"]

  if (!data || !data.products) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        No products found for this country.
      </main>
    )
  }

  return (
    <main className="bg-white dark:bg-gray-900 px-4 py-16 text-gray-800 dark:text-gray-200 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">
          Our Wellness Products – {data.name}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.products.map((product, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-orange-500">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {product.description}
              </p>
              <p className="text-sm font-bold text-gray-800 dark:text-white">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    <CTAProducts/>
    </main>
  )
}
