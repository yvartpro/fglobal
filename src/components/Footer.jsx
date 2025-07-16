export const Footer = ()=> <footer
className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600 dark:text-gray-300">

    {/* Brand */}
    <div>
      <h3 className="font-bold text-gray-800 dark:text-white mb-2">Ferdinand Global</h3>
      <p className="text-gray-500 dark:text-gray-400">
        Empowering dreams. Building entrepreneurs. Leading globally.
      </p>
    </div>

    {/* Navigation */}
    <div>
      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Explore</h4>
      <ul className="space-y-1">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/products" className="hover:underline">Products</a></li>
        <li><a href="/testimonials" className="hover:underline">Testimonials</a></li>
        <li><a href="/join" className="hover:underline">Join Us</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Contact</h4>
      <ul className="space-y-1">
        <li>Email: <a href="mailto:ferdmbonimpa@gmail.com" className="hover:underline">ferdmbonimpa@gmail.com</a></li>
        <li>Phone: +254111878523</li>
        <li>WhatsApp: +254112361568</li>
        <li>Address: Kenyatta Avenue, Caxton House, 1st Floor</li>
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
    © {new Date().getFullYear()} Ferdinand Global. All rights reserved.
  </div>
</footer>
