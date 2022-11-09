import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "../lib/axios";

const Car = () => {
	const [data, setData] = useState({
		loading: false,
		car: {},
		isError: false,
	});

	const router = useRouter();
	useEffect(() => {
		const { carId } = router.query;
		if (carId) {
			const fetchData = async () => {
				try {
					setData({ ...data, loading: true });
					const res = await axios.get(`/cars/${carId}`);
					setData({ ...data, loading: false, car: res.data.car });
				} catch (error) {
					setData({ car: {}, isError: true, loading: false });
				}
			};
			fetchData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router]);
	const { loading, car, isError } = data;
	const { name, desc, image, price } = car;
	return (
		<>
			<div className="grid">
				{loading && <h1>Loading...</h1>}
				{isError && <h1>Something went wrong!!</h1>}
				{!isError && !loading && car.image ? (
					<div className="pb-10">
						<div className="relative">
							<Image
								className="w-full h-full object-cover"
								src={image}
								width={400}
								height={400}
								priority={true}
								alt=""
							/>
						</div>
						<div className="pt-4 px-8">
							<h2 className="text-4xl uppercase">{name}</h2>
							<p className="mt-2  mb-2 text-xl">{desc}</p>
							<p>${price}</p>
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};

export default Car;
