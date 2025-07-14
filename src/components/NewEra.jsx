export const NewEra = ()=> <section
className="bg-gray-50 dark:bg-gray-800 px-4 py-20 border-t border-gray-200 dark:border-gray-700">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
    {/* Supporting image */}
    <div className="flex justify-center">
      <img
        src="/images/global-network.jpg" // Placeholder — change to your educational image
        alt="21st century concept"
        className="w-full max-w-sm md:max-w-md rounded-lg"
      />
    </div>

    {/* Text content */}
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        From Jobs to Digital Freedom: The Shift of Our Era
      </h2>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
        We’ve entered a new world. The Industrial Age rewarded workers. The Information Age rewards thinkers, creators, and networkers.
      </p>
      <ul className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 list-disc list-inside">
        <li><strong>Industrial Age:</strong> Get a job, stay for 40 years, retire at 65.</li>
        <li><strong>Information Age:</strong> Leverage systems, communities, and global tools.</li>
        <li><strong>Digital Wealth:</strong> Build income without being physically present.</li>
        <li><strong>Mobile-First:</strong> Run your business from a phone, anywhere on Earth.</li>
      </ul>
    </div>

  </div>
</section>
