import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import { PostsShimmer } from "../components/PostsShimmer";

export const PortraitCarousel = () => {
  const { posts, loadingPosts } = useGlobalContext();
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const images = posts.filter(post => post.medias && !post.medias.endsWith(".mp4"));

  // Auto-advance every 3.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.firstChild?.offsetWidth || 0;
      containerRef.current.scrollTo({
        left: slideWidth * current,
        behavior: "smooth",
      });
    }
  }, [current]);

  if (loadingPosts) return <PostsShimmer />;

  return (
    <div className="my-8 w-full overflow-hidden max-w-md mx-4">
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 px-4 py-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-4/5 snap-start rounded-sm p-2 bg-white dark:bg-gray-900 overflow-hidden"
            style={{ aspectRatio: "3 / 4" }}
          >
            <img
              src={img.medias}
              alt={img.titre}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
