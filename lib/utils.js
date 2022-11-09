export const debounce = (fn, delay = 300) => {
	let timer;
	return (...agrs) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, agrs);
		}, delay);
	};
};
