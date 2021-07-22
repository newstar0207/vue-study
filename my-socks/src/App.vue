<template>
  <div id="app">
    <ProductPage></ProductPage>
    <Reply></Reply>
    <Test></Test>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import ProductPage from './components/ProductPage.vue';
import Reply from './components/Reply.vue';
import Test from './components/Test.vue';


export default {
  name: 'App',
  components: {
    ProductPage,
    Reply,
    Test,
  }
}
</script>

<style>
@import './assets/css/styles.css';
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
