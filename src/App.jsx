import NotFoundError from "./components/NotFoundError";
import BasePage from "./components/BasePage";
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
					<BasePage />
				</Route>
				<Route onSearch={updateQueryAPI} exact path="/p=:page">
					<div className="font-poppins bg-cover min-h-screen bg-blue-900  mx-auto">
						<BasePage />
					</div>
				</Route>{" "}
				<Route exact path="/search/s=:input/p=:page">
					<div className="font-poppins bg-cover min-h-screen bg-blue-900  mx-auto">
						<BasePage searchApi={queryAPI} />
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
