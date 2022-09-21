<template>
  <div class="container py-5">
    <SpinneR v-if="isLoading"/>
    <div v-else class="row">
    <div class="col-md-12">
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>
    <div class="col-md-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image | emptyImage"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="well">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-8">
      <p>{{ restaurant.description }}</p>
    </div>
  </div>      
  <hr />
  <button type="button" class="btn btn-link" @click="$router.back()">
    回上一頁
  </button>   
  </div>
</template>
<script>
import { emptyImageFilter } from "./../utils/mixins";
import adminAPI from './../apis/admin';
import { Toast } from "./../utils/helpers";
import SpinneR from "../components/SpinneR"

export default {
  name: "AdminRestaurant",
  mixins: [emptyImageFilter],
  components: {
    SpinneR,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
      },
      isLoading: true
    };
  },
  mounted() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);    
  },  
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params    
    this.fetchRestaurant(id)
    next()
  },  
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        this.isLoading = true
        const response = await adminAPI.restaurants.getDetail({restaurantId})

        if (response.statusText !== "OK") {
          throw new Error("無法編輯餐廳資料，請稍後再試");
        }

        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId
        } = response.data.restaurant

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryId,
          tel,
          address,
          description,
          image,
          openingHours
        }

        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
  }
}
</script>