import axios from 'axios'

const axiosFetcher = axios.create({
    baseURL: "https://NEED_TO_BE_REPLACED.io",
    timeout: 1000,
    headers: { 'X-JWT-login': "NEEDS_TO_BE_SET" }
})

export default axiosFetcher