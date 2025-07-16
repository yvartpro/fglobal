import { TeamSection } from "../components/TeamSection"
export default function About() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      {/* Section: Ferdinand’s Story */}
      <section className="px-4 py-20 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 border-b">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 dark:text-orange-400 mb-4">
            Meet Ferdinand
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm Ferdinand, a passionate entrepreneur from Burundi 🇧🇮 now based in Kenya 🇰🇪. From a student to building 34 accounts and expanding across 7+ countries, I believe in global transformation through mentorship, systems, and inspiration.
          </p>
          <img
            src="/images/team/ferdinand.jpg"
            alt="Ferdinand"
            className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-orange-400 shadow-lg mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            “We are here to guide, support, and empower. But your dreams must burn stronger than our push.”
          </p>
        </div>
      </section>
      <TeamSection/>

</main>  );
}
