import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: { // data
        userId: 'saebeoul',
        reviews: [],
    },
    mutations: { // state 를 동기적으로 변경하는 동작 ( commit 이용) 
        updateUserId(state, newId){ // mutation 첫번째 파라미터는 state 고정
            state.userId = newId;
        },
        updateReviews(state, reviews){
            state.reviews = reviews;
        },
    },
    actions: { // state를 비동기적 
        getReviews({commit}){
            axios.get('/api/comments')
            .then((response) => {
                commit('updateReviews', response.data )
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    getters: { // computed 랑 비슷
        reviewCount( state ){
            return state.reviews.length;
        }
    },
});