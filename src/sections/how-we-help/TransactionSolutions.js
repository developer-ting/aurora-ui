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
import Banner1 from "/public/img/products/banner1.jpg";
import Banner2 from "/public/img/products/banner2.jpg";
import Banner3 from "/public/img/products/banner3.jpg";
import Banner4 from "/public/img/products/banner4.jpg";

import PowerRenewables from "/public/img/products/power-renewables.png";
import Hydrogen from "/public/img/products/hydrogen.png";
import Grid from "/public/img/products/grid.png";

// DATA //

/** TransactionSolutions Section */
export default function TransactionSolutions({ data, keyValue = "products" }) {
	const animTimeline = gsap.timeline({});

	console.log(keyValue, "key");

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const winW = window.innerWidth;
		const winH = window.innerHeight;

		const spaceLeftArray = gsap.utils.toArray(`.${styles.SpaceLeft}`);
		const spaceLeftArrayImg = gsap.utils.toArray(`.${styles.flexItemTwo} img`);

		spaceLeftArray.forEach((star, idx) => {
			if (spaceLeftArray.length === idx + 1) {
				animTimeline.to(
					spaceLeftArray[idx + 1],
					{
						y: 0,
					},
					`${idx}st`
				);
				// .to(
				// 	spaceLeftArrayImg[idx + 1],
				// 	{
				// 		opacity: 0,
				// 	},
				// 	`${idx}st`
				// );
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
			end: "+=" + winH * (data?.length || spaceLeftArray.length),
			scrub: true,
			pin: true,
			// markers: true,
		});
	}, []);

	const key1 = "softwares";

	return (
		<section className={`${styles.TransactionSolutions}`}>
			<div className={`${styles.flexBox} f_j`}>
				<div className={`${styles.flexItemOne}`}>
					{data?.map((item, ind) => {
						console.log(keyValue);
						return (
							<div
								className={`${styles.SpaceLeft}`}
								key={ind}
								style={{
									background: `linear-gradient(180deg,${item?.[keyValue]?.thumbnail.gradient.from} 0%,${item?.[keyValue]?.thumbnail.gradient.to} 100%)`,
								}}
							>
								<div className={`${styles.spaceInner}`}>
									<img
										src={
											item?.[keyValue]?.thumbnail.logo.node.sourceUrl || lumus_logo.src
										}
										alt="solar plant"
									/>
									<h2 className="text_xl font_primary f_w_m color_white pt_40">
										{item.title}
									</h2>
									<p className={`${styles.label} text_reg color_platinum_gray`}>
										{item?.[keyValue]?.thumbnail.shortDescription}
									</p>
									<div className={`${styles.bookBtn} pt_30`}>
										<a href={`/products/${item.slug}`}>
											<Button color="secondary" variant="underline" mode="dark">
												Know more
											</Button>
										</a>
									</div>
								</div>
							</div>
						);
					})}
					{(data?.length === 0 || !data) && (
						<>
							<div className={`${styles.SpaceLeft}`}>
								<div className={`${styles.spaceInner}`}>
									<img src={PowerRenewables.src} alt="solar plant" />
									<h2 className="text_xl font_primary f_w_m color_white pt_40">
										Lorem ipsum dolor sit amet consectetur
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
									<img src={PowerRenewables.src} alt="solar plant" />
									<h2 className="text_xl font_primary f_w_m color_white pt_40">
										Lorem ipsum dolor sit amet consectetur
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
									<img src={Hydrogen.src} alt="solar plant" />
									<h2 className="text_xl font_primary f_w_m color_white pt_40">
										Lorem ipsum dolor sit amet consectetur
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
									<img src={Grid.src} alt="solar plant" />
									<h2 className="text_xl font_primary f_w_m color_white pt_40">
										Lorem ipsum dolor sit amet consectetur
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
						</>
					)}
				</div>
				<div className={`${styles.flexItemTwo}`}>
					{data?.map((item, ind) => {
						return (
							<img
								key={ind}
								src={item?.[keyValue]?.thumbnail.banner.node.sourceUrl}
								alt="solar plant"
							/>
						);
					})}
					{(data?.length === 0 || !data) && (
						<>
							<img src={Banner1.src} alt="solar plant" />
							<img src={Banner2.src} alt="solar plant" />
							<img src={Banner3.src} alt="solar plant" />
							<img src={Banner4.src} alt="solar plant" />
						</>
					)}
				</div>
			</div>
		</section>
	);
}
