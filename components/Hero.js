import Image from "next/image";
import Search from "./Search";
const Hero = () => {
	return (
		<div className="relative  h-screen-4/5">
			<Image
				className="object-cover w-full h-screen-4/5"
				src="/images/hero-bg.jpg"
				fill={true}
				alt="hero"
			/>
			<div className="flex items-center justify-center h-full">
				<Search />
			</div>
		</div>
	);
};

export default Hero;
