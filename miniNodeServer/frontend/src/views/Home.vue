<template>
  <div>
    <router-link to='/add'>글 작성하기</router-link>
    <div class="mx-auto d-flex flex-wrap">
      <v-card v-for="memo in memos" width="230" height="230" :key="memo.memoid" class="mx-2 my-2">
        <v-card-text>
          <div>{{ memo.savedTime }}</div>
          <p class="text-h4 text--primary">
            {{ memo.title }}
          </p>
          <p>content</p>
          <div class="text--primary">
            {{memo.content}}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">
            update
          </v-btn>
          <v-btn text color="deep-purple accent-4">
            delete
          </v-btn>
        </v-card-actions>
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

    components: {
    },
  }
</script>
