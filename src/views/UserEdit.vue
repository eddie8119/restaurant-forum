<template>
  <div class="container py-5">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input          
          id="name"
          v-model="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <input
          id="image"
          :src="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
// import usersAPI from './../apis/users'
// import { Toast } from './../utils/helpers'

export default {
  data () {
    return {
      id: 0,
      image: '',
      name: '',
      email: '',      
    }
  },
  methods: {
    setUser (userId) {
      const { id, image, name, email } = this.currentUser
      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: 'not-found' })
        return
      }
      this.id = id
      this.name = name
      this.email = email
      this.image = image
    },
  }
}
</script>
