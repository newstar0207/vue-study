<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>My Todo App!</h1> -->
    <!-- <TodoList></TodoList> -->
    <!-- <Gugudan></Gugudan> -->
    <!-- <WordRelay start-word="안녕"></WordRelay> -->
    <!-- <WordRelay start-word="hello"></WordRelay> -->
    <!-- <ResponseCheck></ResponseCheck> -->
    <!-- <RockScissorsPaper></RockScissorsPaper> -->
    <!-- <lotto-generator></lotto-generator> -->
    <tic-tac-toe></tic-tac-toe>
  </div>
</template>

<script>
// import LottoGenerator from './components/LottoGenerator.vue'
import TicTacToe from './components/TicTacToeVuex/TicTacToe.vue'
// import Gugudan from './components/Gugudan.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from './components/TodoList/TodoList/TodoList.vue'
// import Test from './components/TodoList/Test.vue'
// import WordRelay from './components/WordRelay.vue'
// import ResponseCheck from './components/ResponseCheck.vue'
// import RockScissorsPaper from './components/RockScissorsPaper.vue'



export default {
  name: 'App',
  components: {
    // HelloWorld
    // TodoList,
    // Gugudan,
    // WordRelay,
    // ResponseCheck
    // RockScissorsPaper, 
    // LottoGenerator,
    TicTacToe,
  }

}

</script>

<style>

</style>
