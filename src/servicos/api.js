import axios from "axios";

const api = axios.create({
    // endereço da FakAPI
    // baseURL: "http://192.168.1.105:3000/"
    // endereço da API do GitHub
    baseURL: "https://api.github.com/"
})

export default api;