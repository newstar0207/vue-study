<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>My Todo App!</h1>
    <!-- <TodoList></TodoList> -->
    <Gugudan></Gugudan>
  </div>
</template>

<script>
import Gugudan from './components/Gugudan.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from './components/TodoList/TodoList/TodoList.vue'
// import Test from './components/TodoList/Test.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    // TodoList,
    Gugudan,
  }

}

</script>

<style>

</style>
