import axios from 'axios'

const instance = axios.create({}); //.create() 메서드 사용시 사용자 정의 구성을 사용하는 axios 인스턴스를 생성할 수 있음.

// before handled by then or catch
instance.interceptors.request.use(
    // Request 실행 직전
    (config) => {
        const token = localStorage.getItem('accessToken')
        if(token) {
            config.headers.Authorization = token
        }else {
            console.log('No Token')
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    // http status 가 200 인 경우
    (response) => {
        return response;
    },
    // http status 가 200 이 아닌 경우
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;