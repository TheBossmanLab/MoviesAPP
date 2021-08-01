import NotFoundError from "./components/NotFoundError";
import BasePage from "./components/./moviesResults/BasePage";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieInfoPage from "./components/movieInfo/MovieInfoPage";

function App() {
	const [queryAPI, setQueryAPI] = useState("");

	const updateQueryAPI = (searchInput) => {
		setQueryAPI(searchInput);
	};

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route onSearch={updateQueryAPI} exact path="/">
					<BasePage />
				</Route>
				<Route onSearch={updateQueryAPI} exact path="/p=:page">
					<BasePage />
				</Route>{" "}
				<Route exact path="/search/s=:input/p=:page">
					<BasePage searchApi={queryAPI} />
				</Route>
				<Route exact path="/movieinfo/id=:id">
					<MovieInfoPage></MovieInfoPage>
				</Route>
				<Route>
					<NotFoundError></NotFoundError>
				</Route>
			</Switch>{" "}
		</BrowserRouter>
	);
}

export default App;
