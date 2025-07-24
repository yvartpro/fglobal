export const CardShimmer = () =>{
  return (
    <div className="animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-full"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-1/2"></div>
      <div className="h-10 bg-orange-300 dark:bg-orange-600 rounded-full mt-auto"></div>
    </div>
  )
}
