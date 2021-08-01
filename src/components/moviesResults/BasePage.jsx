import ResultPage from "./ResultsPage";
function BasePage({ searchApi }) {
	return (
		<div className="font-poppins bg-cover min-h-screen bg-blue-900 mx-auto">
			{!searchApi ? (
				<ResultPage title="Trending this week:" />
			) : (
				<ResultPage searchApi={searchApi} title="Results For: " />
			)}
		</div>
	);
}

export default BasePage;
