"use client";

import React, { useState, useEffect } from "react";
import Parser from "rss-parser";
import Image from "next/image";

export default function PodcastPage({ params }) {
	const guid = params.podcast;

	const regex = new RegExp("^(.*?)Episodio \\d+ del \\d+/\\d+/\\d+\\.", "gm");

	const [podcastData, setPodcastData] = useState([]);
	const [podcast, setPodcast] = useState({});

	useEffect(() => {
		const parser = new Parser();
		parser
			.parseURL("https://anchor.fm/s/9cb704c0/podcast/rss")
			.then((feed) => {
				setPodcastData(feed.items);
			})
			.catch((error) => {
				console.error(error);
			});
		podcastData.forEach((item) => {
			if (item.guid === guid) {
				setPodcast(item);
			}
		});
	}, [podcastData, guid]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-evenly p-12">
			<h1 className="text-white text-2xl font-semibold">
				{podcast.title?.replace(regex, "$1")}
			</h1>
			<div className="flex flex-col gap-3 items-center w-1/4">
				<Image
					src={podcast.itunes?.image}
					width={3000}
					height={3000}
					alt="podcast image"
					className="rounded-2xl shadow-lg"
				/>
				<audio
					controls
					controlsList="nodownload"
					src={podcast.enclosure?.url}
				/>
			</div>
			<p className="text-white/60 text-lg w-1/2">
				{podcast.contentSnippet}
			</p>
		</main>
	);
}
