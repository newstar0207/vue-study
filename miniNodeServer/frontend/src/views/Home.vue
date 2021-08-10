<template>
  <div>
    <!-- <router-link to='/add'>글 작성하기</router-link> --> 
    <div class="mx-auto d-flex flex-wrap justify-center">
      <v-card v-for="memo in memos" width="230" height="230" @dblclick="onClickMemo(memo.memoid)" :key="memo.memoid" class="mx-2 my-2">
        <v-card-text>
          <p class="text-h6 text--primary">
            {{ memo.title }}
          </p>
        </v-card-text>
     </v-card>
    </div>
    
  </div> 
</template>
<script>
import memoApi from '../apis/memos'

  export default {
    name: 'Home',
    data() {
      return {
        memos: [],
      }
    },
    mounted(){
      memoApi.getMemos()
      .then(res => {
        this.memos = res.data
      })
      .catch(() => {
        
      })
    },
    methods: {
      onClickMemo(memoid){
        console.log(memoid);
       this.$router.push({name : 'Read', params : { memoId:  memoid}});
      }
    },
  }
</script>

<style>
  
</style>
