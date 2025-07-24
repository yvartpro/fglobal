export const PostsShimmer = () =>{
  const shimmerBlock = "animate-pulse bg-gray-200 dark:bg-gray-700 rounded";

  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden"
          >
            <div className={`${shimmerBlock} h-48 w-full`} />
            <div className="p-4 space-y-2">
              <div className={`${shimmerBlock} h-4 w-1/2`} />
              <div className={`${shimmerBlock} h-3 w-full`} />
              <div className={`${shimmerBlock} h-3 w-5/6`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
