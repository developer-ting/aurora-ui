// MODULES //
import { useState } from "react";

// COMPONENTS //

// SECTIONS //
import Map from "@/components/MapContainer";

// PLUGINS //
import Marquee from "react-fast-marquee";

// UTILS //

// STYLES //
import styles from "@/styles/components/MapContainer.module.scss";

// IMAGES //

// DATA //

/** GlobalMap Component */
export default function GlobalMap({
	locationJson,
	marqueeText = " Energy intelligence across every key market",
	className,
}) {
	const [mapCenter, setMapCenter] = useState(locationJson[0]?.centerOfCountry);
	const [valueOfSelect, setValueOfSelect] = useState(0);
	const [map, setMap] = useState(null);

	if (locationJson.length === 0) return <></>;

	return (
		<section
			className={`${styles.globalMap} section_spacing ${className}`}
			id="availableregions"
			data-name="Available Regions"
		>
			{/* <img src={available_regions.src} className="width_100" alt="img" /> */}
			{/* <div className="container"> */}
			<Marquee className="pb_40" speed={100}>
				<span className={`${styles.title} color_white text_xxl`}>
					{marqueeText}
				</span>
				<span className={`${styles.title} color_white text_xxl`}>
					{marqueeText}
				</span>
			</Marquee>

			<div className="container">
				<Map
					mapCenter={mapCenter}
					setValueOfSelect={setValueOfSelect}
					valueOfSelect={valueOfSelect}
					map={map}
					setMap={setMap}
					defaultZoom={2.2}
					locationJson={locationJson}
				/>
			</div>
			{/* </div> */}
		</section>
	);
}
