import { useEffect } from "react"
import { CTAProducts } from "../components/CTAProducts"
import { useGlobalContext } from "../GlobalContext"
import { useWhatsAppNumber } from "../WhatsAppNumberContext"
import { CardShimmer } from "../components/CardShimmer"
import { CountryFallback } from "../components/CountryFallback"

export default function Products() {
  const { rawProducts, products, country, currency, locale, setProducts, loadingProducts, setLoadingProducts } = useGlobalContext()
  const whatsappNumber = useWhatsAppNumber();

  useEffect(() => {
    if (rawProducts.length === 0 || !country) return;

    setLoadingProducts(true);

    const countryPriceMap = {
      burundi: "bdi_price",
      tanzania: "tz_price",
      drc: "drc_price",
      kenya: "ke_price",
      rwanda: "rw_price",
      uganda: "ug_price",
      ivory: "iv_price",
      zambia: "zb_price",
      safrica: "sa_price",
      nigeria: "ng_price",
      dubai: "db_price",
      philippine: "php_price",
    };

    const priceKey = countryPriceMap[country.toLowerCase()];

    const updated = rawProducts.map(product => {
      const validPrice = priceKey && product[priceKey] !== "0.00" && product[priceKey] !== undefined;

      return {
        ...product,
        price: validPrice ? product[priceKey] : product.price,
        currency: validPrice ? currency : "USD"
      };
    });

    setProducts(updated);
    setLoadingProducts(false);
  }, [country, rawProducts, setProducts, setLoadingProducts, currency]);

  if (!country) {
    return <CountryFallback target="products" />
  }


  return (
    <main className="bg-white dark:bg-gray-900 px-4 py-16 text-gray-800 dark:text-gray-200 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-lg md:text-2xl font-bold text-center mb-10" data-aos="fade-up" data-aos-duration="700">
          {locale.products_title}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="100">
          {locale.products_sub}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loadingProducts
            ? Array.from({ length: 8 }).map((_, idx) => <CardShimmer key={idx} />)
            : products.map((product, idx) => {
              const message = encodeURIComponent(`Hello Ferdinand, I want to buy ${product.nom} and I am from ${country.toUpperCase()}.`);
              const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${message}`;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition flex flex-col h-full"
                >
                  <img src={product.photos} alt={product.npm} className="w-full object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-orange-500">{product.nom}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{product.details}</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-white mb-4">
                    {product.price} {product.currency}
                  </p>
                  <div className="mt-auto">
                    <a
                      href={whatsappLink}
                      className="block bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition text-center w-full"
                    >
                      {locale.cta_whatsapp_buy_now}
                    </a>
                  </div>
                </div>
              );
            })}
        </div>

      </div>
      <CTAProducts />
    </main>
  )
}



