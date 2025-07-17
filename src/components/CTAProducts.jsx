import { useWhatsAppNumber } from "../WhatsAppNumberContext";

export const CTAProducts = () => {
  const whatsappNumber = useWhatsAppNumber();
  return (
    <section className="mt-20 bg-orange-400 dark:bg-orange-500 text-white py-16 px-4 rounded-2xl shadow-2xl flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Enjoy These Products?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-xl">
            These science-backed health and wellness products are only available
            through AIM Global’s members. Join now and unlock exclusive packages,
            prices, and lifelong benefits.
          </p>
        </div>
        {/* Right: CTA Buttons */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="/join"
            className="bg-white text-orange-500 font-semibold px-8 py-4 rounded-full hover:bg-orange-100 transition text-lg shadow"
          >
            Join AIM Global
          </a>
          <a
            href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-300 transition text-lg shadow"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
