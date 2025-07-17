import { useState } from "react";
import { VideoPlayer } from "../components/VideoPlayer";

const initialPosts = [
	{
		type: "image",
		image: "/images/ferdinand.jpeg",
		title: "From Humble Beginnings",
		description:
			"Ferdinand shares a moment with a hen, symbolizing hard work and growth.",
		date: "2025-07-17",
	},
	{
		type: "video",
		video: "/videos/presentations/motivation_home.mp4",
		poster: "/videos/posters/motivation_home.png",
		title: "Motivation for All",
		description: "A message to inspire everyone in the network.",
		date: "2025-07-16",
	},
	{
		type: "text",
		title: "Welcome to Ferdinand's Blog!",
		description:
			"Here you'll find updates, stories, and tips for your network marketing journey.",
		date: "2025-07-15",
	},
	{
		type: "image",
		image: "/images/products/capuccino.png",
		title: "Celebrating Success",
		description: "Congratulations to our latest graduate!",
		date: "2025-07-14",
	},
];

export default function Blog() {
	const [posts] = useState(initialPosts);

	return (
		<section className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-orange-50 via-white to-gray-100 py-12 px-4">
			<div className="w-full max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up" data-aos-duration="700">
					Ferdinand's Blog
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{posts.map((post, idx) => (
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
								{post.type === "image" && (
									<img
										src={post.image}
										alt={post.title}
										className="w-full rounded-xl mb-4 object-cover"
										style={{ aspectRatio: "16/9" }}
									/>
								)}
								{post.type === "video" && (
									<VideoPlayer
                                        src={post.video}
										poster={post.poster}
                                        />
								)}
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									{post.title}
								</h3>
								<p className="text-base text-gray-700 dark:text-gray-300 mb-2">
									{post.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
