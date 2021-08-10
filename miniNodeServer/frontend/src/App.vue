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

      <v-spacer></v-spacer>

      <v-btn href="/add" text>add memo</v-btn>
      <v-btn href="/" text>Home</v-btn>
      <v-btn href="/signin" text>signin</v-btn>
      <v-btn @click="userInfo" text>info</v-btn>
    </v-app-bar>
      <v-dialog v-model="userInfoDialog" width="350">
        <v-card>
          <v-card-title >User Information</v-card-title>
          <div v-if="userinfo == undifined" class="d-flex justify-center align-center">
            <v-col cols="6">
              <v-card-text class="text-h6 font-italic">first signup</v-card-text>
            </v-col>
            <v-btn color="white">signin</v-btn>
          </div>
          <div v-else>
            <v-card-text class="font-weight-medium">userid: {{ this.userinfo.userid }}</v-card-text>
            <v-card-text class="font-weight-medium">name: {{ this.userinfo.name }}</v-card-text>
            <v-card-text class="font-weight-medium">password: {{ this.userinfo.password }}</v-card-text>
          </div>
        </v-card>
      </v-dialog>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    userInfoDialog : false,
    userinfo : [],
  }),
  methods:{
    userInfo(){
      this.userInfoDialog = true;
      console.log('222222222222222222222222222');
      this.$store.dispatch('getUserInfo')
      .then((data) => {
        this.userinfo = data;
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
};
</script>
