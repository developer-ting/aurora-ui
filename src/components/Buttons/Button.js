// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Buttons/Button.module.scss";

// IMAGES //

// DATA //

/** Button Component */
export default function Button({
	children,
	shape,
	color,
	variant,
	mode,
	size = "text_sm",
}) {
	return (
		<button
			className={`${size} font_secondary
			 text_600
				${styles.btn_common_styles}
				${styles[`btn_${color}`]}
				${styles[`btn_${variant}`]}
				${styles[shape]}
				${styles[`mode_${mode}`]}
				`}
		>
			<div className={`${styles.textWrap}`}>
				<p className={`${styles.animatedText1} text_500`}>{children}</p>
				<p className={`${styles.animatedText2} text_500`}>{children}</p>
			</div>
		</button>
	);
}
