import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Pagination({ pagesNr, pageUrl }) {
	const { page = 1 } = useParams();

	const backTop = () => {
		console.log(page);
		window.scrollTo(0, 0);
	};
	return (
		<div className="btn-group justify-center py-5 pb-14">
			<Link
				disabled={Number(page) <= 1 ? true : false}
				to={pageUrl + (Number(page) - 1).toString()}
				onClick={backTop}
				className="btn hover:bg-coolGray-400 text-black btn-outline btn-wide">
				Previous Page{" "}
			</Link>{" "}
			<Link
				disabled={Number(page) >= pagesNr || pagesNr === 0}
				to={pageUrl + (Number(page) + 1).toString()}
				onClick={backTop}
				className="btn hover:bg-coolGray-400 text-black btn-outline btn-wide">
				Next Page{" "}
			</Link>{" "}
		</div>
	);
}

export default Pagination;
