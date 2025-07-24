import { useWhatsAppNumber } from "../WhatsAppNumberContext";
import { useGlobalContext } from "../GlobalContext";

export const CTAProducts = () => {
  const whatsappNumber = useWhatsAppNumber();
  const { locale, country } = useGlobalContext();
  const message = encodeURIComponent(`Hello Ferdinand, I want to know more about Ferdinand Global services and products.`);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${message}`;
  return (
    <section className="mt-20 bg-orange-400 dark:bg-orange-500 text-white py-16 px-4 rounded-2xl shadow-2xl flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {locale.cta_products_title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-xl">
            {locale.cta_products_text}
          </p>
        </div>
        {/* Right: CTA Buttons */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href={`/presentation/${country}`}
            className="bg-white text-orange-500 font-semibold px-8 py-4 rounded-full hover:bg-orange-100 transition text-lg shadow"
          >
            {locale.cta_products_button_join}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-300 transition text-lg shadow"
          >
            {locale.cta_products_button_whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
};
