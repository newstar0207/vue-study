export default{
    namespaced: true,
    state: () => ({
        userId: 'user'
    }),
    mutations: {
        updateUserId(state, newId){ // mutation 첫번째 파라미터는 state 고정
            state.userId = newId;
        },
    }
}