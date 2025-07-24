import { FaWhatsapp } from "react-icons/fa";
import { useWhatsAppNumber } from "../WhatsAppNumberContext";

export const WhatsAppFab = () => {
  const whatsappNumber = useWhatsAppNumber();

  const message = encodeURIComponent(`Hello Ferdinand, I want to know more about Ferdinand Global services.`);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${message}`;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="mx-auto w-6 h-6  sm:h-10 sm:w-10" />
    </a>
  );
};
