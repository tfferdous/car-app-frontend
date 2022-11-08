const Search = () => {
	return (
		<div className="relative w-full max-w-lg px-5 py-10 bg-black-800 rounded-md">
			<form>
				<div className="relative">
					<label htmlFor="searchInput"></label>
					<input
						className="w-full h-10 bg-transparent border rounded-3xl border-slate-200 p-3 text-white placeholder:text-white outline-none"
						type="text"
						id="searchInput"
						placeholder="Search..."
					/>
				</div>
			</form>
		</div>
	);
};

export default Search;
