const imgBaseURL = "https://image.tmdb.org/t/p/w300";
const Cast = ({ cast }) => {
	return (
		<div className="pt-2 md:grid lg:grid-cols-3 gap-3 md:grid-cols-2">
			{cast.map((actor) => {
				return (
					<div className="w-full flex md:flex-col rounded-md my-3 border-2  lg:w-40">
						<div className="w-20 md:w-full">
							<img
								className="rounded-md w-full"
								src={imgBaseURL + actor.profile_path}
							/>
						</div>
						<div className="px-8 py-4 md:px-3.5">
							<h3 className="font-semibold text-base">{actor.name}</h3>
							<h3 className="font-normal text-sm py-1.5">{actor.character}</h3>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cast;
