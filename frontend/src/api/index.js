import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.3.19.4:3000'
})

export default api