/* eslint-disable quotes */
// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import InnerBanner from "@/components/InnerBanner";
import SoftwareCards from "@/components/SoftwareCards";
import Insights from "@/components/Insights";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/careers/Careers.module.scss";

// IMAGES //
import dropdown_arrow from "../../public/img/icons/dropdown_arrow.svg";

// DATA //

// SERVICES //
import {
	getInsights,
	getInsightsCategories,
} from "@/services/Insights.service";
import IframeModal from "@/components/IframeModal";

/** Fetch getStaticProps */
export async function getServerSideProps() {
	const [categoriesForSelect, list] = await Promise.all([
		getInsightsCategories(),
		getInsights('first: 3, where: {categoryName: ""}'),
	]);
	const otherList = list?.data?.posts?.nodes;
	const countries = categoriesForSelect.data.countries.nodes;

	return {
		props: {
			countries: countries,
			otherList,
		},
		revalidate: 10,
	};
}

/** Careers Page */
export default function Careers({ otherList, countries }) {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Careers"} Desc={""} OgImg={""} Url={"/careers"} />

			{/* Header */}
			{/* <Header /> */}

			{/* Page Content starts here */}
			<main className={styles.CareersPage}>
				<div className={styles.CareersBg}>
					<section className={`${styles.listLinksBox} ptb_100`}>
						<div className="container">
							<div className={`${styles.common_queries_flex} f_w_j`}>
								<div className={`${styles.title_wrap}`}>
									<h2 className="text_xl font_primary f_w_s_b color_secondary pb_20">
										Lorem ipsum dolor sit amet
									</h2>
									<p className="text_reg color_dark_gray">
										Porttitor leo vel morbi diam pulvinar massa nunc habitasse egestas.
										Porttitor leo vel morbi diam pulvinar massa nunc habitasse egestas.
										Porttitor leo vel morbi diam pulvinar massa nunc habitasse egestas.
									</p>
								</div>
								<div className={`${styles.common_queries_faq}`}>
									<div className={`${styles.linksItem}`}>
										<div className={`${styles.arrowLinks}`}>
											<span>
												<img src={dropdown_arrow.src} alt="icon" />
											</span>
										</div>
										<div className={`${styles.Desc}`}>
											<h4 className="text_md f_w_m font_primary pb_10">About Us</h4>
											<p className="text_reg color_dark_gray">
												Lorem ipsum dolor sit amet consectetur. Habitant faucibus libero
												arcu neque commodo
											</p>
										</div>
									</div>
									<div className={`${styles.linksItem}`}>
										<div className={`${styles.arrowLinks}`}>
											<span>
												<img src={dropdown_arrow.src} alt="icon" />
											</span>
										</div>
										<div className={`${styles.Desc}`}>
											<h4 className="text_md f_w_m font_primary pb_10">About Us</h4>
											<p className="text_reg color_dark_gray">
												Lorem ipsum dolor sit amet consectetur. Habitant faucibus libero
												arcu neque commodo
											</p>
										</div>
									</div>
									<div className={`${styles.linksItem}`}>
										<div className={`${styles.arrowLinks}`}>
											<span>
												<img src={dropdown_arrow.src} alt="icon" />
											</span>
										</div>
										<div className={`${styles.Desc}`}>
											<h4 className="text_md f_w_m font_primary pb_10">About Us</h4>
											<p className="text_reg color_dark_gray">
												Lorem ipsum dolor sit amet consectetur. Habitant faucibus libero
												arcu neque commodo
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
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
						<SoftwareCards />
					</div>
				</div>
			</main>
			<IframeModal />
			{/* Page Content ends here */}

			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);
}
