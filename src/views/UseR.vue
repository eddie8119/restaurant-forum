<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="card mb-3">
        <!-- UserProfileCard -->
        <UserProfileCard 
          :user="user" 
          :initial-is-followed="isFollowed" 
        />
      </div>

      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingsCard :followings="followings" />

          <br />
          <!-- UserFollowersCard -->
          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard :comments="comments" />

          <br />
          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard
            :favoritedRestaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard.vue";
import UserFollowersCard from "./../components/UserFollowersCard.vue";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'


export default {
  name:"UseR",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        image: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: false,
    };
  },
  created() {
    const {id} = this.$router.params    
    this.fetchUser(id)
  },
  beforeRouteUpdate(to, from, next) {
    const {id} = to.params
    this.fetchUser(id)
    next()    
  },
  methods: {
    async fetchUser (userId) {
      try {
        const {data} = await usersAPI.get({userId})

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { profile, isFollowed } = data
        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          // Comments,
          FavoritedRestaurants
        } = profile

        this.user = {
          ...this.user,
          id,
          name,
          email,
          image,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,                    
        }
        this.isFollowed = isFollowed
        this.followings = Followings
        this.followers = Followers
        this.favoritedRestaurants = FavoritedRestaurants        
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }     
    },
  },
};
</script>
