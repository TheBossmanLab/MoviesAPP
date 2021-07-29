import Page from "./components/Page";
import NotFoundError from "./components/NotFoundError";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	const [queryAPI, setQueryAPI] = useState("");

	const updateQueryAPI = (searchInput) => {
		setQueryAPI(searchInput);
	};

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route onSearch={updateQueryAPI} exact path="/">
					<div className="font-poppins bg-cover min-h-screen bg-blue-900  mx-auto">
						<Page title="Trending this week:" />
					</div>
				</Route>
				<Route onSearch={updateQueryAPI} exact path="/p=:page">
					<div className="font-poppins bg-cover min-h-screen bg-blue-900  mx-auto">
						<Page title="Trending this week:" />
					</div>
				</Route>{" "}
				<Route exact path="/search/s=:input/p=:page">
					<div className="font-poppins bg-cover min-h-screen bg-blue-900  mx-auto">
						<Page searchApi={queryAPI} title="Results For: " />
					</div>
				</Route>
				<Route>
					<NotFoundError></NotFoundError>
				</Route>
			</Switch>{" "}
		</BrowserRouter>
	);
}

export default App;
