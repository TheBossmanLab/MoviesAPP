import spinner from "./spinner.gif";
const Spinner = () => {
	return (
		<div className="self-center m-auto">
			<img className="spinner" src={spinner} alt="loading..." />
		</div>
	);
};

export default Spinner;
