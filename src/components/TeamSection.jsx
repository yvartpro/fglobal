import { teamPosts } from "../assets/team"

export const TeamSection = ()=> {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Meet the Team Behind the Movement
        </h2>

        <div className="space-y-12">
          {teamPosts.map((person, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full md:w-1/3 object-cover h-64 md:h-auto"
              />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-orange-500 dark:text-orange-400">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {person.role} — <span>{person.country}</span>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {person.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
