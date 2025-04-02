// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// STYLES //
import styles from "@/styles/components/InnerBanner.module.scss";

// PLUGINS //
import Vimeo from "@u-wave/react-vimeo";

// IMAGES //
import DefaultBanner from "@/../public/img/banner/defaultDesktopBanner.jpg";
import DefaultBannerMob from "@/../public/img/banner/defaultMobileBanner.jpg";
import pause_button from "../../public/img/icons/pause_button.svg";
import play_button from "../../public/img/icons/play_icon.png";
import ContentFromCms from "./ContentFromCms";

// UTILS //

/** Inner Banner component */
function InnerBanner({
	desktopImage,
	bannerTitle,
	bannerDescription,
	mobileImage,
	btnTxt,
	showContentOnly = false, // New prop to toggle visibility
	vimeoid,
}) {
	const defaultVimeoObj = {
		video: vimeoid,
		controls: false,
		paused: false,
		autoplay: true,
		loop: true,
		responsive: true,
	};
	const [isPlaying, setIsPlaying] = useState(true);
	const vimeoRef = useRef(null);

	/** togglePlayPause */
	const togglePlayPause = () => {
		if (isPlaying) {
			vimeoRef.current.player.pause();
		} else {
			vimeoRef.current.player.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<section className={`${styles.BannerMain}`}>
			<div className="container">
				{/* Banner Content */}
				<div className={`${styles.flexBox} f_j ptb_60`}>
					<div className={`${styles.flexItemOne}`}>
						<h1 className="text_xl font_primary f_w_m color_secondary text_uppercase">
							{bannerTitle}
						</h1>
					</div>
					<div className={`${styles.flexItemTwo}`}>
						<div className={`${styles.label} text_reg color_dark_gray`}>
							{bannerDescription && (
								<ContentFromCms>{bannerDescription}</ContentFromCms>
							)}
						</div>
						{btnTxt && (
							<div className={`${styles.bookBtn} pt_30`}>
								<Button color="primary" variant="filled" shape="rounded">
									{btnTxt}
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
			{!showContentOnly && (
				<div className="containerLarge">
					<div className={`${styles.inner_banner_wrap} `}>
						{/* Banner Image or Video */}
						<div className={`${styles.banner_image} next_image`}>
							{vimeoid ? (
								<div className={`${styles.VideoBox}`}>
									<Vimeo
										className={`${styles.vimeoPlayer}`}
										ref={vimeoRef}
										{...defaultVimeoObj}
									/>
									{/* <video ref={videoRef} playsInline autoPlay muted loop>
										<source src={videoSrc} type="video/mp4" />
									</video>
								 */}

									{/* Play/Pause Button */}
									<div className={`${styles.playPauseBtn}`} onClick={togglePlayPause}>
										{isPlaying ? (
											<img
												src={pause_button.src}
												className={`${styles.pause_button}`}
												alt="Pause"
											/>
										) : (
											<img
												src={play_button.src}
												className={`${styles.play_button}`}
												alt="Play"
											/>
										)}
									</div>
								</div>
							) : (
								<picture>
									<source
										srcSet={desktopImage ? desktopImage : DefaultBanner.src}
										media="(min-width:767px)"
									/>
									<img
										src={mobileImage ? mobileImage : DefaultBannerMob.src}
										alt="Banner Image"
									/>
								</picture>
							)}
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default InnerBanner;
