import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import get from "../axios";
import config from "../config.js";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import AllMovies from "./AllMovies";

function Page({ title }) {
	const { input, page = 1 } = useParams();
	const trendingURL = `/trending/movie/week?api_key=${config.APIKEY}&page=${page}`;
	const searchURL = `/search/movie?api_key=${config.APIKEY}&language=en-US&query=${input}&page=${page}&include_adult=true`;
	const [movies, setMovies] = useState([]);
	const [pageUrl, setPageUrl] = useState("/p=");
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		async function fetchData() {
			window.scrollTo(0, 0);
			if (!input) {
				const resp = await get(trendingURL);
				setMovies(resp.data);
			} else {
				const resp = await get(searchURL);
				setMovies(resp.data);
				setPageUrl(`/search/s=${input}/p=`);
			}
			setIsLoading(false);
			console.log("made request");
		}
		fetchData();
	}, [input, page, searchURL, trendingURL]);

	return (
		<>
			<h1 className="text-3xl md:mx-5 lg:mx-8 font-bold px-7 text-white text-startmd:text-2xl 2xl:mx-32 sm:text-2xl mt-8 mb-3">
				{" "}
				{input ? title + input : title}{" "}
			</h1>{" "}
			<div className="flex justify-center px-7 place-items-center">
				{" "}
				{isLoading ? (
					<Spinner> </Spinner>
				) : (
					<AllMovies data={movies}> </AllMovies>
				)}{" "}
			</div>{" "}
			<Pagination pagesNr={movies.total_pages} pageUrl={pageUrl}>
				{" "}
			</Pagination>{" "}
		</>
	);
}

export default Page;
