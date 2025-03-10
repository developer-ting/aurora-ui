// MODULES //
import { useState } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import ServicesCircle from "@/components/ServicesCircle";
import TrustedLeaders from "@/components/TrustedLeaders";
import TestimonialFeedback from "@/components/TestimonialFeedback";
import Insights from "@/components/Insights";
import EosIntegratedSystem from "@/components/EosIntegratedSystem";
import IntegratedSystem from "@/components/IntegratedSystem";

// SECTIONS //
import ProductListingWrapper from "@/sections/products/ProductListingWrapper";
import SoftwareMarket from "@/sections/softwares/SoftwareMarket";

// PLUGINS //
import { Link, scroller } from "react-scroll";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Products.module.scss";

// IMAGES //

// DATA //

/** Products Page */
export default function Products() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Products"} Desc={""} OgImg={""} Url={"/products"} />

			{/* Header */}
			{/* <Header /> */}

			{/* Page Content starts here */}
			<main className={styles.ProductsPage}>
				<ProductListingWrapper />
				<SoftwareMarket />
				<ServicesCircle />
				<TrustedLeaders />
				<TestimonialFeedback />
				<div className={`${styles.insightBg} pb_100 pt_30`}>
					<div className={`${styles.boxBg}`}>
						<Insights />
					</div>
					<EosIntegratedSystem />
				</div>
				<div className="pt_100">
					<IntegratedSystem />
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);
}
