// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //
import Button from "@/components/Buttons/Button";
import Popup from "@/components/Popup";

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import parse from "html-react-parser";

// UTILS //

// STYLES //
import styles from "@/styles/sections/events/Speakers.module.scss";

// IMAGES //
import management_img from "../../../public/img/events/management_img.jpg";
import hoverEffect from "../../../public/img/events/hoverEffect.png";
import slider_arrow from "../../../public/img/icons/slider_arrow.svg";

// DATA //

/** Speakers Section */
export default function Speakers() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [slideNo, setSlideNo] = useState(0);

	const [openPop1, setOpenPop1] = useState(false);
	const sliderRef = useRef(null);
	/** handleSlideClick Function */
	const handleSlideClick1 = (e, index) => {
		e.preventDefault();
		setSlideNo(index);
		setIsPopupOpen(true);
		setOpenPop1(true);
	};

	/** handleClosePopup Function */
	const handleClosePopup = () => {
		setIsPopupOpen(false);
		setSlideNo(0);
	};
	useEffect(() => {
		if (sliderRef.current?.swiper) {
			sliderRef.current.swiper.slideTo(slideNo);
		}
	}, [slideNo]);

	const eventSpeakersData = [
		{
			title: "Anna Clunes",
			designation: "British Ambassador, Poland",
			desc:
				"Anna Clunes has served as His Majesty’s Ambassador to Poland since September 2020, bringing decades of diplomatic and leadership experience to the role.  Before her appointment, Anna held several senior positions in the UK government, including Acting Director General and Director at the Department for Exiting the European Union (2017–2020). Her expertise in economic diplomacy was honed as Director of Economic Diplomacy at the Foreign & Commonwealth Office (FCO) from 2015 to 2017.  Anna has also led strategic and protocol-focused departments, serving as Director of Protocol (2012–2014) and Head of Communications and Engagement (2010–2012) at the FCO, where she co-headed the Communications Directorate. <br /> Her experience extends to the Cabinet Office, where she was Deputy Director of the European and Global Issues Secretariat (2007–2009) and Private Secretary to the Prime Minister for Africa and Development at No. 10 Downing Street (2006–2007).  Her international assignments have included roles as Counsellor for External Relations at the UK Permanent Representation to the EU in Brussels (2003–2005), First Secretary for Counter-Terrorism at the UK Mission to the United Nations in New York (2000–2003), and Second Secretary for Development Assistance and Economic affairs at the Department for International Development in Warsaw (1996–2000).",
			thumbnail: management_img.src,
		},
		{
			title: "Anna Clunes",
			designation: "British Ambassador, Poland",
			desc:
				"Anna Clunes has served as His Majesty’s Ambassador to Poland since September 2020, bringing decades of diplomatic and leadership experience to the role.  Before her appointment, Anna held several senior positions in the UK government, including Acting Director General and Director at the Department for Exiting the European Union (2017–2020). Her expertise in economic diplomacy was honed as Director of Economic Diplomacy at the Foreign & Commonwealth Office (FCO) from 2015 to 2017.  Anna has also led strategic and protocol-focused departments, serving as Director of Protocol (2012–2014) and Head of Communications and Engagement (2010–2012) at the FCO, where she co-headed the Communications Directorate. <br /> Her experience extends to the Cabinet Office, where she was Deputy Director of the European and Global Issues Secretariat (2007–2009) and Private Secretary to the Prime Minister for Africa and Development at No. 10 Downing Street (2006–2007).  Her international assignments have included roles as Counsellor for External Relations at the UK Permanent Representation to the EU in Brussels (2003–2005), First Secretary for Counter-Terrorism at the UK Mission to the United Nations in New York (2000–2003), and Second Secretary for Development Assistance and Economic affairs at the Department for International Development in Warsaw (1996–2000).",
			thumbnail: management_img.src,
		},
		{
			title: "Anna Clunes",
			designation: "British Ambassador, Poland",
			desc:
				"Anna Clunes has served as His Majesty’s Ambassador to Poland since September 2020, bringing decades of diplomatic and leadership experience to the role.  Before her appointment, Anna held several senior positions in the UK government, including Acting Director General and Director at the Department for Exiting the European Union (2017–2020). Her expertise in economic diplomacy was honed as Director of Economic Diplomacy at the Foreign & Commonwealth Office (FCO) from 2015 to 2017.  Anna has also led strategic and protocol-focused departments, serving as Director of Protocol (2012–2014) and Head of Communications and Engagement (2010–2012) at the FCO, where she co-headed the Communications Directorate. <br /> Her experience extends to the Cabinet Office, where she was Deputy Director of the European and Global Issues Secretariat (2007–2009) and Private Secretary to the Prime Minister for Africa and Development at No. 10 Downing Street (2006–2007).  Her international assignments have included roles as Counsellor for External Relations at the UK Permanent Representation to the EU in Brussels (2003–2005), First Secretary for Counter-Terrorism at the UK Mission to the United Nations in New York (2000–2003), and Second Secretary for Development Assistance and Economic affairs at the Department for International Development in Warsaw (1996–2000).",
			thumbnail: management_img.src,
		},
		{
			title: "Anna Clunes",
			designation: "British Ambassador, Poland",
			desc:
				"Anna Clunes has served as His Majesty’s Ambassador to Poland since September 2020, bringing decades of diplomatic and leadership experience to the role.  Before her appointment, Anna held several senior positions in the UK government, including Acting Director General and Director at the Department for Exiting the European Union (2017–2020). Her expertise in economic diplomacy was honed as Director of Economic Diplomacy at the Foreign & Commonwealth Office (FCO) from 2015 to 2017.  Anna has also led strategic and protocol-focused departments, serving as Director of Protocol (2012–2014) and Head of Communications and Engagement (2010–2012) at the FCO, where she co-headed the Communications Directorate. <br /> Her experience extends to the Cabinet Office, where she was Deputy Director of the European and Global Issues Secretariat (2007–2009) and Private Secretary to the Prime Minister for Africa and Development at No. 10 Downing Street (2006–2007).  Her international assignments have included roles as Counsellor for External Relations at the UK Permanent Representation to the EU in Brussels (2003–2005), First Secretary for Counter-Terrorism at the UK Mission to the United Nations in New York (2000–2003), and Second Secretary for Development Assistance and Economic affairs at the Department for International Development in Warsaw (1996–2000).",
			thumbnail: management_img.src,
		},
		{
			title: "Anna Clunes",
			designation: "British Ambassador, Poland",
			desc:
				"Anna Clunes has served as His Majesty’s Ambassador to Poland since September 2020, bringing decades of diplomatic and leadership experience to the role.  Before her appointment, Anna held several senior positions in the UK government, including Acting Director General and Director at the Department for Exiting the European Union (2017–2020). Her expertise in economic diplomacy was honed as Director of Economic Diplomacy at the Foreign & Commonwealth Office (FCO) from 2015 to 2017.  Anna has also led strategic and protocol-focused departments, serving as Director of Protocol (2012–2014) and Head of Communications and Engagement (2010–2012) at the FCO, where she co-headed the Communications Directorate. <br /> Her experience extends to the Cabinet Office, where she was Deputy Director of the European and Global Issues Secretariat (2007–2009) and Private Secretary to the Prime Minister for Africa and Development at No. 10 Downing Street (2006–2007).  Her international assignments have included roles as Counsellor for External Relations at the UK Permanent Representation to the EU in Brussels (2003–2005), First Secretary for Counter-Terrorism at the UK Mission to the United Nations in New York (2000–2003), and Second Secretary for Development Assistance and Economic affairs at the Department for International Development in Warsaw (1996–2000).",
			thumbnail: management_img.src,
		},
		{
			title: "Anna Clunes",
			designation: "British Ambassador, Poland",
			desc:
				"Anna Clunes has served as His Majesty’s Ambassador to Poland since September 2020, bringing decades of diplomatic and leadership experience to the role.  Before her appointment, Anna held several senior positions in the UK government, including Acting Director General and Director at the Department for Exiting the European Union (2017–2020). Her expertise in economic diplomacy was honed as Director of Economic Diplomacy at the Foreign & Commonwealth Office (FCO) from 2015 to 2017.  Anna has also led strategic and protocol-focused departments, serving as Director of Protocol (2012–2014) and Head of Communications and Engagement (2010–2012) at the FCO, where she co-headed the Communications Directorate. <br /> Her experience extends to the Cabinet Office, where she was Deputy Director of the European and Global Issues Secretariat (2007–2009) and Private Secretary to the Prime Minister for Africa and Development at No. 10 Downing Street (2006–2007).  Her international assignments have included roles as Counsellor for External Relations at the UK Permanent Representation to the EU in Brussels (2003–2005), First Secretary for Counter-Terrorism at the UK Mission to the United Nations in New York (2000–2003), and Second Secretary for Development Assistance and Economic affairs at the Department for International Development in Warsaw (1996–2000).",
			thumbnail: management_img.src,
		},
		{
			title: "Anna Clunes",
			designation: "British Ambassador, Poland",
			desc:
				"Anna Clunes has served as His Majesty’s Ambassador to Poland since September 2020, bringing decades of diplomatic and leadership experience to the role.  Before her appointment, Anna held several senior positions in the UK government, including Acting Director General and Director at the Department for Exiting the European Union (2017–2020). Her expertise in economic diplomacy was honed as Director of Economic Diplomacy at the Foreign & Commonwealth Office (FCO) from 2015 to 2017.  Anna has also led strategic and protocol-focused departments, serving as Director of Protocol (2012–2014) and Head of Communications and Engagement (2010–2012) at the FCO, where she co-headed the Communications Directorate. <br /> Her experience extends to the Cabinet Office, where she was Deputy Director of the European and Global Issues Secretariat (2007–2009) and Private Secretary to the Prime Minister for Africa and Development at No. 10 Downing Street (2006–2007).  Her international assignments have included roles as Counsellor for External Relations at the UK Permanent Representation to the EU in Brussels (2003–2005), First Secretary for Counter-Terrorism at the UK Mission to the United Nations in New York (2000–2003), and Second Secretary for Development Assistance and Economic affairs at the Department for International Development in Warsaw (1996–2000).",
			thumbnail: management_img.src,
		},
		{
			title: "Anna Clunes",
			designation: "British Ambassador, Poland",
			desc:
				"Anna Clunes has served as His Majesty’s Ambassador to Poland since September 2020, bringing decades of diplomatic and leadership experience to the role.  Before her appointment, Anna held several senior positions in the UK government, including Acting Director General and Director at the Department for Exiting the European Union (2017–2020). Her expertise in economic diplomacy was honed as Director of Economic Diplomacy at the Foreign & Commonwealth Office (FCO) from 2015 to 2017.  Anna has also led strategic and protocol-focused departments, serving as Director of Protocol (2012–2014) and Head of Communications and Engagement (2010–2012) at the FCO, where she co-headed the Communications Directorate. <br /> Her experience extends to the Cabinet Office, where she was Deputy Director of the European and Global Issues Secretariat (2007–2009) and Private Secretary to the Prime Minister for Africa and Development at No. 10 Downing Street (2006–2007).  Her international assignments have included roles as Counsellor for External Relations at the UK Permanent Representation to the EU in Brussels (2003–2005), First Secretary for Counter-Terrorism at the UK Mission to the United Nations in New York (2000–2003), and Second Secretary for Development Assistance and Economic affairs at the Department for International Development in Warsaw (1996–2000).",
			thumbnail: management_img.src,
		},
	];
	return (
		<section className={`${styles.Speakers}`}>
			<div className="container">
				<div className={`${styles.titleWrapper}`}>
					<h2 className="text_xl font_primary f_w_m color_secondary text_uppercase pb_10">
						Past Speakers
					</h2>
					<p className={`${styles.label} text_reg color_dark_gray`}>
						Aurora’s events bring together industry leaders, policymakers, and experts
						for insightful discussions and data-driven analysis, shaping the future of
						energy.
					</p>
				</div>
				<div className={`${styles.content_main_wrap} pt_40`}>
					<div className={`${styles.box_wrap}`}>
						{eventSpeakersData.map((item, ind) => {
							return (
								<div
									className={`${styles.box_item}`}
									key={ind}
									onClick={(e) => handleSlideClick1(e, ind)}
									data-slide={ind}
								>
									<div className={`${styles.thumbnailImg}`}>
										<img src={item.thumbnail} className="b_r_20" alt="story img" />
									</div>
									<div className={`${styles.content} pt_20`}>
										<h5 className="text_reg f_w_m color_white font_secondary">
											{item.title}
										</h5>
										<p className="text_xs color_platinum_gray">{item.designation}</p>
									</div>
									<div className={`${styles.hoverEffect} pt_20`}>
										<img src={hoverEffect.src} className="" alt=" img" />
									</div>
								</div>
							);
						})}
					</div>
					{/*  */}
				</div>
			</div>

			{isPopupOpen && (
				<Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
					<div>
						{openPop1 && (
							<div data-lenis-prevent>
								<Swiper
									modules={[Navigation]}
									slidesPerView={1}
									spaceBetween={15}
									grabCursor={true}
									speed={500}
									loop={true}
									navigation={{
										prevEl: "#customPrev",
										nextEl: "#customNext",
									}}
									className={styles.slider}
									ref={sliderRef}
								>
									{eventSpeakersData.map((item, ind) => (
										<SwiperSlide className={`${styles.item}`} key={ind}>
											<div className={`${styles.PopupItem}`}>
												<div className={`${styles.BoxFlex} f_w`}>
													<div className={styles.Imgthumbnail}>
														<img src={item.thumbnail} className="b_r_20" alt="story img" />
													</div>
													<div className={`${styles.Details}`}>
														<div className={`${styles.boxName}`}>
															<h5
																className={`${styles.Name} text_reg f_w_m color_white font_secondary`}
															>
																{item.title}
															</h5>
															<p className="text_xs color_platinum_gray">{item.designation}</p>
														</div>
														<p className={`${styles.Desc} text_xs color_platinum_gray`}>
															{parse(item.desc)}
														</p>
													</div>
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
								<div className={`${styles.arrowSection} f_w_a_j_center`}>
									<button className={`${styles.customPrev}`} id="customPrev">
										<img src={slider_arrow.src} alt="icon" />
									</button>
									<button className={styles.customNext} id="customNext">
										<img src={slider_arrow.src} alt="icon" />
									</button>
								</div>
								{/* <div className={`${styles.frame}`}>
									<img src={frame.src} alt="frame" />
								</div> */}
							</div>
						)}
					</div>
				</Popup>
			)}
		</section>
	);
}
