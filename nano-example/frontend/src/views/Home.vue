<template>
  <div class="d-flex">
    <v-card class="mx-auto pa-4" width="260" height="330" v-for="brief in briefs" :key="brief.bookId">
      <img v-bind:src="brief.cover" height="200px" width="230"/>
      <v-card-title><a v-bind:href='"/books/" + brief.bookId'>{{ brief.title }}</a></v-card-title>
      <v-card-subtitle>
        {{ brief.author }}
      </v-card-subtitle>
    </v-card>
    
  </div>
</template>  

<script>
// '/' 로 책 리스트를 받아와 책 리스트 화면을 구성함
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
