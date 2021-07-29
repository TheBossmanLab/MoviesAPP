import axios from "axios";

const get = async(API) => {
    const baseURL = "https://api.themoviedb.org/3";
    const data = await axios.get(baseURL + API);
    return data;
};

export default get;