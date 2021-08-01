import axios from "axios";

const get = async (API) => {
	const baseURL = "https://api.themoviedb.org/3";
	const data = await axios
		.get(baseURL + API)
		.then((result) => {
			return result;
		})
		.catch((err) => {
			if (err.toJSON().message === "Network Error") {
				return {
					data: {
						succes: false,
						error: "No internet",
					},
				};
			}
			return {
				data: {
					succes: false,
					error: err,
					code: 404,
				},
			};
		});
	return data;
};

export default get;
