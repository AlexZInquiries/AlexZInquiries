/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	images: {
		domains: [
			"firebasestorage.googleapis.com",
			"raw.githubusercontent.com",
			"www.notion.so",
		],
	},
	assetPrefix: isProd ? "/your-repo-name/" : "",
};

module.exports = nextConfig;
