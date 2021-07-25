<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>My Todo App!</h1> -->
    <!-- <TodoList></TodoList> -->
    <!-- <Gugudan></Gugudan> -->
    <!-- <WordRelay start-word="안녕"></WordRelay> -->
    <!-- <WordRelay start-word="hello"></WordRelay> -->
    <ResponseCheck></ResponseCheck>
  </div>
</template>

<script>
// import Gugudan from './components/Gugudan.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from './components/TodoList/TodoList/TodoList.vue'
// import Test from './components/TodoList/Test.vue'
// import WordRelay from './components/WordRelay.vue'
import ResponseCheck from './components/ResponseCheck.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    // TodoList,
    // Gugudan,
    // WordRelay,
    ResponseCheck
  }

}

</script>

<style>

</style>
