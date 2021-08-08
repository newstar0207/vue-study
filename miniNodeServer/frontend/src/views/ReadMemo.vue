<template>
    <div>
        <div class="black-bg">
            <v-card class="mx-auto my-auto" max-width="400">
                <!-- <div v-if="false">
                    <v-img height="200px"></v-img>
                </div> -->
                <div class="mx-4 pt-5"> 
                    {{ this.memo.originalFileName }}
                </div>
                
                <!-- <v-text-field type="text" label="title" clearable v-model="title" class="mx-4 font-weight-light"></v-text-field> -->
                <v-text-field v-model="title" label="title" clearable class="mx-4 pt-5 d-flex flex-wrap font-weight-bold">
                    {{this.memo.title}} <v-spacer></v-spacer> 
                    <span class="font-weight-thin">{{ this.memoId}}</span>
                </v-text-field>

                <v-textarea v-model="content" label="content" clearable class="mx-4">
                    {{ this.memo.content}}
                </v-textarea>

                <v-file-input label="File Input" @change="selectFile" ref="file" counter outlined class="mx-4 font-weight-light"></v-file-input>
                
                <v-card-actions>
                    <v-btn color="orange lighten-2" text @click="memoDelete"> delete </v-btn>
                    <v-btn color="orange lighten-2" text @click="memoUpdate"> update </v-btn>
                    <v-btn color="orange lighten-2" text @click="cancel"> cancel </v-btn>

                    <v-spacer></v-spacer>
                    
                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                     <v-divider></v-divider>

                     <v-card-text class="font-weight-light">
                        savedTime:  {{ this.memo.savedTime}} <br>
                        fileUrl: {{ this.memo.fileUrl}} <br>
                        userID : {{ this.memo.userid}} <br>
                        memoID : {{ this.memoId}} <br>
                     </v-card-text>
                     </div>
                </v-expand-transition>
            </v-card>
        </div>
    </div>
</template>
<script>
import memoApi from '../apis/memos';

export default {
    name: 'ReadMemo',
    props: [ 'memoId' ],
    data(){
        return {
            memo: [],
            show : false,
            title: '',
            content : '',
            file: '',
        }
    },
    mounted() {
        memoApi.getMemo(this.memoId)
        .then((response) => {
            this.memo = response.data;
            this.title = this.memo.title;
            this.content = this.memo.content;
        })
        .catch(err => {
            console.log(err);
        }) 
    },
    methods: {
        selectFile(){
            this.file = this.$refs.file.files[0] // ref => JavaScript의 자식 구성 요소에 직접 액세스
        },
        memoUpdate(){
            const data = new FormData();

            data.append('title', this.title);
            data.append('content', this.content);
            data.append('file', this.file );


            memoApi.putMemo(this.memoId, data)
            .then()
            .catch(err => {
                console.log(err);
            })
        },
        memoDelete(){
            memoApi.deleteMemo(this.memoId)
            .then(response => {
                if(response.status == 200){
                    this.$router.push('/');
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        cancel(){
            this.$router.push('/');
        }
        // memeoDelete(){
        //     axios.delete('/memos/' + this.memo.memoid)
        //     .then(response => {
        //         if(response.status == 200){
        //             this.$router.push('/memos/' + this.memo.memoid);
        //         }else{
        //             console.log('ReadMemo 96번째줄 오류');
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        // },
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