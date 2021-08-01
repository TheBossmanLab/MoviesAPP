import Actor from "./Actor";
const Cast = ({ cast }) => {
	console.log(cast);
	return (
		<div className="pt-2 md:grid lg:grid-cols-3 gap-3 md:grid-cols-2">
			{cast.map((actor) => {
				return <Actor actor={actor} key={actor.id}></Actor>;
			})}
		</div>
	);
};

export default Cast;
