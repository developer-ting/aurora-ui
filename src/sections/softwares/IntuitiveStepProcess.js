// MODULES //

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// UTILS //

// STYLES //
import styles from "@/styles/sections/softwares/IntuitiveStepProcess.module.scss";

// IMAGES //
import steps_img from "../../../public/img/softwares/steps_img.jpg";

// DATA //

/** IntuitiveStepProcess Section */
export default function IntuitiveStepProcess() {
	/** pagination */
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class="${className}">${index + 1}</span>`;
		},
	};
	return (
		<section className={`${styles.IntuitiveStepProcess} dark_bg ptb_100`}>
			<div className="container">
				<div className={`${styles.StepProcessTxt} `}>
					<h5 className="text_lg color_white f_w_s_b">
						EOS is a cloud-based software platform functions as an interactive
						database offering essential insights, forecasts, and reports on energy
						markets.
					</h5>
					<div className={`${styles.bookBtn} pt_50`}>
						<Button color="primary" variant="filled" shape="rounded" mode="dark">
							Book a Demo
						</Button>
					</div>
				</div>
				<div className={`${styles.stepsTxt} pt_80`}>
					<h2 className="text_xl font_primary f_w_s_b text_center color_white ">
						Intuitive 4 Step Process
					</h2>
				</div>
			</div>
			<div className={`${styles.stepsSlider} pt_40`}>
				<Swiper
					pagination={pagination}
					modules={[Pagination, Autoplay]}
					slidesPerView={1.1}
					spaceBetween={20}
					loop={true}
					grabCursor={true}
					speed={500}
					className={styles.slider}
				>
					<SwiperSlide className={`${styles.item}`}>
						<div className={`${styles.SliderItem} f_w_j a_center`}>
							<div className={`${styles.imgVideo}`}>
								<img
									src={steps_img.src}
									className={`${styles.steps_img}`}
									alt="steps img"
								/>
								{/* <video playsInline autoPlay muted loop>
									<source src="../../img/softwares/frame_video.mp4" type="video/mp4" />
								</video> */}
							</div>
							<div className={`${styles.Content}`}>
								<div className={`${styles.contentItem}`}>
									<h5 className="text_md color_white f_w_s_b">
										Up-to-date locational benefits & charges
									</h5>
								</div>
								<div className={`${styles.contentItem}`}>
									<h5 className="text_md color_white f_w_s_b">
										Up-to-date locational benefits & charges
									</h5>
								</div>
								<div className={`${styles.contentItem}`}>
									<h5 className="text_md color_white f_w_s_b">
										Up-to-date locational benefits & charges
									</h5>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className={`${styles.item}`}>
						<div className={`${styles.SliderItem} f_w_j a_center`}>
							<div className={`${styles.imgVideo}`}>
								{/* <img
									src={steps_img.src}
									className={`${styles.steps_img}`}
									alt="steps img"
								/> */}
								<video playsInline autoPlay muted loop>
									<source src="../../img/softwares/frame_video.mp4" type="video/mp4" />
								</video>
							</div>
							<div className={`${styles.Content}`}>
								<div className={`${styles.contentItem}`}>
									<h5 className="text_md color_white f_w_s_b">
										Up-to-date locational benefits & charges
									</h5>
								</div>
								<div className={`${styles.contentItem}`}>
									<h5 className="text_md color_white f_w_s_b">
										Up-to-date locational benefits & charges
									</h5>
								</div>
								<div className={`${styles.contentItem}`}>
									<h5 className="text_md color_white f_w_s_b">
										Up-to-date locational benefits & charges
									</h5>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}
