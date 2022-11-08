/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/de5d1t95z/image/upload/**",
			},
		],
	},
};

module.exports = nextConfig;
