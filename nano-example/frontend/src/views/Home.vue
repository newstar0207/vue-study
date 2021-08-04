<template>
  <div class="d-flex flex-wrap justify-center">
    <v-card class="mx-2 my-2"  width="270" height="300" v-for="brief in briefs" :key="brief.bookId">
      <div class="d-flex mx-16">
        <v-img :src="brief.cover" height="200" width="130" ></v-img>
      </div>
      
      <v-card-title>
        <router-link  v-bind:to='"/" + brief.bookId'>{{ brief.title }}</router-link>
      </v-card-title>
      <v-card-subtitle>
        {{ brief.author }}
      </v-card-subtitle>
    </v-card>
    
  </div>  
</template>  
 
<script>
// '/' 로 책 리스트를 받아와 책 리스트 화면 을 구성함
  // import HelloWorld from '../components/HelloWorld'
  import axios from 'axios';

  export default {
    name: 'Home',
    data(){
      return{
        briefs : [],
      }
    },
    mounted(){
      axios.get('/api/books')
      .then((response) => {
        this.briefs = response.data;
      });
    }
  }
</script>

<style>
  /* .align {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  } */
  
  
</style>
