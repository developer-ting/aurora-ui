// MODULES //
import { useState, useEffect, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { motion } from "framer-motion";

// UTILS //

// STYLES //
import styles from "@/styles/components/CircularMenu.module.scss";

// IMAGES //

// DATA //

/** CircularMenu Component */
export default function CircularMenu({ items, iconDefault, mode }) {
	const containerRef = useRef(null);
	const [selectedService, setselectedServices] = useState(null);
	const [size, setSize] = useState(450); // Default size

	// Dynamically adjust size when parent changes
	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				const newSize = Math.min(entry.contentRect.width, entry.contentRect.height); // Keep it square
				setSize(newSize);
			}
		});

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	/** styles  */
	const stylesForAlternateModes = () => {
		let obj = {
			fill: "#1a1a1a",
			stroke: "#333",
			iconDefault: "none",
			iconWhileHover: "invert(1)",
		};

		if (mode === "light") {
			obj = {
				fill: "#f7f7f7",
				stroke: "#CECECE",
				iconDefault: "none",
				iconWhileHover: "none",
			};
		}

		return obj;
	};

	/** hoverOver  */
	const hoverOver = (i) => {
		// setHoveredIndex(i);
		setselectedServices(i);
	};

	/** hoverEnd  */
	const hoverEnd = () => {
		// setHoveredIndex(null);
		// setselectedServices(null);
	};

	const center = size / 2;
	const radius = center * 0.9; // 90% of half size, keeping padding
	const labelRadius = radius * 1.1; // Slightly outside the slices
	const sliceAngle = 360 / items.length;

	return (
		<>
			<div
				className={`${styles.selected} ${
					selectedService === null && styles.hide
				} m_b_15`}
			>
				<p
					className={`${styles.title} ${
						mode === "light" ? "color_secondary" : "color_white"
					} text_md font_secondary text_500 m_b_15`}
				>
					{items?.[selectedService]?.title || "Lorem ipsum dolor"}
				</p>
				<p className={`${styles.desc} color_light_gray text_xs`}>
					{items?.[selectedService]?.description ||
						"Lorem ipsum dolor sit amet consectetur. Dolor nibh enim lobortis."}
				</p>
			</div>

			<div className={`${styles.CircleInfo} ${styles.CircleBox}`}>
				<div
					ref={containerRef}
					style={{ width: "100%", height: "100%", position: "relative" }}
				>
					<svg
						width="100%"
						height="100%"
						viewBox={`0 0 ${size} ${size}`}
						preserveAspectRatio="xMidYMid meet"
					>
						{items.map((item, i) => {
							const startX =
								center + radius * Math.cos((i * sliceAngle * Math.PI) / 180);
							const startY =
								center + radius * Math.sin((i * sliceAngle * Math.PI) / 180);
							const endX =
								center + radius * Math.cos(((i + 1) * sliceAngle * Math.PI) / 180);
							const endY =
								center + radius * Math.sin(((i + 1) * sliceAngle * Math.PI) / 180);

							// Midpoint formula for placing the image at the center of the slice
							const midAngle = ((i + 0.5) * sliceAngle * Math.PI) / 180;
							const midX = center + ((radius * 2) / 3) * Math.cos(midAngle);
							const midY = center + ((radius * 2) / 3) * Math.sin(midAngle);

							// Position text outside the slice
							const textX =
								center +
								labelRadius * Math.cos(((i + 0.5) * sliceAngle * Math.PI) / 180);
							const textY =
								center +
								labelRadius * Math.sin(((i + 0.5) * sliceAngle * Math.PI) / 180);
							const rotation = 0; // Rotate text for alignment

							return (
								<g
									key={i}
									onMouseEnter={() => hoverOver(i)}
									onMouseLeave={() => hoverEnd()}
									onTouchStart={() => hoverOver(i)} // Mobile: Detect touch
									onTouchEnd={() => setTimeout(() => hoverEnd(), 300)} // Delay reset to see effect
								>
									<motion.path
										d={`M${center},${center} L${startX},${startY} A${radius},${radius} 0 0,1 ${endX},${endY} Z`}
										fill={
											i === selectedService ? "#FFCC00" : stylesForAlternateModes().fill
										}
										stroke={stylesForAlternateModes().stroke}
										strokeWidth="2"
										// whileHover={{ fill: "#FFCC00" }}
										// whileTap={{ fill: "#FFCC00" }}
										// whileFocus={{ fill: "#FFCC00" }}
									/>
									<image
										href={item?.image?.node?.sourceUrl || iconDefault.src}
										width={iconDefault.width}
										height={iconDefault.height}
										x={midX - iconDefault.width / 2} // Center the image
										y={midY - iconDefault.height / 2}
										style={{
											filter:
												selectedService === i
													? stylesForAlternateModes().iconDefault
													: stylesForAlternateModes().iconWhileHover, // Default white, hover shows original
											transition: "filter 0.3s ease-in-out",
											pointerEvents: "none",
										}}
									/>
									{/* <text
								x={textX}
								y={textY}
								fill="#fff"
								fontSize="16"
								textAnchor="middle"
								alignmentBaseline="middle"
								width={250}
								transform={`rotate(${rotation}, ${textX}, ${textY})`}
								pointerEvents="none"
							>
								{item.label}
							</text> */}
								</g>
							);
						})}
					</svg>
				</div>
				<div
					className={`${styles.CenterBox} ${mode === "light" && styles.white}`}
				></div>
			</div>
		</>
	);
}
