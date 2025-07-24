import { VideoPlayer } from "../components/VideoPlayer";
import { Footer } from "../components/Footer";
import { useWhatsAppNumber } from "../WhatsAppNumberContext";
import { useGlobalContext } from "../GlobalContext";
import { CallToAction } from "../components/CTA";
import { PostsShimmer } from "../components/PostsShimmer";


export default function About() {
  const whatsappNumber = useWhatsAppNumber();
  const message = encodeURIComponent(`Hello Ferdinand, I want to know more about Ferdinand Global services and products.`);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${message}`;
  const { locale, posts, language, loadingPosts, } = useGlobalContext();
  const postsInLanguage = posts.filter(post => post.language.toLowerCase() === language);

  return (
    <>
      <section className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-orange-50 via-white to-gray-100 py-12 px-4">
        <div className="w-full max-w-6xl mx-auto">
<div className="w-full bg-orange-100 dark:bg-gray-800 text-center py-20 px-4 mb-3">
  <div className="max-w-4xl mx-auto" data-aos="fade-down" data-aos-duration="700">
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
      {locale.blog_title}
    </h1>
    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
      {locale.blog_sub}
    </p>
  </div>
</div>

          { loadingPosts ?  <PostsShimmer/>  :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {postsInLanguage.map((post, idx) => {
              // Determine post type based on media URL
              const postType = post.medias.endsWith('.mp4') ? 'video' : 'image';
              // If post type is not image or video, skip rendering
              if (postType !== 'image' && postType !== 'video') return null;
              return(
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div>
                  <div className="mb-2 text-xs text-gray-400 text-right">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  {postType === "image" && (
                    <div className="w-full aspect-video bg-gray-200 rounded-md overflow-hidden mb-3">
  <img
    src={post.medias}
    alt={post.titre}
    className="w-full h-full object-contain"
  />
</div>

                  )}
                  {postType === "video" && (
                    <VideoPlayer
                      src={post.medias}
                      poster={post.poster}
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {post.titre}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    {post.detail}
                  </p>
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition"
                  >
                    {locale.pre_cta_button}
                  </a>
                </div>
              </div>
            )})}
          </div> }
        </div>
      </section>
      <CallToAction/>
      <Footer />
    </>
  );
}
