import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
	const [searchInput, setSearchInput] = useState("");
	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};
	const handleClick = () => {
		setSearchInput("");
	};
	return (
		<div className="navbar mb-2 pb-5 text-neutral-content border-b-2">
			<div className="flex-1 px-2 mx-2 justify-between">
				<Link className="text-lg font-bold" to="/">
					MoviesAPP{" "}
				</Link>{" "}
			</div>{" "}
			<div className="form-control">
				<div className="flex space-x-2">
					<input
						value={searchInput}
						type="text"
						placeholder="Search"
						className="w-full input input-primary input-bordered text-black placeholder-black focus:ring-blue-600 focus:ring-2"
						onChange={handleChange}
					/>{" "}
					{/* <Link></Link> */}{" "}
					<Link
						to={`/search/s=${searchInput}/p=1`}
						onClick={handleClick}
						className="btn btn-primary">
						go{" "}
					</Link>{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
}

export default Header;
