import { useWhatsAppNumber } from "../WhatsAppNumberContext";
import { useGlobalContext } from "../GlobalContext";
export const CallToAction = () => {
  const { locale, country } = useGlobalContext();
  const whatsappNumber = useWhatsAppNumber();
  const message = encodeURIComponent(`Hello Ferdinand, I want to know more about Ferdinand Global services.`);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${message}`;
  return (
    <section className="relative bg-orange-400 dark:bg-orange-500 text-white px-6 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          {locale.cta_title}
        </h2>
        <p className="text-base sm:text-lg text-orange-100 mb-8 max-w-xl mx-auto">
          {locale.cta_sub}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`/presentation/${country}`}
            className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            {locale.cta_see_presentation}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-300 transition"
          >
            {locale.cta_whatsapp_button}
          </a>
        </div>
      </div>
    </section>
  );
};
