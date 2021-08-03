<template>
    <div>
        <h1>Welcome {{ userId }}</h1>    
        <v-text-field v-model="newId"></v-text-field>  
        <v-btn depressed @click="saveUserId">Save</v-btn>
        <v-btn depressed @click="updateReviews">Update</v-btn>
        <h1>{{ reviewCount }}</h1>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="r in reviews" :key="r.id">
                        <td>{{r.body}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
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