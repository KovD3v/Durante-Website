"use client";

import React, { useState, useEffect } from "react";
import Parser from "rss-parser";
import Podcast from "@/app/podcast";

export default function Podcasts() {
	const [podcastData, setPodcastData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const parser = new Parser();
		parser
			.parseURL("https://anchor.fm/s/9cb704c0/podcast/rss")
			.then((feed) => {
				setPodcastData(feed.items);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setIsLoading(false);
			});
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between px-3">
			<h1 className="text-white text-2xl font-semibold">Podcast</h1>

			{isLoading ? (
				<p className="text-white text-lg">Caricamento...</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					{podcastData.map((item) => (
						<Podcast key={item.guid} item={item} />
					))}
				</div>
			)}
		</main>
	);
}
