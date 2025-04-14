// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// IMAGES //
import Arrow from "@/../public/img/icons/dropdown_arrow.svg";
import logo from "@/../public/img/logo.svg";
import search from "@/../public/img/icons/search.svg";
import login_icon from "@/../public/img/icons/login_icon.svg";
import location from "@/../public/img/icons/location.svg";
import calender from "@/../public/img/icons/calender.svg";
import dropdown_arrow from "@/../public/img/icons/dropdown_arrow.svg";
import menu_hover_arrow from "@/../public/img/icons/menu_hover_arrow.svg";
import header_img from "@/../public/img/header/header_img.jpg";
import event_img from "@/../public/img/header/event_img.jpg";
import event_logo from "@/../public/img/header/event_logo.png";

// DATA //

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/** Function to toggle dropdown */
	const toggleDropdown = (dropdownKey) => {
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey
		);
	};

	return (
		<header className={`${styles.main_headerBox}`}>
			<div className={`${styles.headerTopBg} f_r_aj_between`}>
				{/* mobile Global list Wrap */}
				<div className={`${styles.globalListMobile}`}>
					<p className="text_sm font_primary color_dark_gray f_w_m f_r_a_center">
						<span>Global Presence </span>
						<img src={dropdown_arrow.src} alt="arrow" />
					</p>
				</div>

				<div className={`${styles.searchRight}`}>
					<a
						href=""
						className={`${styles.searchFlex} text_sm f_w_m color_dark_gray font_primary f_r_a_center`}
					>
						<img src={search.src} alt="search" />
						<span>Search</span>
					</a>
				</div>
				<div className={`${styles.searchLeft}`}>
					<a
						href=""
						className={`${styles.eosFlex} text_xxs f_w_m font_primary color_secondary f_r_a_center`}
					>
						<img src={login_icon.src} alt="login" />
						<span>EOS Sign in</span>
					</a>
				</div>
			</div>
			<div
				className={`${styles.main_header} ${
					openSidebar ? styles.sidebar_opened : ""
				}`}
			>
				<div className={`${styles.menuListBox} f_r_aj_between`}>
					<div className={`${styles.header_inside}`}>
						{/* Logo wrap */}
						<Link href="/">
							<div className={styles.image_wrap}>
								<img src={logo.src} alt="logo" />
							</div>
						</Link>

						{/* Links Wrap */}
						<div className={`${styles.links_wrap}`}>
							{/* Add "has_dropdown" class if your link has dropdown */}
							<div
								className={`${styles.links} ${styles.has_dropdown} ${
									openDropdown === "company" ? styles.dropdown_opened : ""
								} dropdown`}
								onClick={() => toggleDropdown("company")}
								data-lenis-prevent
							>
								<div className={styles.link_title}>
									<p className="text_xs font_primary color_dark_gray">Company</p>
									<span className={styles.arrow_img}>
										<img src={dropdown_arrow.src} alt="arrow" />
									</span>
								</div>
								{/* Dropdown is opened when link is clicked */}
								<div className={`${styles.dropdown_wrap}`}>
									<div className={`${styles.megaMenuBox} f_w_j`}>
										<div className={`${styles.menuBoxRight}`}>
											<div className={`${styles.pageName}`}>
												<h4 className="text_xxs font_primary color_medium_gray">
													Who We Are
												</h4>
											</div>
											<div className={`${styles.pageLinks} pt_20`}>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>About Us</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Global Presence</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Press</span> <img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Contact Us</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
											</div>
											<div className={`${styles.weAreHiring} f_w_j`}>
												<div className={`${styles.imgBox}`}>
													<img src={header_img.src} className="width_100 b_r_10" alt="img" />
												</div>
												<div className={`${styles.contentBox}`}>
													<h4 className="text_reg font_primary color_secondary">
														EOS Platform
													</h4>
													<p className="text_xs color_light_gray">
														Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper nec
														sodales mperdiet volutpat dui ipsum massa.
													</p>
													<div className={`${styles.btn_box} pt_20`}>
														<Button color="primary" variant="filled" shape="rounded">
															Know More
														</Button>
													</div>
												</div>
											</div>
										</div>
										<div className={`${styles.menuBoxleft}`}>
											<div className={`${styles.ItemBox}`}>
												<a href="">
													<div className={`${styles.hoverBox}`}>
														<div className={`${styles.eventImgBox}`}>
															<img
																src={event_img.src}
																className={`${styles.eventImg}`}
																alt="img"
															/>
															<img
																src={event_logo.src}
																className={`${styles.eventLogo}`}
																alt="event logo"
															/>
														</div>
														<div className={`${styles.eventContentBox}`}>
															<div
																className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
															>
																Upcoming Event
															</div>
															<h4
																className={`${styles.descTxt} text_reg font_primary color_secondary `}
															>
																Aurora Energy Transition Summit Warsaw 2025 Aurora Energy
																Transition Summit Warsaw 2025
															</h4>
															<div className={`${styles.dateFlex} f_j pt_30`}>
																<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																	<img
																		src={calender.src}
																		className={`${styles.calender}`}
																		alt="calender"
																	/>
																	<span>Feb 26, 2025</span>
																</p>
																<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																	<img
																		src={location.src}
																		className={`${styles.location}`}
																		alt="location"
																	/>
																	<span>UK</span>
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								className={`${styles.links} ${styles.has_dropdown} ${
									openDropdown === "WhoAreYou" ? styles.dropdown_opened : ""
								} dropdown`}
								onClick={() => toggleDropdown("WhoAreYou")}
							>
								<div className={styles.link_title}>
									<p className="text_xs font_primary color_dark_gray">Who Are You</p>
									<span className={styles.arrow_img}>
										<img src={dropdown_arrow.src} alt="arrow" />
									</span>
								</div>
								{/* Dropdown is opened when link is clicked */}
								<div className={`${styles.dropdown_wrap}`}>
									<div className={`${styles.megaMenuBox} f_w_j`}>
										<div className={`${styles.menuBoxRight}`}>
											<div className={`${styles.pageName}`}>
												<h4 className="text_xxs font_primary color_medium_gray">
													Industries we serve
												</h4>
											</div>
											<div className={`${styles.pageLinks} pt_20`}>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Financial Sector</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Energy Consumer</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Utilities</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Developer</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
											</div>
											<div className={`${styles.weAreHiring} f_w_j`}>
												<div className={`${styles.imgBox}`}>
													<img src={header_img.src} className="width_100 b_r_10" alt="img" />
												</div>
												<div className={`${styles.contentBox}`}>
													<h4 className="text_reg font_primary color_secondary">
														Latest Webinar
													</h4>
													<p className="text_xs color_light_gray">
														Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper nec
														sodales mperdiet volutpat dui ipsum massa.
													</p>
													<div className={`${styles.btn_box} pt_20`}>
														<Button color="primary" variant="filled" shape="rounded">
															View All
														</Button>
													</div>
												</div>
											</div>
										</div>
										<div className={`${styles.menuBoxleft}`}>
											<div className={`${styles.ItemBox}`}>
												<a href="">
													<div className={`${styles.hoverBox}`}>
														<div className={`${styles.eventImgBox}`}>
															<img
																src={event_img.src}
																className={`${styles.eventImg}`}
																alt="img"
															/>
															<img
																src={event_logo.src}
																className={`${styles.eventLogo}`}
																alt="event logo"
															/>
														</div>
														<div className={`${styles.eventContentBox}`}>
															<div
																className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
															>
																Upcoming Event
															</div>
															<h4
																className={`${styles.descTxt} text_reg font_primary color_secondary `}
															>
																Aurora Energy Transition Summit Warsaw 2025 Aurora Energy
																Transition Summit Warsaw 2025
															</h4>
															<div className={`${styles.dateFlex} f_j pt_30`}>
																<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																	<img
																		src={calender.src}
																		className={`${styles.calender}`}
																		alt="calender"
																	/>
																	<span>Feb 26, 2025</span>
																</p>
																<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																	<img
																		src={location.src}
																		className={`${styles.location}`}
																		alt="location"
																	/>
																	<span>UK</span>
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								className={`${styles.links} ${styles.has_dropdown} ${
									openDropdown === "HowWeHelp" ? styles.dropdown_opened : ""
								} dropdown`}
								onClick={() => toggleDropdown("HowWeHelp")}
							>
								<div className={styles.link_title}>
									<p className="text_xs font_primary color_dark_gray">How We Help</p>
									<span className={styles.arrow_img}>
										<img src={dropdown_arrow.src} alt="arrow" />
									</span>
								</div>
								{/* Dropdown is opened when link is clicked */}
								<div className={`${styles.dropdown_wrap}`}>
									<div className={`${styles.megaMenuBox} f_w_j`}>
										<div className={`${styles.menuBoxRight}`}>
											<div className={`${styles.pageName}`}>
												<h4 className="text_xxs font_primary color_medium_gray">
													Services
												</h4>
											</div>
											<div className={`${styles.pageLinks} pt_20`}>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Transaction Support</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Portfolio Valuation</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Asset Citing & Optimisation</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Strategy Us</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>PPAs</span> <img src={menu_hover_arrow.src} alt="arrow" />
												</a>
											</div>
											<div className={`${styles.weAreHiring} f_w_j`}>
												<div className={`${styles.imgBox}`}>
													<img src={header_img.src} className="width_100 b_r_10" alt="img" />
												</div>
												<div className={`${styles.contentBox}`}>
													<h4 className="text_reg font_primary color_secondary">
														We are hiring!
													</h4>
													<p className="text_xs color_light_gray">
														Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper nec
														sodales mperdiet volutpat dui ipsum massa.
													</p>
													<div className={`${styles.btn_box} pt_20`}>
														<Button color="primary" variant="filled" shape="rounded">
															View All
														</Button>
													</div>
												</div>
											</div>
										</div>
										<div className={`${styles.menuBoxleft}`}>
											<div className={`${styles.ItemBox}`}>
												<a href="">
													<div className={`${styles.hoverBox}`}>
														<div className={`${styles.eventImgBox}`}>
															<img
																src={event_img.src}
																className={`${styles.eventImg}`}
																alt="img"
															/>
															<img
																src={event_logo.src}
																className={`${styles.eventLogo}`}
																alt="event logo"
															/>
														</div>
														<div className={`${styles.eventContentBox}`}>
															<div
																className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
															>
																Upcoming Event
															</div>
															<h4
																className={`${styles.descTxt} text_reg font_primary color_secondary `}
															>
																Aurora Energy Transition Summit Warsaw 2025 Aurora Energy
																Transition Summit Warsaw 2025
															</h4>
															<div className={`${styles.dateFlex} f_j pt_30`}>
																<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																	<img
																		src={calender.src}
																		className={`${styles.calender}`}
																		alt="calender"
																	/>
																	<span>Feb 26, 2025</span>
																</p>
																<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																	<img
																		src={location.src}
																		className={`${styles.location}`}
																		alt="location"
																	/>
																	<span>UK</span>
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								className={`${styles.links} ${styles.has_dropdown} ${
									openDropdown === "ProductServices" ? styles.dropdown_opened : ""
								} dropdown`}
								onClick={() => toggleDropdown("ProductServices")}
							>
								<div className={styles.link_title}>
									<p className="text_xs font_primary color_dark_gray">
										Product & Services
									</p>
									<span className={styles.arrow_img}>
										<img src={dropdown_arrow.src} alt="arrow" />
									</span>
								</div>
								{/* Dropdown is opened when link is clicked */}
								<div className={`${styles.dropdown_wrap}`}>
									<div className={`${styles.megaMenuBox} f_w_j`}>
										<div className={`${styles.menuBoxRight}`}>
											<div className={`${styles.pageName}`}>
												<h4 className="text_xxs font_primary color_medium_gray">
													Who We Are
												</h4>
											</div>
											<div className={`${styles.pageLinks} pt_20`}>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>About Us</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Global Presence</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Press</span> <img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Contact Us</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
											</div>
											<div className={`${styles.weAreHiring} f_w_j`}>
												<div className={`${styles.imgBox}`}>
													<img src={header_img.src} className="width_100 b_r_10" alt="img" />
												</div>
												<div className={`${styles.contentBox}`}>
													<h4 className="text_reg font_primary color_secondary">
														We are hiring!
													</h4>
													<p className="text_xs color_light_gray">
														Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper nec
														sodales mperdiet volutpat dui ipsum massa.
													</p>
													<div className={`${styles.btn_box} pt_20`}>
														<Button color="primary" variant="filled" shape="rounded">
															See Open Positions
														</Button>
													</div>
												</div>
											</div>
										</div>
										<div className={`${styles.menuBoxleft}`}>
											<div className={`${styles.ItemBox}`}>
												<a href="">
													<div className={`${styles.hoverBox}`}>
														<div className={`${styles.eventImgBox}`}>
															<img
																src={event_img.src}
																className={`${styles.eventImg}`}
																alt="img"
															/>
															<img
																src={event_logo.src}
																className={`${styles.eventLogo}`}
																alt="event logo"
															/>
														</div>
														<div className={`${styles.eventContentBox}`}>
															<div
																className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
															>
																Upcoming Event
															</div>
															<h4
																className={`${styles.descTxt} text_reg font_primary color_secondary `}
															>
																Aurora Energy Transition Summit Warsaw 2025 Aurora Energy
																Transition Summit Warsaw 2025
															</h4>
															<div className={`${styles.dateFlex} f_j pt_30`}>
																<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																	<img
																		src={calender.src}
																		className={`${styles.calender}`}
																		alt="calender"
																	/>
																	<span>Feb 26, 2025</span>
																</p>
																<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																	<img
																		src={location.src}
																		className={`${styles.location}`}
																		alt="location"
																	/>
																	<span>UK</span>
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								className={`${styles.links} ${styles.has_dropdown} ${
									openDropdown === "Resources" ? styles.dropdown_opened : ""
								} dropdown`}
								onClick={() => toggleDropdown("Resources")}
							>
								<div className={styles.link_title}>
									<p className="text_xs font_primary color_dark_gray">Resources</p>
									<span className={styles.arrow_img}>
										<img src={dropdown_arrow.src} alt="arrow" />
									</span>
								</div>
								{/* Dropdown is opened when link is clicked */}
								<div className={`${styles.dropdown_wrap}`}>
									<div className={`${styles.megaMenuBox} f_w_j`}>
										<div className={`${styles.menuBoxRight}`}>
											<div className={`${styles.pageName}`}>
												<h4 className="text_xxs font_primary color_medium_gray">
													Who We Are
												</h4>
											</div>
											<div className={`${styles.pageLinks} pt_20`}>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>About Us</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Global Presence</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Press</span> <img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Contact Us</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
											</div>
											<div className={`${styles.weAreHiring} f_w_j`}>
												<div className={`${styles.imgBox}`}>
													<img src={header_img.src} className="width_100 b_r_10" alt="img" />
												</div>
												<div className={`${styles.contentBox}`}>
													<h4 className="text_reg font_primary color_secondary">
														We are hiring!
													</h4>
													<p className="text_xs color_light_gray">
														Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper nec
														sodales mperdiet volutpat dui ipsum massa.
													</p>
													<div className={`${styles.btn_box} pt_20`}>
														<Button color="primary" variant="filled" shape="rounded">
															See Open Positions
														</Button>
													</div>
												</div>
											</div>
										</div>
										<div className={`${styles.menuBoxleft}`}>
											<div className={`${styles.ItemBox}`}>
												<a href="">
													<div className={`${styles.hoverBox}`}>
														<div className={`${styles.eventImgBox}`}>
															<img
																src={event_img.src}
																className={`${styles.eventImg}`}
																alt="img"
															/>
															<img
																src={event_logo.src}
																className={`${styles.eventLogo}`}
																alt="event logo"
															/>
														</div>
														<div className={`${styles.eventContentBox}`}>
															<div
																className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
															>
																Upcoming Event
															</div>
															<h4
																className={`${styles.descTxt} text_reg font_primary color_secondary `}
															>
																Aurora Energy Transition Summit Warsaw 2025 Aurora Energy
																Transition Summit Warsaw 2025
															</h4>
															<div className={`${styles.dateFlex} f_j pt_30`}>
																<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																	<img
																		src={calender.src}
																		className={`${styles.calender}`}
																		alt="calender"
																	/>
																	<span>Feb 26, 2025</span>
																</p>
																<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																	<img
																		src={location.src}
																		className={`${styles.location}`}
																		alt="location"
																	/>
																	<span>UK</span>
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className={styles.links}>
								<Link href="">
									<div
										className={`${styles.link_title} text_xs font_primary color_dark_gray`}
									>
										Events
									</div>
								</Link>
							</div>

							<div
								className={`${styles.links} ${styles.has_dropdown} ${
									openDropdown === "Careers" ? styles.dropdown_opened : ""
								} dropdown`}
								onClick={() => toggleDropdown("Careers")}
							>
								<div className={styles.link_title}>
									<p className="text_xs font_primary color_dark_gray">Careers</p>
									<span className={styles.arrow_img}>
										<img src={dropdown_arrow.src} alt="arrow" />
									</span>
								</div>
								{/* Dropdown is opened when link is clicked */}
								<div className={`${styles.dropdown_wrap}`}>
									<div className={`${styles.megaMenuBox} f_w_j`}>
										<div className={`${styles.menuBoxRight}`}>
											<div className={`${styles.pageName}`}>
												<h4 className="text_xxs font_primary color_medium_gray">
													Who We Are
												</h4>
											</div>
											<div className={`${styles.pageLinks} pt_20`}>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>About Us</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Global Presence</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Press</span> <img src={menu_hover_arrow.src} alt="arrow" />
												</a>
												<a
													href=""
													className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
												>
													<span>Contact Us</span>{" "}
													<img src={menu_hover_arrow.src} alt="arrow" />
												</a>
											</div>
											<div className={`${styles.weAreHiring} f_w_j`}>
												<div className={`${styles.imgBox}`}>
													<img src={header_img.src} className="width_100 b_r_10" alt="img" />
												</div>
												<div className={`${styles.contentBox}`}>
													<h4 className="text_reg font_primary color_secondary">
														We are hiring!
													</h4>
													<p className="text_xs color_light_gray">
														Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper nec
														sodales mperdiet volutpat dui ipsum massa.
													</p>
													<div className={`${styles.btn_box} pt_20`}>
														<Button color="primary" variant="filled" shape="rounded">
															See Open Positions
														</Button>
													</div>
												</div>
											</div>
										</div>
										<div className={`${styles.menuBoxleft}`}>
											<div className={`${styles.ItemBox}`}>
												<a href="">
													<div className={`${styles.hoverBox}`}>
														<div className={`${styles.eventImgBox}`}>
															<img
																src={event_img.src}
																className={`${styles.eventImg}`}
																alt="img"
															/>
															<img
																src={event_logo.src}
																className={`${styles.eventLogo}`}
																alt="event logo"
															/>
														</div>
														<div className={`${styles.eventContentBox}`}>
															<div
																className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
															>
																Upcoming Event
															</div>
															<h4
																className={`${styles.descTxt} text_reg font_primary color_secondary `}
															>
																Aurora Energy Transition Summit Warsaw 2025 Aurora Energy
																Transition Summit Warsaw 2025
															</h4>
															<div className={`${styles.dateFlex} f_j pt_30`}>
																<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																	<img
																		src={calender.src}
																		className={`${styles.calender}`}
																		alt="calender"
																	/>
																	<span>Feb 26, 2025</span>
																</p>
																<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																	<img
																		src={location.src}
																		className={`${styles.location}`}
																		alt="location"
																	/>
																	<span>UK</span>
																</p>
															</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Hamburger icon visible in mobile only */}
						<div className={styles.hamburger_icon} onClick={toggleSidebar}>
							<span className={styles.hamburger_line}></span>
							<span className={styles.hamburger_line}></span>
							<span className={styles.hamburger_line}></span>
						</div>
					</div>
					<div className={`${styles.globalList}`}>
						<p className="text_sm font_primary color_dark_gray f_w_m f_r_a_center">
							<span>Global Presence </span>
							<img src={dropdown_arrow.src} alt="arrow" />
						</p>
					</div>
				</div>
			</div>
		</header>
	);
}
