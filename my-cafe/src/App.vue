<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <!-- 가운데 공간이 생기게 해줌 -->
      <v-spacer></v-spacer> 

      <v-btn to='/' text>
        <v-icon>mdi-open-in-new</v-icon>
        <span class="mr-2">Latest Release</span>
      </v-btn>
      <v-btn to="/menus" text><span class="mr-2">Menus</span></v-btn>
      <v-btn to="/events" text><span class="mr-2">Events</span></v-btn>
      <v-btn to="/reviews" text><span class="mr-2">reviews</span></v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
