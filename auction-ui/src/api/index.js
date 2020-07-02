import axios from 'axios';

let credentials = {}

const HTTP = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    auth:credentials
})

HTTP.interceptors.request.use(config => {
    config.auth = credentials
    return config
})

export const setCredentials = c => credentials = c
export { HTTP as default }