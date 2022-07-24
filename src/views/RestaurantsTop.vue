<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <RestaurantTopCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
    <hr />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantTopCard from "../components/RestaurantTopCard.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "RestaurantsTop",
  components: {
    NavTabs,
    RestaurantTopCard,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurantsTop();
  },
  methods: {
    async fetchRestaurantsTop() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants();
        this.restaurants = data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得人氣餐廳資料，請稍後再試",
        });
      }
    },
    // async addFavorite(restaurantId) {
    //   try {
    //     const { data } = await usersAPI.addFavorite({ restaurantId });
    //     if (data.status !== "success") {
    //       throw new Error(data.messege);
    //     }
    //     this.restaurants = this.restaurants.map((restaurant) => {
    //       if (restaurant.id !== restaurantId) {
    //         return restaurant;
    //       } else {
    //         return {
    //           ...restaurant,
    //           isFavorited: true,
    //           FavoriteCount: restaurant.FavoriteCount + 1,
    //         };
    //       }
    //     });
    //   } catch (error) {
    //     Toast.fire({
    //       icon: "error",
    //       title: "無法將餐廳加入最愛，請稍後再試",
    //     });
    //   }
    // },
    // async deleteFavorite(restaurantId) {
    //   try {
    //     const { data } = await usersAPI.deleteFavorite({ restaurantId });
    //     if (data.status !== "success") {
    //       throw new Error(data.messege);
    //     }
    //     this.restaurants = this.restaurants.map((restaurant) => {
    //       if (restaurant.id !== restaurantId) {
    //         return restaurant;
    //       } else {
    //         return {
    //           ...restaurant,
    //           isFavorited: false,
    //           FavoriteCount: restaurant.FavoriteCount - 1,
    //         };
    //       }
    //     });
    //   } catch (error) {
    //     Toast.fire({
    //       icon: "error",
    //       title: "無法將餐廳取消最愛，請稍後再試",
    //     });
    //   }
    // },
  },
};
</script>
