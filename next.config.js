/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	...(isProd && {
		basePath: "/personal-website-clone",
		assetPrefix: "/personal-website-clone/",
	}),
	images: {
		domains: ["firebasestorage.googleapis.com", "raw.githubusercontent.com"],
	},
};

module.exports = nextConfig;
