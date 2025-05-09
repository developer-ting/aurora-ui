// MODULES //

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //
import formatDate, { allCategories, isCategory } from "@/utils";

// STYLES //
import styles from "@/styles/sections/resources/webinar/WebinarInsideTopSection.module.scss";

// IMAGES //
import calender from "@/../public/img/icons/calender.svg";
import share from "@/../public/img/resources/aurora_insights/share.svg";
import location from "@/../public/img/icons/location.svg";

// DATA //

/** WebinarInsideTopSection Section */
export default function WebinarInsideTopSection({
	data,
	countries,
	isUpcoming,
}) {
	return (
		<section className={`${styles.WebinarInsideTopSection} `}>
			<div className="container">
				<div className={`${styles.card} f_w_j`}>
					<div className={`${styles.content}`}>
						<div
							className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
						>
							{isUpcoming ? "Upcoming: " : "Completed: "}
							{isCategory(allCategories, data?.categories?.nodes)}
						</div>
						<h2 className="text_lg color_secondary text_uppercase f_w_m pt_30">
							{data?.title}
						</h2>
						<div className={`${styles.dateFlex} f_r_a_center pt_20`}>
							<p className="text_xs f_w_m color_dark_gray text_uppercase f_r_a_center">
								<img
									src={calender.src}
									className={`${styles.calender}`}
									alt="calender"
								/>
								<span>
									{formatDate(data?.date)} {data?.time}
								</span>
							</p>
							<p className="text_xs f_w_m color_dark_gray text_uppercase f_r_a_center">
								<img
									src={location.src}
									className={`${styles.calender}`}
									alt="calender"
								/>
								<span>{isCategory(countries, data?.categories?.nodes)}</span>
							</p>
							<p className="text_xs f_w_m color_dark_gray text_uppercase f_r_a_center">
								<img src={share.src} className={`${styles.calender}`} alt="calender" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
