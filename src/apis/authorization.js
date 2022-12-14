import { apiHelper } from "./../utils/helpers"

export default {
  signIn({ email, password }) {
    return apiHelper.post("/signin", {
      email,
      password
    })
  },
  signUp({ formData }) {
    return apiHelper.post('/signup', formData)
  }
};
 