<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <SpinneR v-if="isLoading"/>
    <template v-else>
      <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters" v-for="restaurant in restaurants" :key="restaurant.id">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image | emptyImage"              
            />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}              
            </p>
            <router-link              
              :to="{ name: 'dashboard', params: { id: restaurant.id } }"              
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import { emptyImageFilter } from './../utils/mixins'
import restaurantsAPI from "./../apis/restaurants";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import SpinneR from "../components/SpinneR"

export default {
  name: "RestaurantsTop",
  components: {
    NavTabs, 
    SpinneR,   
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurants: [],
      isLoading: true,
    };
  },
  created() {
    this.getRestaurantsTop();
  },
  methods: {
    async getRestaurantsTop() {
      try {
        const response = await restaurantsAPI.getRestaurantsTop()

        if (response.statusText !== "OK") {
          throw new Error("無法載入人氣餐廳，請稍後再試");
        }

        this.restaurants = response.data.restaurants
        this.isLoading = false
      } catch(error) {
        this.isLoading = false        
        Toast.fire({
          icon: "error",
          title: "無法取得人氣餐廳",
        })
      }
    },   
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });
        
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        
        this.restaurants = this.restaurants.map (
          restaurant => {
            if (restaurant.id === restaurantId) {
              return {
                ...restaurant,
                isFavorited: true, //記得不要誤寫 restaurant.isFavorited
                FavoriteCount: restaurant.FavoriteCount + 1,
              }
            } else {
              return restaurant
            }
          }
        )
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加到我的最愛，請稍後再試",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants.map (
          restaurant => {
            if (restaurant.id === restaurantId) {
              return {
                ...restaurant,
                isFavorited: false, 
                FavoriteCount: restaurant.FavoriteCount - 1,
              }
            } else {
              return restaurant
            }
          }
        )            
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法從我的最愛刪除，請稍後再試",
        });
      }
    },
  },
};
</script>
