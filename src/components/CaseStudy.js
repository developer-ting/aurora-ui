// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //
import Button from "@/components/Buttons/Button";
import ContentFromCms from "./ContentFromCms";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/CaseStudy.module.scss";

// IMAGES //
import plant_img from "../../public/img/services/advisory/plant_img.jpg";
import clock from "../../public/img/icons/clock.svg";
import location from "../../public/img/icons/location.svg";
import calender from "../../public/img/icons/calender.svg";
import formatDate from "@/utils";

// DATA //

/** CaseStudy Section */
export default function CaseStudy({ data }) {
	const first = data?.selectCaseStudies?.nodes?.slice(0, 1);
	const restArr = data?.selectCaseStudies?.nodes?.slice(1, data.length);

	return (
		<section className={`${styles.CaseStudy}`}>
			<div className="container">
				<div className={`${styles.contentImgFlex} f_w_j`}>
					<div className={`${styles.contentBox}`}>
						<div className={`${styles.hoverBox}`}>
							<p
								className={`${styles.categoryTxt} text_xs color_dark_gray text_uppercase`}
							>
								{data?.title || "Case Study"}
							</p>
							<h3 className={`${styles.descTxt} text_xl color_secondary pt_10`}>
								{first?.[0]?.title ||
									"Analysing the financial roadmap to Net Zero by 2035. Analysing the financial roadmap to Net Zero by 2035"}
							</h3>
							<p className="text_reg color_dark_gray font_secondary pt_10">
								<ContentFromCms>{first?.[0]?.content || "lorem"}</ContentFromCms>
							</p>
							<div className={`${styles.dateFlex} f_j pt_30`}>
								<p className="text_xs f_w_m color_light_gray text_uppercase f_r_a_center">
									<img
										src={location.src}
										className={`${styles.location}`}
										alt="location"
									/>
									<span>{formatDate(first?.[0]?.date)}</span>
								</p>
								<p className="text_xs f_w_m color_light_gray text_uppercase f_r_a_center">
									<img src={clock.src} className={`${styles.clock}`} alt="location" />
									<span>{first?.[0]?.caseStudies?.readTime || "5 min"}</span>
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.ImgBox}`}>
						<img
							src={first?.[0]?.featuredImage?.node?.sourceUrl || plant_img.src}
							className={`${styles.plant_img} img width_100`}
							alt="plant_img"
						/>
					</div>
				</div>
				<div className={`${styles.CaseStudyFlex} d_f m_t_30`}>
					{restArr?.map((item, ind) => {
						return (
							<div className={`${styles.ItemBox} boxH`} key={ind}>
								<div className={`${styles.hoverBox}`}>
									<p
										className={`${styles.categoryTxt} text_xs color_dark_gray text_uppercase`}
									>
										Case Study
									</p>
									<p
										className={`${styles.descTxt} text_reg color_dark_gray font_primary pt_10`}
									>
										{item.title}
									</p>
									<div className={`${styles.dateFlex} f_j pt_30`}>
										<p className="text_xs f_w_m color_light_gray text_uppercase f_r_a_center">
											<img
												src={calender.src}
												className={`${styles.calender}`}
												alt="calender"
											/>
											{/* <span>Feb 26, 2025</span> */}
											<span>{formatDate(item.date)}</span>
										</p>
										<p className="text_xs f_w_m color_light_gray text_uppercase f_r_a_center">
											<img
												src={location.src}
												className={`${styles.location}`}
												alt="location"
											/>
											{/* <span>WECC</span> */}
											{item.caseStudies.selectLocation.nodes.map((item2, ind2) => {
												return <span key={item2.title}>{item2.title}</span>;
											})}
										</p>
									</div>
								</div>
							</div>
						);
					})}
					{!restArr && (
						<>
							<div className={`${styles.ItemBox} boxH`}>
								<div className={`${styles.hoverBox}`}>
									<p
										className={`${styles.categoryTxt} text_xs color_dark_gray text_uppercase`}
									>
										Case Study
									</p>
									<p
										className={`${styles.descTxt} text_reg color_dark_gray font_primary pt_10`}
									>
										Analysing the financial roadmap to Net Zero by 2035. Analysing the
										financial roadmap to Net Zero by 2035
									</p>
									<div className={`${styles.dateFlex} f_j pt_30`}>
										<p className="text_xs f_w_m color_light_gray text_uppercase f_r_a_center">
											<img
												src={calender.src}
												className={`${styles.calender}`}
												alt="calender"
											/>
											<span>Feb 26, 2025</span>
										</p>
										<p className="text_xs f_w_m color_light_gray text_uppercase f_r_a_center">
											<img
												src={location.src}
												className={`${styles.location}`}
												alt="location"
											/>
											<span>WECC</span>
										</p>
									</div>
								</div>
							</div>
							<div className={`${styles.ItemBox} boxH`}>
								<div className={`${styles.hoverBox}`}>
									<p
										className={`${styles.categoryTxt} text_xs color_dark_gray text_uppercase`}
									>
										Case Study
									</p>
									<p
										className={`${styles.descTxt} text_reg color_dark_gray font_primary pt_10`}
									>
										Analysing the financial roadmap to Net Zero by 2035. Analysing the
										financial roadmap to Net Zero by 2035
									</p>
									<div className={`${styles.dateFlex} f_j pt_30`}>
										<p className="text_xs f_w_m color_light_gray text_uppercase f_r_a_center">
											<img
												src={calender.src}
												className={`${styles.calender}`}
												alt="calender"
											/>
											<span>Feb 26, 2025</span>
										</p>
										<p className="text_xs f_w_m color_light_gray text_uppercase f_r_a_center">
											<img
												src={location.src}
												className={`${styles.location}`}
												alt="location"
											/>
											<span>WECC</span>
										</p>
									</div>
								</div>
							</div>
							<div className={`${styles.ItemBox} boxH`}>
								<div className={`${styles.hoverBox}`}>
									<p
										className={`${styles.categoryTxt} text_xs color_dark_gray text_uppercase`}
									>
										Case Study
									</p>
									<p
										className={`${styles.descTxt} text_reg color_dark_gray font_primary pt_10`}
									>
										Analysing the financial roadmap to Net Zero by 2035. Analysing the
										financial roadmap to Net Zero by 2035
									</p>
									<div className={`${styles.dateFlex} f_j pt_30`}>
										<p className="text_xs f_w_m color_light_gray text_uppercase f_r_a_center">
											<img
												src={calender.src}
												className={`${styles.calender}`}
												alt="calender"
											/>
											<span>Feb 26, 2025</span>
										</p>
										<p className="text_xs f_w_m color_light_gray text_uppercase f_r_a_center">
											<img
												src={location.src}
												className={`${styles.location}`}
												alt="location"
											/>
											<span>WECC</span>
										</p>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
}
