import Page from "./Page";
function BasePage({ searchApi }) {
	return (
		<div className="font-poppins bg-cover min-h-screen bg-blue-900  mx-auto">
			{!searchApi ? (
				<Page title="Trending this week:" />
			) : (
				<div className="font-poppins bg-cover min-h-screen bg-blue-900  mx-auto">
					<Page searchApi={searchApi} title="Results For: " />
				</div>
			)}
		</div>
	);
}

export default BasePage;
