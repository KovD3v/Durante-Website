"use client";
import { useState, useEffect } from "react";

export default function Player({ url }) {
	const [playing, setPlaying] = useState(false);
	const [audio] = useState(new Audio(url));
	const toggle = () => setPlaying(!playing);
	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing, audio]);
	useEffect(() => {
		audio.addEventListener("ended", () => setPlaying(false));
		return () => {
			audio.removeEventListener("ended", () => setPlaying(false));
		};
	}, [audio]);
	return (
		<div>
			<button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
		</div>
	);
}
