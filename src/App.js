import Header from "./components/Header";
import Page from "./components/Page";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	const [queryAPI, setQueryAPI] = useState("");

	const updateQueryAPI = (searchInput) => {
		setQueryAPI(searchInput);
	};

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className="font-poppins bg-cover min-h-screen bg-blue-900  mx-auto">
				<Header
				// input={searchInput}
				// // onClick={handleClick}
				// onChange={handleChange}
				/>
				<Switch>
					<Route onSearch={updateQueryAPI} exact path="/">
						<Page title="Treadings this week:" />
					</Route>
					<Route onSearch={updateQueryAPI} exact path="/p=:page">
						<Page title="Treadings this week:" />
					</Route>
					<Route exact path="/search/s=:input/p=:page">
						<Page searchApi={queryAPI} title="Results found: " />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
