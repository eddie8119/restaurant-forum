<template>
  <div class="col-3">
    <router-link :to="{ name: 'user', params: { id: user.id } }">
      <img :src="user.image" width="140px" height="140px" />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.FollowerCount }}</span
    >
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.stop.prevent="addFollowing(user.id)"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.stop.prevent="deleteFollowing(user.id)"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  props: {
    initialUser: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    async fetchTopUsers() {
      try {
        const {data} = await usersAPI.getTopUsers()
        
        this.users = data.users.map(user =>({
          id:user.id,
          name:user.name,
          image:user.image,          
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed          
        }))
      } catch(error) {
        console.log(error)
        Toast.fire({
        icon: 'error',
        title: '無法取得美食達人，請稍後再試'
        })
      }
    }    
  },
};
</script>
