import star from "./star.png";

function Singlemovie({ movieInfo }) {
	const basePosterUrl = "https://image.tmdb.org/t/p/w500";
	const { title, poster_path, vote_average } = movieInfo;
	// console.log(`title ${title}, path ${posterUrl}, rating${rating}`);
	console.log(movieInfo);
	return (
		<div className=" text-sm whitespace-pre-line text-left text-black moviecard shadow-sm bg-white rounded-xl m-4">
			<a href="www.google.com" className="movie">
				<figure className="">
					<img
						className="rounded-t-xl movie-img"
						src={
							poster_path
								? basePosterUrl + poster_path
								: "https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg"
						}
						alt="poster"
						width="350"
						height="450"
					/>
				</figure>{" "}
				<p className="pt-2 font-medium px-2 link text-black"> {title} </p>{" "}
			</a>{" "}
			<span className="pb-2 text-black font-semibold flex items-center justify-end pr-4">
				<p className="inline-block text-right text-sm px-3"> {vote_average} </p>{" "}
				<img
					className="inline-block"
					src={star}
					width="15"
					height="10"
					alt="stars"
				/>
			</span>{" "}
		</div>
	);
}

export default Singlemovie;
