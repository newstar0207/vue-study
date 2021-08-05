<template>
    <div>
        <h1>addmemo</h1>
        <form @submit.prevent="addMemo(title, content)">
            <input type="text" v-model="title" placeholder="Title">
            <input type="text" v-model="content" placeholder="Content">
            <input type="file" placeholder="File">
            <button type="submit"></button>
        </form>  <!--@submit.prevent="" -> form 태그의 기본 동작을 막음 -->      
    </div>
</template>
<script>
export default {
    data(){
        return {
            title: '',
            content: '',
            file: '',
            originalFileName: '',
        }
    },
    methods: {
        addMemo(title, content) {
            console.log(title,content)
        }
    },
}
</script>
<style>
    
</style>