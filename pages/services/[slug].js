// MODULES //
import { useState } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import TestimonialFeedback from "@/components/TestimonialFeedback";
import SectionsHeader from "@/components/SectionsHeader";
import InnerBanner from "@/components/InnerBanner";
import Button from "@/components/Buttons/Button";
import TrustedLeaders from "@/components/TrustedLeaders";
import SmarterEnergy from "@/components/SmarterEnergy";
import Insights from "@/components/Insights";
import IntegratedSystem from "@/components/IntegratedSystem";
import ServicesCircle from "@/components/ServicesCircle";
import CaseStudy from "@/components/CaseStudy";

// SECTIONS //

// PLUGINS //
import { Link, scroller } from "react-scroll";

// UTILS //

// STYLES //
import styles from "@/styles/pages/services/advisory.module.scss";

// IMAGES //
import desktop_banner from "@/../public/img/services/advisory/desktop_banner.jpg";

// DATA //

// SERVICES //
import { getServiceData } from "@/services/Service.service";
import { getRegions } from "@/services/GlobalPresence.service";
import { filterMarkersBySlug, getMapJsonForProducts } from "@/utils";

/** Fetch  */
export async function getServerSideProps({ params }) {
	const [data, regions] = await Promise.all([
		getServiceData(params.slug),
		getRegions(),
	]);
	const mapJson = getMapJsonForProducts(
		filterMarkersBySlug(regions, data.data.servicesBy.slug)
	);
	return { props: { data: data.data.servicesBy, mapJson } };
}

/** Advisory Page */
export default function Advisory({ data, mapJson }) {
	console.log(data);
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

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={data.title}
				Desc={""}
				OgImg={""}
				Url={`/services/${data.slug}`}
			/>

			{/* Header */}
			{/* <Header /> */}

			{/* Page Content starts here */}
			<main className={styles.AdvisoryPage}>
				<div className="pb_60">
					<InnerBanner
						bannerTitle={
							data.service.banner.title || "Lorem ipsum dolor sit amet consectetur."
						}
						bannerDescription={
							data.service.banner.description ||
							"Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper nec sodales mi. Tellus imperdiet volutpat dui ipsum massa. In tincidunt tortor elit suspendisse arcu massa fusce. Urna lectus ullamcorper est eu quis lectus tortor nam."
						}
						btnTxt={data.service.banner.buttonLink || "Get Started"}
						desktopImage={
							data.service.banner.desktopThumbnail?.node.sourceUrl ||
							desktop_banner.src
						}
						mobileImage={
							data.service.banner.mobileThumbnail?.node.sourceUrl || desktop_banner.src
						}
						videoSrc={data.service.banner.vimeoLink}
					/>
				</div>
				<SectionsHeader data={headerArray} />
				<SmarterEnergy data={data.service.expertise} />
				<ServicesCircle data={data.service.keyAdvantages} />
				<div className="pt_100">
					<CaseStudy data={data.service.caseStudy} />
				</div>
				<div className="ptb_100">
					<TrustedLeaders data={data.service.ourClient} />
				</div>
				<div className="pb_100">
					<TestimonialFeedback data={data.service.ourClient} />
				</div>
				<div className="pb_100">
					<Insights
						isFormVisible={isFormVisible}
						setIsFormVisible={setIsFormVisible}
						isPowerBgVisible={true}
						isInsightsBlogsVisible={true}
					/>
				</div>
				<div className="pb_100">
					<IntegratedSystem />
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);
}
