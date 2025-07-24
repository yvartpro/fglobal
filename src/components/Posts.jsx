import { useEffect, useState } from "react";

const posts = [
  {
    image: "/images/ere_1.jpeg",
    alt: "Nomads and early agriculture",
    title: "From Nomadism to Agriculture",
    description:
      "Humanity evolved from wandering tribes to settled farmers. This era marks the birth of civilization, community, and the first steps toward progress.",
  },
  {
    image: "/images/ere_2.jpeg",
    alt: "Student graduated",
    title: "Beyond School: Real Leverage in a Changing World",
    description:
      "Success is no longer just about school achievements. With robotics and technology transforming jobs, learning to use true leverage is essential for the future.",
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
					<img
						src={post.image}
						alt={post.alt}
						className="w-full max-w-xs md:max-w-md rounded-xl shadow mb-6 object-cover"
						style={{ aspectRatio: "16/9" }}
					/>
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
