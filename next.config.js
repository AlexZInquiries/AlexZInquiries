/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	output: "export", // Add this line for static site generation
	...(isProd && {
	}),
	images: {
		domains: ["firebasestorage.googleapis.com", "raw.githubusercontent.com"],
		unoptimized: true, // Add this for static export compatibility
	},
};

module.exports = nextConfig;
