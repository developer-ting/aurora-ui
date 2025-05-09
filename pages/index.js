/* eslint-disable quotes */
// MODULES //
import dynamic from "next/dynamic";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
const GlobalMap = dynamic(() => import("@/components/GlobalMap"), {
	ssr: false,
});
// import GlobalMap from "@/components/GlobalMap";
import TrustedLeaders from "@/components/TrustedLeaders";
import TestimonialFeedback from "@/components/TestimonialFeedback";
import IframeModal from "@/components/IframeModal";
import Counter from "@/sections/careers/Counter";

// SECTIONS //
import HomeBanner from "@/sections/home/HomeBanner";
const HomeOurOfferings = dynamic(
	() => import("@/sections/home/HomeOurOfferings"),
	{ ssr: false }
);
const HomeWhoWeAre = dynamic(() => import("@/sections/home/HomeWhoWeAre"), {
	ssr: false,
});
const HomeResources = dynamic(() => import("@/sections/home/HomeResources"), {
	ssr: false,
});
const HomeEvents = dynamic(() => import("@/sections/home/HomeEvents"), {
	ssr: false,
});
const HomeTalentMeets = dynamic(
	() => import("@/sections/home/HomeTalentMeets"),
	{
		ssr: false,
	}
);
// import HomeOurOfferings from "@/sections/home/HomeOurOfferings";
// import HomeWhoWeAre from "@/sections/home/HomeWhoWeAre";
// import HomeResources from "@/sections/home/HomeResources";
// import HomeEvents from "@/sections/home/HomeEvents";
// import HomeTalentMeets from "@/sections/home/HomeTalentMeets";

// PLUGINS //

// UTILS //
import { getMapJsonForAllRegions } from "@/utils";

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //

// DATA //

// SERVICES //
import { getRegions } from "@/services/GlobalPresence.service";
import { getHomePage } from "@/services/Home.service";
import { getInsights } from "@/services/Insights.service";
import { getAllEvents } from "@/services/Events.service";

/** Fetch  */
export async function getStaticProps() {
	const [regions, data, insights, eventsdata] = await Promise.all([
		getRegions(),
		getHomePage(),
		getInsights(
			'first: 6, where: {categoryName: "commentary,public-webinar,webinar,webinar-recording,market-reports"}'
		),
		// eslint-disable-next-line quotes
		getAllEvents('first:3, where: { thumbnail: { status: "Upcoming" } }'),
	]);
	const mapJson = getMapJsonForAllRegions(regions);

	return {
		props: {
			data: data.data.page.homepage,
			countries: data.data.countries.nodes,
			mapJson,
			insights: insights.data.posts.nodes,
			events: eventsdata.data.events.nodes,
		},
		revalidate: 10000,
	};
}

/** Home Page */
export default function HomePage({
	mapJson,
	data,
	countries,
	insights,
	events,
}) {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			{/* <Header /> */}

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<HomeBanner />
				<HomeOurOfferings />
				{data?.ourClient?.selectLogos && (
					<div className="ptb_100">
						<TrustedLeaders data={data.ourClient} />
					</div>
				)}
				{data?.ourClient?.testimonials && (
					<div className="pb_100">
						<TestimonialFeedback data={data.ourClient} />
					</div>
				)}
				{mapJson && <GlobalMap locationJson={mapJson} />}
				{data?.stats && (
					<div>
						<Counter
							data={{ stats: { ...data.stats, countries: countries.length } }}
						/>
					</div>
				)}
				<HomeWhoWeAre />
				<div className="ptb_100">
					<HomeResources data={insights} countries={countries} />
				</div>
				<div className="pb_100">
					<HomeEvents data={events} />
				</div>
				<div className="">
					<HomeTalentMeets />
				</div>
			</main>
			<IframeModal />
			{/* Page Content ends here */}

			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);
}
