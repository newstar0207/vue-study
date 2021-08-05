import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import user from './modules/user'
// import admin from './modules/admin'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        // user,
        // admin,
    },
    state: { // data
        accessToken: null,
    },
    getters: { // computed
        isAuth(state){
            if(state.accessToken == null) return false;
            return true;
        }
    },
    mutations: { // 인자를 받아 Vuex에 넘겨줄 수 있음, 동기적 로직을 정의, 호출시 store.commit 호출해야함
        signin(state, payload){
            state.accessToken = payload.accessToken;
            localStorage.setItem('accessToken', state.accessToken);
        },
        signout(state){
            state.accessToken = null;
            localStorage.removeItem('accessToken');
            location.reload(); // 재호출
        },
        getAccessToken(state){
            state.accessToken = localStorage.getItem('accessToken');
        }
    },
    actions: { // 비동기적 로직을 정의, 비동기 작업 수행시 dispatch 호출
        signin({commit}, payload){
            const data= { userid: payload.userid, password:payload.password}
            return axios.post('/api/auth/login', data)
            .then(response => {
                if(response.status == 200){ // 로그인 성공
                    commit('signin', { accessToken: response.data.token})
                }
            })
            .catch(() => { // 에러 발생시 로그아웃처리
                commit('signout')
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
                console.log('signup errorsdf')
            })
        },
        getMemos(context){
            return axios.get('/api/memos')
            .then(response => {
                if(response.status == 200){
                    return;
                }
            }).catch(() => {
                console.log('getmemos error   ');
            })
        }
    }
})