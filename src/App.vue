<template>
  <div id="app">
    <Navigation :user ='user' @logout='logout'/>
    <router-view :user ='user' @logout='logout'/>
  </div>
</template>

<script>


import Navigation from '@/components/Navigation';
import Firebase from 'firebase';
//import db from "./db.js";
export default {
  name: 'App',
  data: function() {
    return {
      user: null
    }
  },
  methods: {
    logout: function() {
      Firebase.auth()
      .signOut()
      .then(() => {
        this.user = null;
        this.$router.push('login');
      })
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
        }
    })
  },
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
$primary: blue;
</style>
