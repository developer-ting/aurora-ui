// MODULES //

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/softwares/Redefining.module.scss";

// IMAGES //
import redefining from "../../../public/img/softwares/redefining.png";

// DATA //

/** redefining Section */
export default function Redefining() {
	return (
		<section className={`${styles.redefining}`} id="expertise">
			<div className="container">
				<div className={`${styles.flexBox} f_r_aj_between`}>
					<div className={`${styles.flexItemOne}`}>
						<h2 className="text_xxl font_primary f_w_s_b color_secondary pb_20">
							Redefining <span className="color_sky_blue">battery evaluation</span>
						</h2>
						<p className="text_reg color_dark_gray">
							CHRONOS delivers precise battery valuations with advanced analytics
							allowing to optimise your investments, transactions, strategies, and
							valuate any storage asset or project using our cutting-edge proprietary
							battery dispatch engine.
						</p>
					</div>
					<div className={`${styles.flexItemTwo}`}>
						<img
							src={redefining.src}
							className={`${styles.redefining}`}
							alt="redefining"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
