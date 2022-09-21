import Vue from 'vue'
import Vuex from 'vuex'

import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token:''
  },
  mutations: {
    // 對照 SignIn.vue 檔案看，其傳入了 state 物件和 data.user，此時的 state 物件是預設值，需要使用 data.user 來覆蓋。
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false      
      state.token = ''
      localStorage.removeItem('token')      
    }
  },
  // 路由設定檔中的 beforeEach() 來呼叫 actions 裡面的非同步函式 
  actions: {
    async fetchCurrentUser ({commit}) {
      try {        
        const {data} = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
        return true
      } catch (error) {        
        console.error('can not fetch user information')
        commit('revokeAuthentication')
        return false
      }
    }
  }
})
