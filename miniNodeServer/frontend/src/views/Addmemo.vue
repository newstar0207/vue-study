<template>
    <div class="black-bg">
        <v-card class="mx-auto my-auto" max-width="400" max-height="500">     
            <br>
            <div class="ml-4 font-weight-bold">memo...</div>
            <v-text-field type="text" label="title" clearable v-model="title" class="mx-4 font-weight-light"></v-text-field>
            <v-textarea type="text" v-model="content" clearable label="content" class="mx-4 font-weight-light"></v-textarea>
            <!-- <v-file-input label="File Input" @change="selectFile" ref="file" counter outlined class="mx-4 font-weight-light"></v-file-input> -->
            <input type="file" @change="selectFile" ref="file" class="mx-4"><br>
            <!--  @change 는 값이 변하는걸 감지한 이후에 실행됨 -->
            <v-card-actions>
                <v-btn color="orange lighten-2" text @click="addMemo"> Add Memo </v-btn>    
                <v-btn color="orange lighten-2" text @click="cancelMemo"> cancel </v-btn>    
            </v-card-actions>
        </v-card>
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
            this.file = this.$refs.file.files[0] // ref => JavaScript의 자식 구성 요소에 직접 액세스
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
        },
        cancelMemo() {
            this.$router.push('/');
        }
        
    },
}
</script>
<style>
     div {
        box-sizing: border-box;
    }
    .black-bg{
        width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.05);
        position: fixed; padding: 20px;
    }
    .white-bg {
        width: 100%; background: white;
    }
</style>