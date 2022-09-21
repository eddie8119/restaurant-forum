<template>
  <div class="container py-5">
    <NavTabs />
    <SpinneR v-if="isLoading"/>
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <h3>最新評論</h3>
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import SpinneR from "../components/SpinneR"

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    SpinneR,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
        try {
            const {data, statusText} = await restaurantsAPI.getFeeds()

            if (statusText !== 'OK') {
              throw new Error(statusText)
            }

            const {restaurants, comments} = data
            this.restaurants = restaurants,
            this.comments = comments
            this.isLoading = false
        } catch (error) {
            this.isLoading = false
            Toast.fire({
                icon:'error',
                title:'無法取得餐廳資料，請稍後再試'
            })
        }
    }
  },
};
</script>
