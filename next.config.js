/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["img.youtube.com"],
	},
	// async headers() {
	// 	return [
	// 		{
	// 			source: "/(.*)", // Apply to all routes
	// 			headers: [
	// 				{
	// 					key: "Content-Security-Policy",
	// 					value: `
	// 			default-src 'self';
	// 			media-src 'self' https://cms.auroraer.com https://auroraer.mystagingwebsite.com;
	// 			img-src 'self' data: https://www.google.co.in/ https://www.googletagmanager.com/ https://cms.auroraer.com https://auroraer.mystagingwebsite.com https://img.youtube.com https://i.ytimg.com https://maps.googleapis.com https://maps.gstatic.com https://*.google.com https://*.ggpht.com;
	// 			font-src 'self' https://fonts.gstatic.com https://maps.gstatic.com;
	// 			connect-src 'self' https://f.clarity.ms/ https://cms.auroraer.com https://auroraer.mystagingwebsite.com https://analytics.google.com/ https://www.youtube.com https://maps.googleapis.com https://www.google.com/;
	// 			frame-src https://www.googletagmanager.com/ https://www.youtube.com https://www.youtube-nocookie.com/ https://www.google.com https://maps.google.com https://www.google.com/maps; // Allow Google Maps embeds
	// 			object-src 'none';
	// 			base-uri 'self';
	// 			form-action 'self';
	// 			upgrade-insecure-requests;
	// 		  `
	// 						.replace(/\s{2,}/g, " ") // Remove extra spaces
	// 						.trim(),
	// 				},
	// 				{
	// 					key: "X-Frame-Options",
	// 					value: "DENY",
	// 				},
	// 				{
	// 					key: "X-Content-Type-Options",
	// 					value: "nosniff",
	// 				},
	// 				// {
	// 				// 	key: "Referrer-Policy",
	// 				// 	value: "strict-origin-when-cross-origin",
	// 				// },
	// 				// {
	// 				// 	key: "Permissions-Policy",
	// 				// 	value: "geolocation=(), camera=(), microphone=()",
	// 				// },
	// 			],
	// 		},
	// 	];
	// },
};

module.exports = nextConfig;
