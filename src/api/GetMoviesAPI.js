import axios from "axios"

export default class getMoviesAPI{

    getMovies = () => {
        return axios.get("http://localhost:8080/movie/getMovies");
    }
}