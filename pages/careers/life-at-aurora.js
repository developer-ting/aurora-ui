/* eslint-disable quotes */
// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import InnerBanner from "@/components/InnerBanner";
import Button from "@/components/Buttons/Button";
import SectionsHeader from "@/components/SectionsHeader";
import SmarterEnergy from "@/components/SmarterEnergy";
import IntegratedSystem from "@/components/IntegratedSystem";
import GlobalMap from "@/components/GlobalMap";
import Insights from "@/components/Insights";

// SECTIONS //
import TeamAurora from "@/sections/careers/TeamAurora";
import EarlyCareersInside from "@/sections/careers/EarlyCareersInside";
import CollaborationSupport from "@/sections/careers/CollaborationSupport";
import JobOpenings from "@/sections/careers/JobOpenings";
import ConnectWithUs from "@/sections/careers/ConnectWithUs";
import Counter from "@/sections/careers/Counter";

// PLUGINS //
import { Link, scroller } from "react-scroll";

// UTILS //

// STYLES //
import styles from "@/styles/pages/careers/LifeAtAurora.module.scss";

// IMAGES //
import country_thumb from "@/../public/img/global-presence/country_thumb.jpg";
import available_regions from "@/../public/img/global-presence/available_regions.jpg";

// DATA //
import locationJson from "@/data/globalMap.json";

// SERVICES //
import { getLifeAtAurora } from "@/services/Careers.service";
import { getFetchJobData } from "@/services/JobOpenings.service";
import {
	getInsights,
	getInsightsCategories,
} from "@/services/Insights.service";
import IframeModal from "@/components/IframeModal";
import { getOffices } from "@/services/Offices.service";

/** Fetch  */
export async function getServerSideProps() {
	const [data, jobs, offices] = await Promise.all([
		getLifeAtAurora(),
		getFetchJobData(),
		getOffices(),
	]);
	let obj = {
		data: { ...data.data.page.lifeAtAurora, offices: data.data.offices.nodes },
	};
	delete obj.data.lifeAtAurora;
	const [categoriesForSelect, list] = await Promise.all([
		getInsightsCategories(),
		getInsights('first: 3, where: {categoryName: ""}'),
	]);
	const otherList = list?.data?.posts?.nodes;
	const countries = categoriesForSelect.data.countries.nodes;

	return {
		props: {
			...obj,
			jobs,
			otherList,
			countries,
			offices: offices.data.offices.nodes,
		},
	};
}

/** LifeAtAurora Page */
export default function LifeAtAurora({
	data,
	jobs,
	otherList,
	countries,
	offices,
}) {
	const [mapJson, setMapJson] = useState();
	const [isFormVisible, setIsFormVisible] = useState(false); // Form hidden by default

	/** scrollToSection */
	const scrollToSection = (id) => {
		scroller.scrollTo(id, {
			duration: 500,
			smooth: true,
			offset: -100,
			spy: true,
			onEnd: () => console.log("Scrolling finished!"), // ❌ Not available directly
		});

		setTimeout(() => {
			setIsFormVisible(true);
			console.log("Scrolling finished!");
		}, 500);
	};

	const headerArray = [
		{ name: "Expertise", id: "#expertise" },
		{ name: "Available Regions", id: "#availableregions" },
		{ name: "Why Aurora", id: "#whyaurora" },
		{ name: "Clients", id: "#clients" },
		<div key="btn" to="Insights" onClick={() => scrollToSection("Insights")}>
			<Button color="primary" variant="filled" shape="rounded">
				Get Started
			</Button>
		</div>,
	];

	useEffect(() => {
		let tempMapJson = {
			zoom: 9,
			name: "Global",
			centerOfCountry: {
				lat: 18.1307561,
				lng: 23.554042,
			},
			markers: [],
		};

		data.offices?.map((item) => {
			let obj = {
				name: item.title,
				lat: item.offices.map.lat,
				lng: item.offices.map.lng,
				url: "/careers/life-at-aurora",
				hoverImg: item.offices.thumbnail.node.sourceUrl,
				unique: Math.random(),
				// icon:
				// 	"https://aurora.mystagingwebsite.com/wp-content/uploads/2025/03/serviceIcon.png",
			};

			tempMapJson.markers.push(obj);
		});

		setMapJson(tempMapJson);
	}, []);

	console.log(offices);

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Life At Aurora"}
				Desc={""}
				OgImg={""}
				Url={"/life-at-aurora"}
			/>

			{/* Header */}
			{/* <Header /> */}

			{/* Page Content starts here */}
			<main className={styles.LifeAtAuroraPage}>
				<InnerBanner
					bannerTitle={data?.banner?.title}
					bannerDescription={data?.banner?.description}
					desktopImage={data?.banner?.dekstopimage?.node?.sourceUrl}
					mobileImage={data?.banner?.mobileimage?.node?.sourceUrl}
					vimeoid={data?.banner?.videoLink}
				/>
				<div>
					<SectionsHeader data={headerArray} />
				</div>
				{data?.keyAdvantages && (
					<div>
						<SmarterEnergy data={data?.keyAdvantages} />
					</div>
				)}
				<div className="pt_60">
					<TeamAurora />
				</div>
				{mapJson && (
					<div className="dark_bg">
						<GlobalMap
							locationJson={[mapJson]}
							marqueeText={data?.globalMap?.marqueetext}
						/>
					</div>
				)}
				<div className="black_bg pb_80">
					<Counter
						data={{ stats: { ...data.stats, offices: data.offices.length } }}
					/>
				</div>
				<div className={`${styles.EarlyMain}`}>
					<EarlyCareersInside />
				</div>
				{data?.collaborationSupport?.list?.length > 0 && (
					<div>
						<CollaborationSupport data={data?.collaborationSupport} />
					</div>
				)}
				<div>
					<JobOpenings data={jobs} />
				</div>

				<div className="pt_100">
					<ConnectWithUs data={offices} />
				</div>
				<div className={`${styles.containerCustom} pb_100`}>
					<div className="container">
						<Insights
							isPowerBgVisible={true}
							defaultList={otherList}
							countries={countries}
						/>
					</div>
				</div>
				<div className="pb_100">
					<IntegratedSystem />
				</div>
			</main>
			<IframeModal />
			{/* Page Content ends here */}

			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);
}
