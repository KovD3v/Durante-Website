import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Podcast({ item }) {
	return (
		<Link
			className="flex flex-col justify-center items-center p-4 bg-slate-400 m-3 rounded-xl gap-3 shadow-lg"
			href="/podcasts/[id]"
			as={`/podcasts/${item.guid}`}>
			<Image
				src={item.itunes.image}
				alt="Podcast Image"
				width={150}
				height={150}
				className="rounded-lg"
			/>
			<b className="text-center w-full">{item.title}</b>
		</Link>
	);
}
