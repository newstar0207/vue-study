<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/menus">Menus</router-link></li>
      <li><router-link to="/events">Events</router-link></li>
      <li><router-link to="/reviews">Reviews</router-link></li>
    </ul>
    <router-view/>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>

</style>
