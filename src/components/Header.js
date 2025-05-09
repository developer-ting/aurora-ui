/* eslint-disable @next/next/no-html-link-for-pages */
// MODULES //
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
import GlobalSearch from "@/components/GlobalSearch";

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

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
import header_img from "@/../public/img/header/eos.png";
import event_img from "@/../public/img/header/event_img.jpg";
import event_logo from "@/../public/img/header/event_logo.png";
import mac_img from "@/../public/img/header/mac_img.png";
import amun_logo from "@/../public/img/header/amun_logo.svg";
import popup_close from "@/../public/img/icons/popup_close.svg";
import Close from "@/../public/img/icons/close.svg";

// SERVICES //
import { fetchNavigationData } from "@/services/Navigation.service";
import formatDate from "@/utils";

// DATA //
const defaultNavigation = {
	products: [
		{
			title: "Grid Add-On",
			slug: "grid-add-on",
			logo: {
				logo:
					"https://cms-production.auroraer.com/wp-content/uploads/2025/04/Grid-Add-On.svg",
				altText: "",
			},
		},
		{
			title: "Hydrogen Service",
			slug: "hydrogen-service",
			logo: {
				logo:
					"https://cms-production.auroraer.com/wp-content/uploads/2025/04/Hydrogen-Service.svg",
				altText: "",
			},
		},
		{
			title: "Flexible Energy Service",
			slug: "flexible-energy-service",
			logo: {
				logo:
					"https://cms-production.auroraer.com/wp-content/uploads/2025/04/Flexible-Energy-Service.svg",
				altText: "",
			},
		},
		{
			title: "Power & Renewables Service",
			slug: "power-renewables-service",
			logo: {
				logo:
					"https://cms-production.auroraer.com/wp-content/uploads/2025/04/Power-Renewables-Service-1.svg",
				altText: "",
			},
		},
	],
	softwares: [
		{
			title: "Lumus",
			slug: "lumus",
			logo: {
				logo:
					"https://cms-production.auroraer.com/wp-content/uploads/2025/04/Lumus.svg",
				altText: "",
			},
		},
		{
			title: "Origin",
			slug: "origin",
			logo: {
				logo:
					"https://cms-production.auroraer.com/wp-content/uploads/2025/04/Origin-1.svg",
				altText: "",
			},
		},
		{
			title: "Amun",
			slug: "amun",
			logo: {
				logo:
					"https://cms-production.auroraer.com/wp-content/uploads/2025/04/Amun-1.svg",
				altText: "",
			},
		},
		{
			title: "Chronos",
			slug: "chronos",
			logo: {
				logo:
					"https://cms-production.auroraer.com/wp-content/uploads/2025/04/Chronos.svg",
				altText: "",
			},
		},
	],
	services: [
		{
			title: "Advisory",
			slug: "advisory",
			content: "<p>Aurora empowers smarter energy decisions.</p>\n",
			logo: {
				logo:
					"https://cms-production.auroraer.com/wp-content/uploads/2025/03/Advisory.svg",
				altText: "",
			},
		},
	],
	regions: [
		{
			name: "Europe",
			slug: "europe",
			regionsFields: {
				sequence: 1,
			},
			countries: {
				nodes: [
					{
						slug: "netherlands",
						title: "Netherland",
					},
					{
						slug: "switzerland",
						title: "Switzerland",
					},
					{
						slug: "slovakia",
						title: "Slovakia",
					},
					{
						slug: "serbia",
						title: "Serbia",
					},
					{
						slug: "romania",
						title: "Romania",
					},
					{
						slug: "nordics",
						title: "Nordics",
					},
					{
						slug: "poland",
						title: "Poland",
					},
					{
						slug: "italy",
						title: "Italy",
					},
					{
						slug: "iberia",
						title: "Iberia",
					},
					{
						slug: "slovenia",
						title: "Slovenia",
					},
					{
						slug: "hungary",
						title: "Hungary",
					},
					{
						slug: "greece",
						title: "Greece",
					},
					{
						slug: "germany",
						title: "Germany",
					},
					{
						slug: "france",
						title: "France",
					},
					{
						slug: "czechia",
						title: "Czechia",
					},
					{
						slug: "croatia",
						title: "Croatia",
					},
					{
						slug: "bulgaria",
						title: "Bulgaria",
					},
					{
						slug: "ireland",
						title: "Ireland",
					},
					{
						slug: "great-britain",
						title: "Great Britain",
					},
					{
						slug: "baltics",
						title: "Baltics",
					},
					{
						slug: "austria",
						title: "Austria",
					},
					{
						slug: "belgium",
						title: "Belgium",
					},
				],
			},
		},
		{
			name: "Asia",
			slug: "asia",
			regionsFields: {
				sequence: 2,
			},
			countries: {
				nodes: [
					{
						slug: "singapore",
						title: "Singapore",
					},
					{
						slug: "philippines",
						title: "Philippines",
					},
					{
						slug: "malaysia",
						title: "Malaysia",
					},
					{
						slug: "korea",
						title: "Korea",
					},
					{
						slug: "india",
						title: "India",
					},
					{
						slug: "japan",
						title: "Japan",
					},
				],
			},
		},
		{
			name: "Australia",
			slug: "australia",
			regionsFields: {
				sequence: 3,
			},
			countries: {
				nodes: [
					{
						slug: "australia",
						title: "Australia",
					},
				],
			},
		},
		{
			name: "North America",
			slug: "north-america",
			regionsFields: {
				sequence: 4,
			},
			countries: {
				nodes: [
					{
						slug: "noram",
						title: "Noram",
					},
				],
			},
		},
		{
			name: "South America",
			slug: "south-america",
			regionsFields: {
				sequence: 5,
			},
			countries: {
				nodes: [
					{
						slug: "chile",
						title: "Chile",
					},
					{
						slug: "brazil",
						title: "Brazil",
					},
				],
			},
		},
	],
	whoareyous: [
		{
			title: "Developer",
			slug: "developer",
		},
		{
			title: "Utilities",
			slug: "utilities",
		},
		{
			title: "Energy Consumer",
			slug: "energy-consumer",
		},
		{
			title: "Financial Sector",
			slug: "financial-sector",
		},
	],
	howWeHelps: [
		{
			title: "PPAs",
			slug: "ppas",
		},
		{
			title: "Strategy Us",
			slug: "strategy-us",
		},
		{
			title: "Asset Citing & Optimisation",
			slug: "asset-citing-optimisation",
		},
		{
			title: "Portfolio Valuation",
			slug: "portfolio-valuation",
		},
		{
			title: "Transaction Support",
			slug: "transactions-support",
		},
	],
	events: [
		{
			title: "Aurora Energy Transition Summit Warsaw 2025-2",
			slug: "aurora-energy-transition-summit-warsaw-2025-2",
			featuredImage: {
				node: {
					altText: "",
					sourceUrl:
						"https://cms-production.auroraer.com/wp-content/uploads/2025/04/event_inside_banner.5c571806.jpg",
				},
			},
			events: {
				thumbnail: {
					date: "2025-04-30T00:00:00+00:00",
					status: "Upcoming",
					time: "Doors open at 12:30 CET",
					logo: {
						node: {
							altText: "",
							sourceUrl:
								"https://cms-production.auroraer.com/wp-content/uploads/2025/04/energy_transition.cbbdc6fc.png",
						},
					},
				},
				banner: {
					desktop: {
						node: {
							altText: "",
							sourceUrl:
								"https://cms-production.auroraer.com/wp-content/uploads/2023/07/Wind-original-1449359885-scaled-1-1024x689.jpg",
						},
					},
				},
			},
		},
	],
	webinar: [
		{
			title:
				"Powering Through Change: The Highs and Lows of ERCOT’s Battery Market",
			slug: "powering-through-change-the-highs-and-lows-of-ercots-battery-market",
			date: "2025-03-18T21:52:56",
			featuredImage: {
				node: {
					altText: "",
					sourceUrl:
						"https://cms-production.auroraer.com/wp-content/uploads/2025/03/Screenshot-2025-03-18-164856.png",
				},
			},
			categories: {
				nodes: [
					{
						slug: "ercot",
						name: "ERCOT",
					},
					{
						slug: "north-america",
						name: "North America",
					},
					{
						slug: "public-webinar",
						name: "Public",
					},
					{
						slug: "webinar",
						name: "Webinar",
					},
				],
			},
			language: {
				id: "1",
				code: "en",
				language_code: "en",
				native_name: "English",
			},
			tags: {
				nodes: [],
			},
			postFields: {
				speakers: {
					nodes: [
						{
							id: "cG9zdDozOTAwNw==",
							title: "John Feddersen",
							slug: "john-feddersen",
							postSpeakers: {
								sessions: [
									{
										address: "InterContinental Warsaw, Conference Room1",
										time: "1:30 PM1",
										timeSlot: "1:30 PM - 1:40 PM CET1",
										title: "Welcome and Opening Remarks1",
									},
								],
								thumbnail: {
									designation: "Founder and CEO",
									linkedinLink: "/",
									image: {
										node: {
											altText: "",
											sourceUrl:
												"https://cms-production.auroraer.com/wp-content/uploads/2025/04/profile.png",
										},
									},
								},
							},
							content: null,
						},
					],
				},
			},
		},
	],
	ok: true,
};

/** Header Component */
export default function Header() {
	const [data, setData] = useState(defaultNavigation);
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const [isPopupActive, setIsPopupActive] = useState(false);
	const footerHeight = useRef(null);
	const [toggleState, settoggleState] = useState(null);
	const [showSearch, setShowSearch] = useState(false);
	const router = useRouter();

	/** toggle */
	const toggleTab = (index) => {
		if (toggleState == index) {
			return settoggleState(null);
		}
		settoggleState(index);
	};

	/** Open togglePopup on click of hamburger */
	const togglePopup = () => {
		setIsPopupActive((prev) => !prev);
	};

	/** Open closePopup on click of hamburger */
	const closePopup = () => {
		setIsPopupActive(false);
	};

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

	/** highlightSearchTerm */
	const highlightSearchTerm = (term) => {
		if (!term) return;

		const elements = document.querySelectorAll("body *");

		elements.forEach((el) => {
			if (el.closest("header") || el.children.length > 0 || !el.innerText) return;

			const regex = new RegExp(`(${term})`, "gi");

			el.childNodes.forEach((node) => {
				if (node.nodeType === Node.TEXT_NODE && regex.test(node.nodeValue)) {
					const span = document.createElement("span");
					span.className = "highlight";
					span.textContent = node.nodeValue.match(regex)[0]; // Keep original match

					const parts = node.nodeValue.split(regex);
					const frag = document.createDocumentFragment();

					parts.forEach((part, index) => {
						if (index % 2 === 1) {
							const highlightSpan = span.cloneNode(true);
							highlightSpan.textContent = part;
							frag.appendChild(highlightSpan);
						} else {
							frag.appendChild(document.createTextNode(part));
						}
					});

					node.replaceWith(frag);
				}
			});
		});
	};

	/** handleSearchClick */
	const handleSearchClick = () => {
		setShowSearch(true);
	};

	/** handleCloseClick */
	const handleCloseClick = () => {
		setShowSearch(false);
	};

	/** fetchData  */
	async function fetchData() {
		const localData = window.localStorage.getItem("navigation");
		if (localData) {
			setData(JSON.parse(localData));
		}
		const obj = await fetch("/api/navigation");
		const json = await obj.json();
		window.localStorage.setItem("navigation", JSON.stringify(json));
		setData(json);
	}

	useEffect(() => {
		const { search } = router.query;
		if (search) {
			const decodedSearchTerm = decodeURIComponent(search);
			highlightSearchTerm(decodedSearchTerm);
		}
	}, [router.query]);

	useEffect(() => {
		fetchData();
	}, []);

	// if (!data) return <div className="stalePage"></div>;

	return (
		<>
			<header className={`${styles.main_headerBox} main_headerBox`}>
				<div className={`${styles.headerTopBg} f_r_aj_between`}>
					{/* mobile Global list Wrap */}
					<div className={`${styles.globalListMobile}`} onClick={togglePopup}>
						<p className="text_sm font_primary color_dark_gray f_w_m f_r_a_center">
							<span>Global Presence </span>
							<img src={dropdown_arrow.src} alt="arrow" />
						</p>
					</div>

					<div className={`${styles.searchRight}`}>
						<button
							onClick={handleSearchClick}
							className={`${styles.searchFlex} text_sm f_w_m color_dark_gray font_primary f_r_a_center`}
						>
							<img src={search.src} alt="search" />
							<span>Search</span>
						</button>
					</div>
					<div className={`${styles.searchLeft}`}>
						<a
							href="https://eos.auroraer.com/dragonfly/login/"
							target="_blank"
							rel="noreferrer"
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
														href="/company/about"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>About Us</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>

													<a
														href="/global-presence"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Global Presence</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/company/press-releases"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Press</span> <img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/company/team"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Team</span> <img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/company/contact"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Contact Us</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
												</div>
												<div className={`${styles.weAreHiring} f_w_j`}>
													<div className={`${styles.imgBox}`}>
														<img
															src={header_img.src}
															className="width_100 b_r_10"
															alt="img"
														/>
													</div>
													<div className={`${styles.contentBox}`}>
														<h4 className="text_reg font_primary color_secondary">
															EOS Platform
														</h4>
														<p className="text_xs color_light_gray">
															EOS centralises Aurora&apos;s comprehensive data, sophisticated
															software, and precise forecasts, enabling energy professionals to
															make data-driven decisions.
														</p>
														<div className={`${styles.btn_box} pt_20`}>
															<a href="/eos">
																<Button color="primary" variant="filled" shape="rounded">
																	Know More
																</Button>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className={`${styles.menuBoxleft}`}>
												{data?.events?.map((item, ind) => {
													return (
														<div className={`${styles.ItemBox}`} key={item?.title}>
															<a href={`/events/${item?.slug}`}>
																<div className={`${styles.hoverBox}`}>
																	<div className={`${styles.eventImgBox}`}>
																		<img
																			src={
																				item?.events?.banner?.node?.sourceUrl ||
																				item?.events?.thumbnail?.logo?.node?.sourceUrl
																			}
																			className={`${styles.eventImg}`}
																			alt="img"
																		/>
																		{item?.events?.banner?.node?.sourceUrl && (
																			<img
																				src={
																					item?.events?.thumbnail?.logo?.node?.sourceUrl ||
																					item?.events?.banner?.node?.sourceUrl
																				}
																				className={`${styles.eventLogo}`}
																				alt="event logo"
																			/>
																		)}
																	</div>
																	<div className={`${styles.eventContentBox}`}>
																		<div
																			className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
																		>
																			{item?.events?.thumbnail?.status} Event
																		</div>
																		<h4
																			className={`${styles.descTxt} text_reg font_primary color_secondary `}
																		>
																			{item?.title}
																		</h4>
																		<div className={`${styles.dateFlex} f_j pt_30`}>
																			<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																				<img
																					src={calender.src}
																					className={`${styles.calender}`}
																					alt="calender"
																				/>
																				<span>{formatDate(item?.events?.thumbnail?.date)}</span>
																			</p>
																			{item?.events?.thumbnail?.country?.nodes && (
																				<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																					<img
																						src={location.src}
																						className={`${styles.location}`}
																						alt="location"
																					/>
																					<span>
																						{item?.events?.thumbnail?.country?.nodes?.map(
																							(item2) => item2.title
																						)}
																					</span>
																				</p>
																			)}
																		</div>
																	</div>
																</div>
															</a>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>

								<div
									className={`${styles.links} ${styles.has_dropdown} ${
										openDropdown === "WhoAreYou" ? styles.dropdown_opened : ""
									} dropdown`}
									onClick={() => toggleDropdown("WhoAreYou")}
									data-lenis-prevent
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
													{data?.whoareyous?.map((item, ind) => {
														return (
															<a
																key={ind}
																href={`/who-are-you/${item?.slug}`}
																className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
															>
																<span>{item?.title}</span>{" "}
																<img src={menu_hover_arrow.src} alt="arrow" />
															</a>
														);
													})}
												</div>
												{data?.webinar?.map((item) => {
													return (
														<div className={`${styles.weAreHiring} f_w_j`} key={item?.title}>
															<div className={`${styles.imgBox}`}>
																<img
																	src={item?.featuredImage?.node?.sourceUrl || header_img.src}
																	className="width_100 b_r_10"
																	alt="img"
																/>
															</div>
															<div className={`${styles.contentBox}`}>
																<h4 className="text_reg font_primary color_secondary">
																	Latest Webinar
																</h4>
																<p className="text_xs color_light_gray">{item?.title}</p>
																<div className={`${styles.btn_box} pt_20`}>
																	<a href={`/resources/webinar/${item?.slug}`}>
																		<Button color="primary" variant="filled" shape="rounded">
																			View All
																		</Button>
																	</a>
																</div>
															</div>
														</div>
													);
												})}
											</div>
											<div className={`${styles.menuBoxleft}`}>
												{data?.events?.map((item, ind) => {
													return (
														<div className={`${styles.ItemBox}`} key={item?.title}>
															<a href={`/events/${item?.slug}`}>
																<div className={`${styles.hoverBox}`}>
																	<div className={`${styles.eventImgBox}`}>
																		<img
																			src={
																				item?.events?.banner?.node?.sourceUrl ||
																				item?.events?.thumbnail?.logo?.node?.sourceUrl
																			}
																			className={`${styles.eventImg}`}
																			alt="img"
																		/>
																		{item?.events?.banner?.node?.sourceUrl && (
																			<img
																				src={
																					item?.events?.thumbnail?.logo?.node?.sourceUrl ||
																					item?.events?.banner?.node?.sourceUrl
																				}
																				className={`${styles.eventLogo}`}
																				alt="event logo"
																			/>
																		)}
																	</div>
																	<div className={`${styles.eventContentBox}`}>
																		<div
																			className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
																		>
																			{item?.events?.thumbnail?.status} Event
																		</div>
																		<h4
																			className={`${styles.descTxt} text_reg font_primary color_secondary `}
																		>
																			{item?.title}
																		</h4>
																		<div className={`${styles.dateFlex} f_j pt_30`}>
																			<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																				<img
																					src={calender.src}
																					className={`${styles.calender}`}
																					alt="calender"
																				/>
																				<span>{formatDate(item?.events?.thumbnail?.date)}</span>
																			</p>
																			{item?.events?.thumbnail?.country?.nodes && (
																				<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																					<img
																						src={location.src}
																						className={`${styles.location}`}
																						alt="location"
																					/>
																					<span>
																						{item?.events?.thumbnail?.country?.nodes?.map(
																							(item2) => item2.title
																						)}
																					</span>
																				</p>
																			)}
																		</div>
																	</div>
																</div>
															</a>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>

								<div
									className={`${styles.links} ${styles.has_dropdown} ${
										openDropdown === "HowWeHelp" ? styles.dropdown_opened : ""
									} dropdown`}
									onClick={() => toggleDropdown("HowWeHelp")}
									data-lenis-prevent
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
													{data?.howWeHelps?.map((item, ind) => {
														return (
															<a
																key={ind}
																href={`/how-we-help/${item?.slug}`}
																className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
															>
																<span>{item?.title}</span>{" "}
																<img src={menu_hover_arrow.src} alt="arrow" />
															</a>
														);
													})}
													{/* <a
														href="/how-we-help/transaction-support"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Transaction Support</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/how-we-help/portfolio-valuation"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Portfolio Valuation</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/how-we-help/asset-citing-optimisation"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Asset Citing & Optimisation</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/how-we-help/strategy-us"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Strategy Us</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/how-we-help/ppas"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>PPAs</span> <img src={menu_hover_arrow.src} alt="arrow" />
													</a> */}
												</div>
												<div className={`${styles.weAreHiring} f_w_j`}>
													<div className={`${styles.imgBox}`}>
														<img
															src={header_img.src}
															className="width_100 b_r_10"
															alt="img"
														/>
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
															<a href="/careers/life-at-aurora">
																<Button color="primary" variant="filled" shape="rounded">
																	View All
																</Button>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className={`${styles.menuBoxleft}`}>
												{data?.events?.map((item, ind) => {
													return (
														<div className={`${styles.ItemBox}`} key={item?.title}>
															<a href={`/events/${item?.slug}`}>
																<div className={`${styles.hoverBox}`}>
																	<div className={`${styles.eventImgBox}`}>
																		<img
																			src={
																				item?.events?.banner?.node?.sourceUrl ||
																				item?.events?.thumbnail?.logo?.node?.sourceUrl
																			}
																			className={`${styles.eventImg}`}
																			alt="img"
																		/>
																		{item?.events?.banner?.node?.sourceUrl && (
																			<img
																				src={
																					item?.events?.thumbnail?.logo?.node?.sourceUrl ||
																					item?.events?.banner?.node?.sourceUrl
																				}
																				className={`${styles.eventLogo}`}
																				alt="event logo"
																			/>
																		)}
																	</div>
																	<div className={`${styles.eventContentBox}`}>
																		<div
																			className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
																		>
																			{item?.events?.thumbnail?.status} Event
																		</div>
																		<h4
																			className={`${styles.descTxt} text_reg font_primary color_secondary `}
																		>
																			{item?.title}
																		</h4>
																		<div className={`${styles.dateFlex} f_j pt_30`}>
																			<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																				<img
																					src={calender.src}
																					className={`${styles.calender}`}
																					alt="calender"
																				/>
																				<span>{formatDate(item?.events?.thumbnail?.date)}</span>
																			</p>
																			{item?.events?.thumbnail?.country?.nodes && (
																				<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																					<img
																						src={location.src}
																						className={`${styles.location}`}
																						alt="location"
																					/>
																					<span>
																						{item?.events?.thumbnail?.country?.nodes?.map(
																							(item2) => item2.title
																						)}
																					</span>
																				</p>
																			)}
																		</div>
																	</div>
																</div>
															</a>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>

								<div
									className={`${styles.links} ${styles.has_dropdown} ${
										openDropdown === "ProductServices" ? styles.dropdown_opened : ""
									} dropdown`}
									onClick={() => toggleDropdown("ProductServices")}
									data-lenis-prevent
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
										<div className={`${styles.megaMenuBox} ${styles.productBox} f_w_j`}>
											<div className={`${styles.menuBoxRight}`}>
												<div className={`${styles.pageName}`}>
													<h4 className="text_xxs font_primary color_medium_gray">
														Our Offerings
													</h4>
												</div>
												<div className={`${styles.eosAdvisoryFlex} f_w_j`}>
													<div className={`${styles.eosItem}`}>
														<a
															href="/eos"
															className={`${styles.eosLinksTxt} f_r_a_center text_reg f_w_m font_primary color_dark_gray`}
														>
															<span>EOS Platform</span>{" "}
															<img src={menu_hover_arrow.src} alt="arrow" />
														</a>
														<p className="text_xs color_light_gray ">
															Lorem ipsum dolor sit amet consectetur.
														</p>
													</div>
													{data?.services?.map((item, ind) => {
														return (
															<div className={`${styles.eosItem}`} key={ind}>
																<a
																	href={`/service/${item?.slug}`}
																	className={`${styles.eosLinksTxt} f_r_a_center text_reg f_w_m font_primary color_dark_gray`}
																>
																	<span>{item?.title}</span>{" "}
																	<img src={menu_hover_arrow.src} alt="arrow" />
																</a>
																<div className="text_xs color_light_gray ">
																	{parse(item?.content || "")}
																</div>
															</div>
														);
													})}
												</div>
												<div className={`${styles.softwareFlex} f_w_j`}>
													<div className={`${styles.softwareItem}`}>
														<a
															href="/software"
															className={`${styles.softwareTxt} f_r_a_center text_reg f_w_m font_primary color_dark_gray`}
														>
															<span>Software</span>{" "}
															<img src={menu_hover_arrow.src} alt="arrow" />
														</a>
														<div className={`${styles.softwareListBox}`}>
															{data?.softwares?.map((item, ind) => {
																return (
																	<a
																		key={ind}
																		href={`/software/${item?.slug}`}
																		className={`${styles.softwareLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
																	>
																		<img src={item?.logo?.logo || amun_logo.src} alt="arrow" />
																		<span>{item?.title}</span>
																	</a>
																);
															})}
															{/* <a
																href=""
																className={`${styles.softwareLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
															>
																<img src={amun_logo.src} alt="arrow" />
																<span>Amun</span>{" "}
															</a>
															<a
																href=""
																className={`${styles.softwareLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
															>
																<img src={amun_logo.src} alt="arrow" />
																<span>Chronos</span>{" "}
															</a>
															<a
																href=""
																className={`${styles.softwareLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
															>
																<img src={amun_logo.src} alt="arrow" />
																<span>Origin</span>{" "}
															</a>
															<a
																href=""
																className={`${styles.softwareLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
															>
																<img src={amun_logo.src} alt="arrow" />
																<span>Lumus PPA</span>{" "}
															</a> */}
														</div>
													</div>
													<div className={`${styles.softwareItem}`}>
														<a
															href=""
															className={`${styles.softwareTxt} f_r_a_center text_reg f_w_m font_primary color_dark_gray`}
														>
															<span>Subscription Analytics</span>{" "}
															<img src={menu_hover_arrow.src} alt="arrow" />
														</a>
														<div className={`${styles.softwareListBox}`}>
															{data?.products?.map((item, ind) => {
																return (
																	<a
																		key={ind}
																		href={`/products/${item?.slug}`}
																		className={`${styles.softwareLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
																	>
																		<img src={item?.logo?.logo || amun_logo.src} alt="arrow" />
																		<span>{item?.title}</span>
																	</a>
																);
															})}
															{/* <a
																href=""
																className={`${styles.softwareLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
															>
																<img src={amun_logo.src} alt="arrow" />
																<span>Flexible Energy </span>{" "}
															</a>
															<a
																href=""
																className={`${styles.softwareLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
															>
																<img src={amun_logo.src} alt="arrow" />
																<span>Power & Renewables</span>{" "}
															</a>
															<a
																href=""
																className={`${styles.softwareLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
															>
																<img src={amun_logo.src} alt="arrow" />
																<span>Hydrogen</span>{" "}
															</a>
															<a
																href=""
																className={`${styles.softwareLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
															>
																<img src={amun_logo.src} alt="arrow" />
																<span>Grid Add-on</span>{" "}
															</a> */}
														</div>
													</div>
												</div>
											</div>
											<div className={`${styles.menuBoxleft}`}>
												<div className={`${styles.productImgBox}`}>
													<img src={mac_img.src} className={`${styles.mac_img}`} alt="img" />
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
									data-lenis-prevent
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
														Latest from Aurora
													</h4>
												</div>
												<div className={`${styles.pageLinks} pt_20`}>
													<a
														href="/resources/aurora-insights"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Aurora Insights</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/resources/energy-talks"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Energy Talks</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/resources/webinar"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Webinars</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
												</div>
												<div className={`${styles.weAreHiring} f_w_j`}>
													<div className={`${styles.imgBox}`}>
														<img
															src={header_img.src}
															className="width_100 b_r_10"
															alt="img"
														/>
													</div>
													<div className={`${styles.contentBox}`}>
														<h4 className="text_reg font_primary color_secondary">
															EOS Platform
														</h4>
														<p className="text_xs color_light_gray">
															EOS centralises Aurora&apos;s comprehensive data, sophisticated
															software, and precise forecasts, enabling energy professionals to
															make data-driven decisions.
														</p>
														<div className={`${styles.btn_box} pt_20`}>
															<a href="/eos">
																<Button color="primary" variant="filled" shape="rounded">
																	Know More
																</Button>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className={`${styles.menuBoxleft}`}>
												{data?.events?.map((item, ind) => {
													return (
														<div className={`${styles.ItemBox}`} key={item?.title}>
															<a href={`/events/${item?.slug}`}>
																<div className={`${styles.hoverBox}`}>
																	<div className={`${styles.eventImgBox}`}>
																		<img
																			src={
																				item?.events?.banner?.node?.sourceUrl ||
																				item?.events?.thumbnail?.logo?.node?.sourceUrl
																			}
																			className={`${styles.eventImg}`}
																			alt="img"
																		/>
																		{item?.events?.banner?.node?.sourceUrl && (
																			<img
																				src={
																					item?.events?.thumbnail?.logo?.node?.sourceUrl ||
																					item?.events?.banner?.node?.sourceUrl
																				}
																				className={`${styles.eventLogo}`}
																				alt="event logo"
																			/>
																		)}
																	</div>
																	<div className={`${styles.eventContentBox}`}>
																		<div
																			className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
																		>
																			{item?.events?.thumbnail?.status} Event
																		</div>
																		<h4
																			className={`${styles.descTxt} text_reg font_primary color_secondary `}
																		>
																			{item?.title}
																		</h4>
																		<div className={`${styles.dateFlex} f_j pt_30`}>
																			<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																				<img
																					src={calender.src}
																					className={`${styles.calender}`}
																					alt="calender"
																				/>
																				<span>{formatDate(item?.events?.thumbnail?.date)}</span>
																			</p>
																			{item?.events?.thumbnail?.country?.nodes && (
																				<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																					<img
																						src={location.src}
																						className={`${styles.location}`}
																						alt="location"
																					/>
																					<span>
																						{item?.events?.thumbnail?.country?.nodes?.map(
																							(item2) => item2.title
																						)}
																					</span>
																				</p>
																			)}
																		</div>
																	</div>
																</div>
															</a>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>

								<div className={styles.links}>
									<a href="/events">
										<div
											className={`${styles.link_title} text_xs font_primary color_dark_gray`}
										>
											Events
										</div>
									</a>
								</div>

								<div
									className={`${styles.links} ${styles.has_dropdown} ${
										openDropdown === "Careers" ? styles.dropdown_opened : ""
									} dropdown`}
									onClick={() => toggleDropdown("Careers")}
									data-lenis-prevent
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
														Work with us
													</h4>
												</div>
												<div className={`${styles.pageLinks} pt_20`}>
													<a
														href="/careers/join-us"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Join Us</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/careers/early-careers"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Early Careers</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/careers/our-team"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Our Teams</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/careers/life-at-aurora"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Life at Aurora</span>{" "}
														<img src={menu_hover_arrow.src} alt="arrow" />
													</a>
													<a
														href="/careers/faq"
														className={`${styles.pageLinksTxt} f_r_a_center text_xs font_primary color_dark_gray`}
													>
														<span>Faq</span> <img src={menu_hover_arrow.src} alt="arrow" />
													</a>
												</div>
												<div className={`${styles.weAreHiring} f_w_j`}>
													<div className={`${styles.imgBox}`}>
														<img
															src={header_img.src}
															className="width_100 b_r_10"
															alt="img"
														/>
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
															<a href="/careers/join-us">
																<Button color="primary" variant="filled" shape="rounded">
																	See Open Positions
																</Button>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className={`${styles.menuBoxleft}`}>
												{data?.events?.map((item, ind) => {
													return (
														<div className={`${styles.ItemBox}`} key={item?.title}>
															<a href={`/events/${item?.slug}`}>
																<div className={`${styles.hoverBox}`}>
																	<div className={`${styles.eventImgBox}`}>
																		<img
																			src={
																				item?.events?.banner?.node?.sourceUrl ||
																				item?.events?.thumbnail?.logo?.node?.sourceUrl
																			}
																			className={`${styles.eventImg}`}
																			alt="img"
																		/>
																		{item?.events?.banner?.node?.sourceUrl && (
																			<img
																				src={
																					item?.events?.thumbnail?.logo?.node?.sourceUrl ||
																					item?.events?.banner?.node?.sourceUrl
																				}
																				className={`${styles.eventLogo}`}
																				alt="event logo"
																			/>
																		)}
																	</div>
																	<div className={`${styles.eventContentBox}`}>
																		<div
																			className={`${styles.tag} text_xxs font_primary text_uppercase color_white`}
																		>
																			{item?.events?.thumbnail?.status} Event
																		</div>
																		<h4
																			className={`${styles.descTxt} text_reg font_primary color_secondary `}
																		>
																			{item?.title}
																		</h4>
																		<div className={`${styles.dateFlex} f_j pt_30`}>
																			<p className="text_xxs f_w_m color_light_gray text_uppercase f_r_a_center">
																				<img
																					src={calender.src}
																					className={`${styles.calender}`}
																					alt="calender"
																				/>
																				<span>{formatDate(item?.events?.thumbnail?.date)}</span>
																			</p>
																			<p className="text_xxs f_w_m color_medium_gray f_r_a_center">
																				<img
																					src={location.src}
																					className={`${styles.location}`}
																					alt="location"
																				/>
																				<span>
																					{item?.events?.thumbnail?.country?.nodes?.map(
																						(item2) => item2.title
																					)}
																				</span>
																			</p>
																		</div>
																	</div>
																</div>
															</a>
														</div>
													);
												})}
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
						<div className={`${styles.globalList}`} onClick={togglePopup}>
							<p className="text_sm font_primary color_dark_gray f_w_m f_r_a_center">
								<span>Global Presence </span>
								<img src={dropdown_arrow.src} alt="arrow" />
							</p>
						</div>
					</div>
				</div>
				<div
					className={`${styles.globalPopUp} ${isPopupActive ? styles.active : ""}`}
					data-lenis-prevent
				>
					<div className="container">
						<div className={`${styles.globalListMain}`}>
							<button
								aria-label="Close menu"
								className={styles.close_btn}
								onClick={closePopup}
							>
								<img src={popup_close.src} alt="" />
							</button>
							<div className={`${styles.listFlex} f_w`}>
								{data?.regions?.map((item, ind) => {
									return (
										<div className={`${styles.listItem}`} key={ind}>
											<div
												className={`${styles.CountryHeading}`}
												onClick={() => toggleTab(ind + 1)}
											>
												<h4 className="text_md f_w_m color_white font_primary">
													{item?.name}
												</h4>
												<img
													src={dropdown_arrow.src}
													className={`${
														toggleState === ind + 1 ? styles.arrow_rotate : ""
													} visible_xs`}
													alt=""
												/>
											</div>
											<div
												className={`${styles.CountryNameBox} ${
													toggleState === ind + 1 ? styles.ul_section_active : ""
												} `}
											>
												<ul>
													{item?.countries?.nodes?.map((country, index) => (
														<li key={index} className="text_xs color_platinum_gray">
															<a href={`/global-presence/${country.slug}`}>{country?.title}</a>
														</li>
													))}
													{/* <li className="text_xs color_platinum_gray">India</li>
													<li className="text_xs color_platinum_gray">Japan</li>
													<li className="text_xs color_platinum_gray">Korea</li>
													<li className="text_xs color_platinum_gray">Philippines</li> */}
												</ul>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</header>
			{showSearch && (
				<>
					<div className={styles.searchOverlay}></div>
					<div className={styles.searchBar}>
						<div className={styles.searchArea}>
							<button className={`${styles.Close}`} onClick={handleCloseClick}>
								<img src={popup_close.src} alt="search" />
							</button>
						</div>
						<GlobalSearch />
					</div>
				</>
			)}
		</>
	);
}
