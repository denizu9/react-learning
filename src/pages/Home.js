import { useContext } from "react";
import {LogInContext} from "../context/LogInContext";
import Dashboard from "../components/Home/Dashboard";
import MovieList from "../components/Home/MovieList";

const Home = (props) => {

    const {isLoggedIn, setIsLoggedIn} = useContext(LogInContext);

    return(
        
        <div>
            <Dashboard/>
            <MovieList/>
        </div>
    )
}

export default Home