import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

function useFetchStarsCount() {
	const [starsCount, setStarsCount] = useState<number | null>(undefined);

	useEffect(() => {
		fetch("https://api.github.com/repos/TheEdoRan/next-safe-action")
			.then((res) =>
				res.json().then((data) => {
					if (typeof data.stargazers_count === "number") {
						setStarsCount(data.stargazers_count);
					}
				})
			)
			.catch(console.error);
	}, []);

	return { starsCount };
}

export function StarsButton() {
	// const { starsCount } = useFetchStarsCount();
	const starsCount = 269;

	return (
		<a
			href="https://github.com/TheEdoRan/next-safe-action"
			target="_blank"
			rel="noopener noreferrer"
			className="!no-underline hover:!bg-sky-100 transition !text-stone-900 cursor-pointer rounded-lg mr-4 bg-stone-50 px-3 py-2 font-bold inline-flex items-center justify-center space-x-1 text-sm sm:text-lg md:text-xl">
			<Star className="w-4 h-4 sm:w-6 sm:h-6" />
			<span>{starsCount ? starsCount : ". . ."} GitHub stars</span>
		</a>
	);
}
