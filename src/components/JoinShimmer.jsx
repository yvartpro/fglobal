// components/JoinPageShimmer.jsx
export const JoinPageShimmer = () =>{
  const shimmerBlock = "animate-pulse bg-gray-200 dark:bg-gray-700 rounded";

  return (
    <>
      <section className="px-4 py-16 bg-gradient-to-t from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 border-b dark:border-gray-700">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="w-full h-[300px] rounded-xl bg-white dark:bg-gray-900 border-2 border-orange-400 flex items-center justify-center">
              <div className={`${shimmerBlock} w-full h-full`} />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className={`${shimmerBlock} h-8 w-2/3`} />
            <div className={`${shimmerBlock} h-6 w-1/2`} />
            <div className={`${shimmerBlock} h-20 w-full`} />
            <div className={`${shimmerBlock} h-10 w-40`} />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-orange-50 dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
              <div className={`${shimmerBlock} h-6 w-1/2`} />
              <div className={`${shimmerBlock} h-20 w-full`} />
              <div className={`${shimmerBlock} h-6 w-3/4`} />
              <div className={`${shimmerBlock} h-6 w-2/4`} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 space-y-4">
              <div className={`${shimmerBlock} h-6 w-1/2`} />
              <div className={`${shimmerBlock} h-20 w-full`} />
              <div className={`${shimmerBlock} h-6 w-2/3`} />
              <div className={`${shimmerBlock} h-6 w-2/5`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
