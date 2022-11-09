import Image from "next/image";
import { debounce } from "../lib/utils";

const Hero = ({ setInput }) => {
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<div className="relative  h-screen-4/5">
			<Image
				className="object-cover w-full h-screen-4/5"
				src="/images/hero-bg.jpg"
				fill={true}
				alt="hero"
			/>
			<div className="flex items-center justify-center h-full">
				<div className="relative w-full max-w-lg px-5 py-10 bg-black-800 rounded-md">
					<form>
						<div className="relative">
							<label htmlFor="searchInput"></label>
							<input
								className="w-full h-10 bg-transparent border rounded-3xl border-slate-200 p-3 text-white placeholder:text-white outline-none"
								type="text"
								id="searchInput"
								placeholder="Search..."
								onChange={debounce(handleChange)}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Hero;
