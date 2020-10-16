<template>
  <div>
    <form class="mt-3" @submit.prevent="register">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Register</h3>
                <div class="form-row">
                  <div v-if="error" class="col-12 alert alert-danger px-3">
                    {{ error }}
                  </div>
                  <section class="col-sm-12 form-group">
                    <label class="form-control-label sr-only" for="displayName">Display Name</label>
                    <input
                      class="form-control"
                      type="text"
                      id="displayName"
                      placeholder="Display Name"
                      name="displayName"
                      required
                      v-model="displayName"
                    />
                  </section>
                </div>
                <section class="form-group">
                  <label class="form-control-label sr-only" for="email">Email</label>
                  <input
                    class="form-control"
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required
                    name="email"
                    v-model="email"
                  />
                </section>
                <div class="form-group">
                  <section class="form-control-label">
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Password"
                      v-model="password"
                    />
                  </section>
                </div>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Firebase from 'firebase';
export default {
  data: function() {
    return {
      displayName: null,
      email: null,
      password: null,
      error: null
    }
  },
  methods: {
      register: function() {
          const info = {
              email: this.email,
              password: this.password,
              displayName: this.displayName
          }
          if (!this.error) {
              Firebase.auth()
              .createUserWithEmailAndPassword(info.email, info.password)
              .then(
                  userCredentials => userCredentials.user.updateProfile({
                      displayName: info.displayName
                  }))
                  .then( () => {
                      this.$router.replace('/')
                  }),
                  error => {
                      this.error = error.message
                  }
              
          }
      }
  }
}
</script>