import axios from 'axios'

const axiosFetcher = axios.create({
    baseURL: "https://kanri-backend.onrender.com",
    timeout: 1000,
    headers: { 'X-JWT-login': "3073e40290d0cbe6e3c82286f133e1bad00af5693d592f4e6ffd85f11748fa34" }
})

export default axiosFetcher