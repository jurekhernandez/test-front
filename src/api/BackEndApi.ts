import axios from "axios";

const backEndApi = axios.create({
    baseURL: "http://127.0.0.1:8080/api"
    //baseURL: "http://127.0.0.1:8000/api"
});

export default backEndApi;
