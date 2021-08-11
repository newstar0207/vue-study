import axios from 'axios'
import api from '../../apis/sendRequest'

export default{
    namespaced: true,
    state: () => ({
        accessToken: null,
        userid: '',
    }),
    getters: {
        isAuth(state){
            if(state.accessToken == null) return false;
            return true;
        }
    },
    mutations: {
        signin(state, payload){
            state.accessToken = payload.accessToken;
            localStorage.setItem('accessToken', state.accessToken);
            state.userid = payload.userid;
        },
        signout(state){
            state.accessToken = null;   
            localStorage.removeItem('accessToken');
            location.reload(); // 재호출
        },
        getAccessToken(state){
            state.accessToken = localStorage.getItem('accessToken');
            // return state.accessToken;
        },
        loginFailed(state){
            state.accessToken= null;
            localStorage.removeItem('accessToken');
        },
    },
    actions:{
        signin({commit}, payload){
            const data= { userid: payload.userid, password:payload.password}
            return axios.post('/api/auth/login', data)
            .then(response => {
                if(response.status == 200){ // 로그인 성공
                    commit('signin', { accessToken: response.data.token, userid: response.data.userid})
                }
            })
            .catch((error) => { // 에러 발생시 로그아웃처리
                commit('loginFailed')
                return Promise.reject(error)
            })
        },
        signup(context,payload){
            console.log(payload);
            return axios.post('/api/users/', payload)
            .then(response => {
                if(response.status == 200){
                    return;
                }
            })
            .catch(() => {
                console.log('signup error')
            })
        },
        getUserInfo({state}){
            console.log(state.userid);
            return api.get(`/api/users/${state.userid}`)
            .then(response => {
                if(response.status == 200) {
                    return response.data;
                }
            }).
            catch(() => {
                console.log('getUserInfo error');
            })
        }
    }
}