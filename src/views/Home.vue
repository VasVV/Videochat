<template>
  <div>
    <div class="mt-3">
  <div class="text-center">
     <span class="font-weight-bold text-info">{{ user ? 'Welcome ' + user.displayName : '' }}</span>
  </div>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col-10 col-md-10 col-lg-8 col-xl-7">
        <h4 class="display-4 text-primary mb-2">Video Chat</h4>
        <p class="lead">
          Videochat lorem ipsum dolor sit amet
        </p>
        <router-link class="btn btn-outline-primary mr-2" to="/login">Login</router-link>
        <router-link class="btn btn-outline-primary mr-2" to="/register">Register</router-link>
      </div>
    </div>
  </div>
</div>
  </div>

  
</template>

<script>
//import db from "../db.js";

export default {
  name: "home",
  props: ['user']
}
</script>
