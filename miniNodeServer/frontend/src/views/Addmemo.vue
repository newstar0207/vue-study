<template>
    <div>
        <input type="text" v-model="title" placeholder="title"><br>
        <input type="text" v-model="content" placeholder="content"><br>
        <input type="file" @change="selectFile" ref="file"><br> <!-- @change 는 값이 변하는걸 감지한 이후에 실행됨-->
        <button @click="addMemo">Save</button>
    </div>
</template>
<script>
import memoApi from '../apis/memos'

export default {
    data(){
        return {
            title: '',
            content: '',
            file: '',
        }
    },
    methods: {
        selectFile(){
            this.file = this.$refs.file.files[0]
        },
        addMemo() {
            // axios.post 는 그냥 사용하면 form 데이터 형식을 사용할 수 없어 new FormData 를 이용하여 form 형식으로 데이터를 보냄
            const data = new FormData();
            data.append('title', this.title);
            data.append('content', this.content);
            data.append('file', this.file);

            memoApi.addMemo(data)
            .then(response => {
                console.log(response.status)
                this.$router.push('/')
            })
            .catch(() => {
                this.$router.push('/')
            }) 
        }
        
    },
}
</script>
<style>
    
</style>