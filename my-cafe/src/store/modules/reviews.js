import axios from 'axios'

export default{
    namespaced: true,
    state: () => ({
        reviews: []
    }),
    mutations: {
        updateReviews(state, reviews){
            state.reviews = reviews;
        },
    },
    getters: { // computed 랑 비슷
        reviewCount( state /* rootState -> 부모의 state 를 사용하고 싶을 경우*/){
            return state.reviews.length;
        }
    },
    actions: {
        getReviews({commit}){ // argument destructuring
            axios.get('/api/comments')
            .then((response) => {
                commit('updateReviews', response.data )
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}