import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex flex-row justify-evenly p-3">
			<div className="flex flex-row gap-3">
				<Link
					href="/"
					className="flex text-center p-3 bg-slate-700 rounded-lg text-white ">
					Home
				</Link>
				<Link
					href="/"
					className="flex text-center p-3 bg-slate-700 rounded-lg text-white ">
					My Story
				</Link>
				<Link
					href="/podcasts"
					className="flex text-center p-3 bg-slate-700 rounded-lg text-white ">
					Podcast
				</Link>
				<Link
					href="/"
					className="flex text-center p-3 bg-slate-700 rounded-lg text-white ">
					Divulgazione
				</Link>
				<Link
					href="/"
					className="flex text-center p-3 bg-slate-700 rounded-lg text-white ">
					Dicono di me
				</Link>
			</div>
		</nav>
	);
}
