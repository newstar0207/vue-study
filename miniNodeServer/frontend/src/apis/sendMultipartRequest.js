import axios from 'axios'

const instance = axios.create({});

instance.interceptors.request.use(
    // request 실행 직전해 실행됨
    (config) => {
        const token = localStorage.getItem('accessToken')
        if(token) {
            config.headers.Authorization = token
        }else {
            console.log('no token')
        }
        config.headers['Content-Type'] = 'multipart/form-data';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default instance;