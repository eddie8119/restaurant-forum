<template>
  <div class="container py-5" @submit.prevent.stop="handleSubmit">
    <form class="w-100">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" :disabled="isProcessing" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin"> Sign In </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2022</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "", 
      isProcessing: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.isProcessing = true

        const formData = {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck,
        }

        if (
          !this.name ||
          !this.email ||
          !this.password ||
          !this.passwordCheck
        ) {
          this.isProcessing = false
          Toast.fire({
            icon: 'warning',
            title: '?????????????????????'
          })
          return
        } else if (this.password !== this.passwordCheck) {
          this.isProcessing = false
          Toast.fire({
            icon: 'warning',
            title: '?????????????????????'
          })
          this.passwordCheck=''
          return
        }

        const { data } = await authorizationAPI.signUp({ formData })

        if (data.status !== "success") {
          throw new Error(data.message)
        }
        
        this.$router.push({ name: "sign-in" })
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: "error",
          title: "??????????????????????????????"
        })
      }
    }
  },
};
</script>
