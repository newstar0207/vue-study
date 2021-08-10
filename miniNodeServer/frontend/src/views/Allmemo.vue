<template>
    <div>
        <h2>모든사용자 메모</h2>
        <div class="mx-auto d-flex flex-wrap justify-center">
            <v-card v-for="memo in memos" width="230" height="230" @dblclick="onClickMemo(memo.memoid)" :key="memo.memoid" class="mx-2 my-2">
                <v-card-text>
                    <p class="text-h6 text--primary">
                        {{ memo.title }}
                    </p>
                    <br>
                    <p>작성자 : {{ memo.userid }}</p>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>
<script>
import memoApi from '../apis/memos'

export default {
    data(){
        return{
            memos : [],
        }
    },
    mounted() {
        memoApi.getAdminMemos()
        .then((response) => {
            this.memos = response.data;
        })
        .catch(err => {
            console.log(err);
        })
    }
}
</script>
<style>
    
</style>