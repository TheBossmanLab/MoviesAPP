import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import get from "../../axios";
import config from "../../config.js";
import Spinner from "../Spinner";
import { Redirect } from "react-router";
import NotFoundError from "../NotFoundError";
import MovieInfo from "./MovieInfo";
import Footer from "../Footer";

import Header from "../Header";
const MovieInfoPage = () => {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const movieInfoURL = `/movie/${id}?api_key=${config.APIKEY}&language=en-US&append_to_response=videos,credits`;
	useEffect(() => {
		async function getData() {
			window.scrollTo(0, 0);
			setIsLoading(true);
			const resp = await get(movieInfoURL);
			setData(resp.data);
			setIsLoading(false);
		}
		getData();
	}, [movieInfoURL, id]);

	if (data.code === 404) {
		return <Redirect to="/404error" component={NotFoundError} />;
	} else {
		return (
			<>
				<div className="font-poppins bg-cover min-h-screen bg-blue-900 pb-12">
					<Header></Header>
					{isLoading ? (
						<div className="flex justify-center">
							<Spinner> </Spinner>
						</div>
					) : (
						<MovieInfo movie={data}></MovieInfo>
					)}
				</div>
				<Footer></Footer>
			</>
		);
	}
};

export default MovieInfoPage;
