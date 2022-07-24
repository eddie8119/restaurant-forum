<template>
  <div class="card mb-3" style="max-width: 540px; margin: auto">
    <div class="row no-gutters">
      <div class="col-md-4">
        <a href="#">
          <img class="card-img" :src="restaurant.image" />
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <span class="badge badge-secondary"
            >收藏數：{{ restaurant.FavoriteCount }}</span
          >
          <p class="card-text">
            {{ restaurant.description }}
          </p>
          <a href="#" class="btn btn-primary mr-2">Show</a>

          <button
            v-if="restaurant.isFavorited"
            @click.stop.prevent="removeFavorited"
            type="button"
            class="btn btn-danger mr-2"
          >
            移除最愛
          </button>
          <button
            v-else
            @click.stop.prevent="addFavorited"
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

<script>
// import {emptyImageFilter} from './../utils/mixins'
// import usersAPI from './../apis/users'
// import { Toast } from './../utils/helper'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    addFavorited() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true,
        FavoriteCount: this.restaurant.FavoriteCount + 1,
      };
    },
    removeFavorited() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false,
        FavoriteCount: this.restaurant.FavoriteCount - 1,
      };
    },
  },
};
</script>
