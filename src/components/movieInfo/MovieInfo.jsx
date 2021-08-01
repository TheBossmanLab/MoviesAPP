import { useState, useEffect } from "react";
import Cast from "./Cast";
const imgBaseURL = "https://image.tmdb.org/t/p/w500";
const MovieInfo = ({ movie }) => {
	const [cast, setCast] = useState([]);
	const [director, setDirector] = useState([]);
	const trailer = movie.videos.results[movie.videos.results.length - 1];
	useEffect(() => {
		setDirector(movie.credits.crew.find((crew) => crew.job === "Director"));
		setCast(movie.credits.cast.slice(0, 6));
	}, [movie]);

	return (
		<div className="font-poppins w-full max-w-sm self-center mt-8 lg:max-w-xl mx-auto bg-white md:max-w-md rounded">
			<img
				className="bg-coolGray-400 w-full h-56 md:h-64 lg:h-80"
				src={imgBaseURL + movie.backdrop_path}
				alt={`${movie.title}`}
			/>
			<div className="p-3">
				<h1 className="text-xl font-bold">{movie.title}</h1>
				<h3 className="pt-3 font-semibold">Synopse:</h3>
				<p className="pt-2 font-normal text-sm md:text-base lg:text-base text-justify">
					{movie.overview}
				</p>
				<div className="py-3">
					<span className="font-semibold">Release date : </span>
					<span>{movie.release_date}</span>
				</div>
				<div>
					<h4>
						<span className="font-semibold"> Directed by: </span>
						<span>{director.name}</span>
					</h4>
				</div>
				<div className="py-3">
					<h4 className="font-bold text-lg">Movie Cast: </h4>
					<Cast cast={cast} imgBaseURL={imgBaseURL}></Cast>
				</div>
			</div>
			<div>
				<h4 className="pb-3 px-3 font-bold text-lg">Trailer: </h4>

				<div className=" lg:min-w-1/2 m-auto rounded-md h-72 md:h-96">
					<iframe
						// width="560"
						// height="315"
						className="w-full h-full p-0 h-72 md:h-96 rounded-md p-1"
						src={"https://www.youtube.com/embed/" + trailer.key}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
					{/* <iframe
						className="w-full h-full p-0 h-72 md:h-96 rounded-md p-1"
						//  md:h-80"
						// width="500"
						// height="250"
						src={"http://www.youtube.com/embed/" + trailer.key}
						title="YouTube video player"
						frameborder="0"
						// state="play"
						// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen="allowfullscreen"></iframe> */}
					{/* <div
							class="overlay trigger"
							src="https://www.youtube.com/embed/VF1Yz05iQM0"
							data-target="#videoModal"
							data-toggle="modal"
							onClick={playVideo}></div> */}
				</div>
				{/* </div> */}
				{/* </div> */}
			</div>
		</div>
		// </div>
	);
};

export default MovieInfo;
