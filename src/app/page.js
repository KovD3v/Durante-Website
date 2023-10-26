"use client";

import Image from "next/image";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function Home() {
	useEffect(() => {
		function handleResize() {
			const { width, height } = getWindowDimensions();
			console.log(width, height);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<main className="flex w-full min-h-screen flex-col items-center justify-between p-5">
			<div className="flex flex-col w-full gap-8">
				<Image
					src="https://www.bedifferentmagazine.it/wp-content/uploads/2018/09/MRS_0601.jpg"
					width={1200 * 2}
					height={675 * 2}
					alt="Banner"
					className="w-3/4 rounded-2xl self-center shadow-lg"
				/>
				<div className="flex flex-col w-full text-center text-white px-[5%]">
					Leonardo Durante, ingegnere elettronico, specializzato nella
					fotonica e nelle microonde. Dopo studi e master a Palermo,
					si stabilisce a Roma nel 2014. Da docente in Sistemi
					Automatici e Controlli presso l&apos;Istituto Tecnico
					Industriale &lsquo;Enrico Fermi&rsquo;, sviluppa
					l&apos;innovazione educativa tramite progetti Erasmus in
					Spagna e UK. La sua parola chiave è
					&ldquo;innovazione&rdquo;. Nel 2020 vince il Life Innovation
					Award e nel 2021 viene proclamato tra i 50 migliori docenti
					al mondo. Leonardo insegna, promuovendo la cittadinanza
					globale e la lotta al cambiamento climatico. Riconoscimenti
					da figure istituzionali e attiva divulgazione su piattaforme
					online.
				</div>
			</div>
		</main>
	);
}
