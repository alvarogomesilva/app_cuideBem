import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.3.18.71:3000'
})

export const URL =  `http://10.3.18.71:3000`

export default api