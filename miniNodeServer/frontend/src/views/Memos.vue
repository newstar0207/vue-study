<template>
    <div>
        <div>{{ this.memos }}</div>
        <div>-----------------------------</div>
        <h1>addmemo</h1>
        <form @submit.prevent="addMemo(title, content)">
            <input type="text" v-model="title" placeholder="Title">
            <input type="text" v-model="content" placeholder="Content">
            <!-- <input type="file" placeholder="File"> -->
            <button type="submit"></button>
        </form>  <!--@submit.prevent="" -> form 태그의 기본 동작을 막음 -->      
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            memos : [],
            message : '',
            title: '',
            content: '',
        }
    },
    mounted() {
        axios.get('/api/memos', {
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        })
        .then(response => {
            console.log(response);
            this.memos = response.data;
        })
        .catch(err => {
            console.log(err);
        }) 
    },
    methods: {
        addMemo(title, content){
            axios.post('/api/memos', {
                headers: { Authorization: localStorage.getItem('accessToken') },
                
            })
        }
    },
}
</script>
<style>
    
</style>