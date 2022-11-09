import Link from "next/link";

const Header = () => {
	return (
		<header className="h-20">
			<div className="fixed bg-black z-50 top-0 left-0 w-full h-20  px-8 flex items-center justify-between">
				<Link className="text-white" href="/">
					Logo
				</Link>
				<nav className="flex items-center">
					<ul className="flex items-center">
						<li>
							<Link className="inline-block mr-3 text-white uppercase" href="/">
								Home
							</Link>
						</li>
						<li>
							<Link
								className="inline-block mr-3 text-white uppercase"
								href="/categories">
								Categories
							</Link>
						</li>
						{/* <li>
							<Link className="inline-block mr-3 text-white uppercase" href="#">
								about
							</Link>
						</li>
						<li>
							<Link className="inline-block mr-3 text-white uppercase" href="#">
								Contact
							</Link>
						</li> */}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
