import { useState, useEffect } from "react";
import Cast from "./Cast";
import playbtn from "../img/playbtn.png";
import { useRef } from "react";
import { current } from "daisyui/colors";
const imgBaseURL = "https://image.tmdb.org/t/p/w500";
const MovieInfo = ({ movie }) => {
	const [cast, setCast] = useState([]);
	const [director, setDirector] = useState([]);
	const videoPlayer = useRef(null);
	const trailer = movie.videos.results[movie.videos.results.length - 1];
	useEffect(() => {
		setDirector(movie.credits.crew.find((crew) => crew.job === "Director"));
		setCast(movie.credits.cast.slice(0, 6));
	}, [movie]);
	const stopVideo = () => {
		videoPlayer.current.src = "";
		videoPlayer.current.src = "http://www.youtube.com/embed/" + trailer.key;
	};

	return (
		<div className="font-poppins w-full max-w-sm self-center mt-8 lg:max-w-xl mx-auto bg-white md:max-w-md rounded">
			<img
				className="bg-coolGray-400 w-full h-56 md:h-64 lg:h-80"
				src={imgBaseURL + movie.backdrop_path}
				alt={`Image of ${movie.title} not available`}
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
				<div className="p-1.5 rounded video relative">
					<img
						className="w-full rounded-md h-62 md:h-80 lg:h-96 max-w-xl m-auto cursor-pointer"
						src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
						alt=""
						srcset=""
					/>
					<label
						for="my-modal-2"
						class="modal-button w-24 h-24 rounded-full focus:outline-none absolute m-auto place-self-center inset-y-0 inset-x-0 cursor-pointer">
						<img className="w-full" src={playbtn} alt="" srcset="" />
					</label>
				</div>
				<input type="checkbox" id="my-modal-2" class="modal-toggle" />
				<div class="modal ">
					<div class="m-auto p-0 bg-transparent min-w-3/4 lg:min-w-1/2 max-w-sm m-auto rounded-md h-72 md:h-96 p-0 text-right rounded-md">
						<label
							for="my-modal-2"
							class="z-10 hover:bg-transparent relative btn bg-transparent border-0 px-2 p-0 h-px"
							onClick={stopVideo}>
							X
						</label>
						<iframe
							className="w-full h-full p-0 video rounded-md"
							ref={videoPlayer}
							//  md:h-80"
							// width="500"
							// height="250"
							src={"http://www.youtube.com/embed/" + trailer.key}
							title="YouTube video player"
							frameborder="0"
							// state="play"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen="allowfullscreen"
							mozallowfullscreen="mozallowfullscreen"
							msallowfullscreen="msallowfullscreen"
							oallowfullscreen="oallowfullscreen"
							webkitallowfullscreen="webkitallowfullscreen"></iframe>
						{/* <div
							class="overlay trigger"
							src="https://www.youtube.com/embed/VF1Yz05iQM0"
							data-target="#videoModal"
							data-toggle="modal"
							onClick={playVideo}></div> */}
					</div>
				</div>
			</div>
		</div>
		// </div>
	);
};

export default MovieInfo;
