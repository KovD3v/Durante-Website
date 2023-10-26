import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Leonardo Durante",
	description:
		"Leonardo Durante è un insegnante di ingegneria elettronica a Roma.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className + " bg-slate-600"}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
