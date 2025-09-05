import { useGlobalContext } from "../GlobalContext";
import { useWhatsAppNumber } from "../WhatsAppNumberContext";

export const Footer = ()=> {
  const whatsApp = useWhatsAppNumber()
  const { locale } = useGlobalContext();
return <footer
className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600 dark:text-gray-300">

    {/* Brand */}
    <div>
      <h3 className="font-bold text-gray-800 dark:text-white mb-2">Ferdinand Global</h3>
      <p className="text-gray-500 dark:text-gray-400">
        {locale.f_txt}
      </p>
    </div>

    {/* Navigation */}
    <div>
      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Explore</h4>
      <ul className="space-y-1">
        <li><a href="/" className="hover:underline">{locale.home}</a></li>
        <li><a href="/products" className="hover:underline">{locale.products}</a></li>
        <li><a href="/testimonials" className="hover:underline">{locale.testimonials}</a></li>
        <li><a href="/join" className="hover:underline">{locale.join}</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Contact</h4>
      <ul className="space-y-1">
        <li>Email: <a href="mailto:ferdmbonimpa@gmail.com" className="hover:underline">ferdmbonimpa@gmail.com</a></li>
        <li>{locale.f_phone}: <a href={`tel:${whatsApp}`} target="_blank" rel="noopener noreferrer">+{whatsApp}</a></li>
        <li>WhatsApp: +{whatsApp}</li>
        <li>{locale.f_address}: Kenyatta Avenue, Caxton House, 1st Floor</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Follow</h4>
      <ul className="space-y-1">
        <li>
          <a
            href="https://www.facebook.com/share/19fhMd1983/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>
        </li>
        {/* Add others like Instagram, YouTube, etc. later if needed */}
      </ul>
    </div>
  </div>

  <div className="text-center text-xs text-gray-400 dark:text-gray-600 mt-8">
    <span>© {new Date().getFullYear()} {locale.f_copy}</span>
    <p>Powerd by <a href="https://vovota.bi/about" className="text-sky-500 dark:text-sky-200 hover:underline">Vovota</a></p>
  </div>
</footer>
}
