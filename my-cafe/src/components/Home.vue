<template>
    <div>
        <h1>Welcome {{ userId }}</h1>    
        <input v-model="newId">  
        <button @click="saveUserId">Save</button>
        <button @click="updateReviews">Update</button>
        <h1>{{ reviewCount }}</h1>
        <ul>
            <li v-for="r in reviews" :key="r.id">
                <p>{{r.body}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    data() {
        return{
            newId: '',
        }
    },
    computed:{ // state, getter
        ...mapState('user',{
            userId:state => state.userId
        }),
        ...mapState('reviews', {
            reviews:state => state.reviews
        }),
        ...mapGetters('reviews', ['reviewCount'])
    },
    methods:{ // mutations, actions
        ...mapMutations('user',['updateUserId']),
        ...mapActions('reviews', ['getReviews']),
        saveUserId() {
            this.updateUserId(this.newId)
        },
        updateReviews(){
            this.getReviews()
        }
    }
}
</script>