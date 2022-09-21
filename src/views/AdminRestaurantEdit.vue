<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeRouteUpdate(to, from, next){
    const {id} = to.params
    this.fetchRestaurant(id);
    next()
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
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
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async handleAfterSubmit (formData) {
      try {
        this.isProcessing = true
        const {data} = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id, //注意這個參數
          formData
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'admin-restaurants' })
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    }   
  },
};
</script>
