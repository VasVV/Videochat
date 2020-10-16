<template>
    <div id="nav">
      <div>
  <nav class="navbar navbar-expand bg-primary navbar-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        ><span class="h2 pr-1">Video Chat</span>
        <span class="navbar-text small">
          <span class="font-weight-bold text-white">{{ user ? 'Hi ' + user.displayName : '' }}</span></span
        >
      </router-link>
      <div class="navbar-nav ">
        <router-link class="nav-item nav-link" to="/login">Login</router-link>
      </div>
       <div class="navbar-nav mr-auto">
        <router-link class="nav-item nav-link" to="/register">Register</router-link>
      </div>
      <div class="navbar-nav mr-auto">
        <button class="nav-item nav-link btn btn-link" to="/rooms">Rooms</button>
      </div>
      <div class="navbar-nav mr-auto">
        <button class="nav-item nav-link btn btn-link" to="/login" @click='$emit("logout")'>Logout</button>
      </div>
    </div>
  </nav>
    </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    props: ['user']
}
</script>