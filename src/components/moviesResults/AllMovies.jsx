import SingleMovie from "./SingleMovie";
function AllMovies({ data }) {
	return (
		<div className="px-1 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 place-items-center">
			{data.results.map((movie) => {
				return <SingleMovie movieInfo={movie} key={movie.id} />;
			})}
		</div>
	);
}

export default AllMovies;
