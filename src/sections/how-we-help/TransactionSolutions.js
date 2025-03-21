// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// UTILS //

// STYLES //
import styles from "@/styles/sections/how-we-help/TransactionSolutions.module.scss";

// IMAGES //
import solar_plant from "@/../public/img/transactions/solar_plant.jpg";
import lumus_logo from "@/../public/img/transactions/lumus_logo.png";
import TestImg from "/public/img/softwares/insightsBg.png";

// DATA //

/** TransactionSolutions Section */
export default function TransactionSolutions() {
	const animTimeline = gsap.timeline({});
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const winW = window.innerWidth;
		const winH = window.innerHeight;

		const spaceLeftArray = gsap.utils.toArray(`.${styles.SpaceLeft}`);
		const spaceLeftArrayImg = gsap.utils.toArray(`.${styles.flexItemTwo} img`);

		spaceLeftArray.forEach((star, idx) => {
			if (spaceLeftArray.length === idx + 1) {
				animTimeline
					.to(
						spaceLeftArray[idx + 1],
						{
							y: 0,
						},
						`${idx}st`
					)
					.to(
						spaceLeftArrayImg[idx + 1],
						{
							opacity: 0,
						},
						`${idx}st`
					);
			} else {
				animTimeline
					.to(star, { y: "-100%" }, `${idx}st`)
					.to(
						spaceLeftArray[idx + 1],
						{
							y: 0,
						},
						`${idx}st`
					)
					.to(spaceLeftArrayImg[idx], { opacity: 0 }, `${idx}st`)
					.to(
						spaceLeftArrayImg[idx + 1],
						{
							opacity: 1,
						},
						`${idx}st`
					);
			}
		});

		// ScrollTrigger.create({
		// 	// animation: animTimeline,
		// 	trigger: `.${styles.TransactionSolutions}`,
		// 	start: "top top",
		// 	end: "+=" + winH,
		// 	scrub: true,
		// 	pin: true,
		// });

		ScrollTrigger.create({
			animation: animTimeline,
			trigger: `.${styles.TransactionSolutions}`,
			start: "top top",
			end: "+=" + winH * spaceLeftArrayImg.length,
			scrub: true,
			pin: true,
			markers: true,
		});
	}, []);

	return (
		<section className={`${styles.TransactionSolutions}`}>
			<div className={`${styles.flexBox} f_j`}>
				<div className={`${styles.flexItemOne}`}>
					<div className={`${styles.SpaceLeft}`}>
						<div className={`${styles.spaceInner}`}>
							<img src={lumus_logo.src} alt="solar plant" />
							<h2 className="text_xl font_primary f_w_m color_white pt_40">
								Transaction solutions powered by Lumus PPA
							</h2>
							<p className={`${styles.label} text_reg color_platinum_gray`}>
								Lorem ipsum dolor sit amet consectetur. Mauris scelerisque pharetra a
								tellus imperdiet.
							</p>
							<div className={`${styles.bookBtn} pt_30`}>
								<Button color="secondary" variant="underline" mode="dark">
									Know more
								</Button>
							</div>
						</div>
					</div>
					<div className={`${styles.SpaceLeft}`}>
						<div className={`${styles.spaceInner}`}>
							<img src={lumus_logo.src} alt="solar plant" />
							<h2 className="text_xl font_primary f_w_m color_white pt_40">
								Transaction solutions powered by Lumus PPA
							</h2>
							<p className={`${styles.label} text_reg color_platinum_gray`}>
								Lorem ipsum dolor sit amet consectetur. Mauris scelerisque pharetra a
								tellus imperdiet.
							</p>
							<div className={`${styles.bookBtn} pt_30`}>
								<Button color="secondary" variant="underline" mode="dark">
									Know more
								</Button>
							</div>
						</div>
					</div>
					<div className={`${styles.SpaceLeft}`}>
						<div className={`${styles.spaceInner}`}>
							<img src={lumus_logo.src} alt="solar plant" />
							<h2 className="text_xl font_primary f_w_m color_white pt_40">
								Transaction solutions powered by Lumus PPA
							</h2>
							<p className={`${styles.label} text_reg color_platinum_gray`}>
								Lorem ipsum dolor sit amet consectetur. Mauris scelerisque pharetra a
								tellus imperdiet.
							</p>
							<div className={`${styles.bookBtn} pt_30`}>
								<Button color="secondary" variant="underline" mode="dark">
									Know more
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className={`${styles.flexItemTwo}`}>
					<img src={solar_plant.src} alt="solar plant" />
					<img src={TestImg.src} alt="solar plant" />
					<img src={solar_plant.src} alt="solar plant" />
				</div>
			</div>
		</section>
	);
}
