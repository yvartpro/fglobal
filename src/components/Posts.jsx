import { useEffect, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";

const posts = [
  {
    src: "https://ferdinandglobal.com/videos/evolution.mp4",
    alt: "Business owner",
    title: "The Old and Traditionl School System",
    poster: "/images/evolution.jpg",
    description:
      "We were tought to go to school, get good grades, secure job -  and life will be set. But the World has changed. Degrees don't guarantee security, and traditional jobs are no longer safe. Own your Business, be Independent. It's time to rethink the goood path to success.",
  },
  {
    src: "https://ferdinandglobal.com/videos/pipeline.mp4",
    alt: "Pablo vs Bruno's Story - The Power of Leverage",
    title: "Power of leverage",
    poster: "/images/pablo.jpg",
    description:
      "Bruno worked hard, carrying buckets of waater from one mountain to another every day. Pablo instead, built a piipeline. While Bruno sweated daily, Pablo created a system that worked even while he rested. This timeless story reveals a powerfull truth: Hard Work Without Leverage Keeps You Stuck. Want real freedom ? Learn to build pipelines, not just cary buckets.",
  },
];

export const Posts = () => {
	const [index, setIndex] = useState(0);

	const goTo = (i) => setIndex(i);
	const prev = () => setIndex((index - 1 + posts.length) % posts.length);
	const next = () => setIndex((index + 1) % posts.length);
	const post = posts[index];

	return (
		<section className="w-full flex justify-center items-center py-12 px-4 bg-gradient-to-br from-orange-50 via-white to-gray-100">
			<div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center">
				<div className="relative w-full flex flex-col items-center">
					<VideoPlayer src={post.src} poster={post.poster}/>
					<h2 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
						{post.title}
					</h2>
					<p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 text-center">
						{post.description}
					</p>
				</div>
				{/* Carousel Controls */}
				<div className="flex items-center justify-between w-full mt-4">
					<button
						onClick={prev}
						className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 shadow transition"
						aria-label="Previous"
					>
						<svg
							width="24"
							height="24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							<path d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<div className="flex gap-2">
						{posts.map((_, i) => (
							<button
								key={i}
								onClick={() => goTo(i)}
								className={`w-3 h-3 rounded-full border-2 ${
									i === index
										? "bg-orange-500 border-orange-500"
										: "bg-gray-200 border-gray-300"
								} transition`}
								aria-label={`Go to slide ${i + 1}`}
							/>
						))}
					</div>
					<button
						onClick={next}
						className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 shadow transition"
						aria-label="Next"
					>
						<svg
							width="24"
							height="24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							<path d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};
