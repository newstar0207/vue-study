import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import api from '../apis/sendRequest'
import user from './modules/user'
// import admin from './modules/admin'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        // admin,
    },
    // state: { // data
    //     accessToken: null,
    //     userid: '',
    // },
    // getters: { // computed
    //     isAuth(state){
    //         if(state.accessToken == null) return false;
    //         return true;
    //     }
    // },
    // mutations: { // 인자를 받아 Vuex에 넘겨줄 수 있음, 동기적 로직을 정의, 호출시 store.commit 호출해야함
    //     signin(state, payload){
    //         state.accessToken = payload.accessToken;
    //         localStorage.setItem('accessToken', state.accessToken);
    //         state.userid = payload.userid;
    //     },
    //     signout(state){
    //         state.accessToken = null;   
    //         localStorage.removeItem('accessToken');
    //         location.reload(); // 재호출
    //     },
    //     getAccessToken(state){
    //         state.accessToken = localStorage.getItem('accessToken');
    //         // return state.accessToken;
    //     },
    //     loginFailed(state){
    //         state.accessToken= null;
    //         localStorage.removeItem('accessToken');
    //     },
    // },
    // actions: { // 비동기적 로직을 정의, 비동기 작업 수행시 dispatch 호출
    //     signin({commit}, payload){
    //         const data= { userid: payload.userid, password:payload.password}
    //         return axios.post('/api/auth/login', data)
    //         .then(response => {
    //             if(response.status == 200){ // 로그인 성공
    //                 commit('signin', { accessToken: response.data.token, userid: response.data.userid})
    //             }
    //         })
    //         .catch((error) => { // 에러 발생시 로그아웃처리
    //             commit('loginFailed')
    //             return Promise.reject(error)
    //         })
    //     },
    //     signup(context,payload){
    //         console.log(payload);
    //         return axios.post('/api/users/', payload)
    //         .then(response => {
    //             if(response.status == 200){
    //                 return;
    //             }
    //         })
    //         .catch(() => {
    //             console.log('signup error')
    //         })
    //     },
    //     getUserInfo({state}){
    //         console.log(state.userid);
    //         return api.get(`/api/users/${state.userid}`)
    //         .then(response => {
    //             if(response.status == 200) {
    //                 return response.data;
    //             }
    //         }).
    //         catch(() => {
    //             console.log('getUserInfo error');
    //         })
    //     }
        
    // }
})