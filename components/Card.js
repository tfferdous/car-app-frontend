import Image from "next/image";

const Card = ({ car }) => {
	const { name, desc, image, price, category } = car || {};
	return (
		<figure className="rounded-md overflow-hidden border border-gray-300">
			<Image
				className="w-full h-72  object-cover"
				src={image}
				width={500}
				height={400}
				alt="Image of the car"
			/>
			<figcaption className="relative px-3 pb-3 mt-4">
				<h3 className="font-bold p">{name}</h3>
				<h3>{desc}</h3>
				<p className="mt-3">${price}</p>

				<ul className="absolute bottom-3  text-right right-3">
					{category?.map((cate, index) => (
						<li
							className="uppercase ml-1 inline-block border border-gray-400 px-3  py-1 text-sm rounded-2xl text-center"
							key={index}>
							{cate}
						</li>
					))}
				</ul>
			</figcaption>
		</figure>
	);
};

export default Card;
