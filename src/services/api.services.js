import axios from "axios";

const http = axios.create({
    baseURL:"http://localhost:3000/api/v1"
});


export function createUser(data) {
    console.log(data)
    return http.post("/user", data)
}