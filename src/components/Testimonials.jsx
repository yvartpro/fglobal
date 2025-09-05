import { VideoPlayer } from "./VideoPlayer";
import { useGlobalContext } from "../GlobalContext";
import { PostsShimmer } from "../components/PostsShimmer";

export const Testimonials = () => {
  const { testimonials, loadingVideo, locale } = useGlobalContext();

  const firstVideo = !loadingVideo && testimonials.length > 0 ? testimonials[0] : null;

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-fixed bg-cover bg-center bg-no-repeat px-4 py-10 md:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
          {locale.mot_title}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          {locale.mot_sub}
        </p>

        {/* Loading Shimmer */}
        {loadingVideo ? (
          <PostsShimmer />
        ) : (
          firstVideo && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <VideoPlayer src={firstVideo.videos} poster={firstVideo.poster} />
                <h3 className="font-semibold mt-4 text-gray-800 dark:text-gray-100">
                  {firstVideo.titre}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {firstVideo.detail}
                </p>
              </div>
            </div>
          )
        )}

        {/* View More Button */}
        {!loadingVideo && (
          <div className="mt-12 text-center">
            <a
              href="/testimonials"
              className="inline-block hover:bg-primary-light dark:bg-primary-dark hover:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-6 shadow-sm text-sm font-medium text-orange-400 hover:text-orange-500 transition group relative overflow-hidden"
            >
              <span className="flex items-center gap-2">
                {locale.mot_button}
                <span className="inline-block transform transition-transform group-hover:translate-x-2">&rarr;</span>
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
