import axios from 'axios'

export default class LogInAPI{
    
    logIn({userName, password}) {
        return axios.post("http://localhost:8080/user/logIn", {userName, password});
    }
}