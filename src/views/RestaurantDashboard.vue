<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName ? restaurant.categoryName : "未分類" }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Franco Boyer",
    tel: "(765) 610-2179 x21150",
    address: "65008 Eusebio Summit",
    opening_hours: "08:00",
    description: "sapiente ex nihil",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=65.02882729727115",
    viewCounts: 1,
    createdAt: "2022-07-02T19:36:40.000Z",
    updatedAt: "2022-07-05T20:47:25.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-07-02T19:36:40.000Z",
      updatedAt: "2022-07-02T19:36:40.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Voluptates enim nisi ad enim perspiciatis possimus.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-07-02T19:36:40.000Z",
        updatedAt: "2022-07-02T19:36:40.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
          isAdmin: true,
          image: null,
          createdAt: "2022-07-02T19:36:40.000Z",
          updatedAt: "2022-07-02T19:36:40.000Z",
        },
      },
      {
        id: 51,
        text: "Porro et illo vel voluptas et soluta voluptate blanditiis.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-07-02T19:36:40.000Z",
        updatedAt: "2022-07-02T19:36:40.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
          isAdmin: true,
          image: null,
          createdAt: "2022-07-02T19:36:40.000Z",
          updatedAt: "2022-07-02T19:36:40.000Z",
        },
      },
      {
        id: 101,
        text: "Quos consectetur optio hic labore.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-07-02T19:36:40.000Z",
        updatedAt: "2022-07-02T19:36:40.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
          isAdmin: true,
          image: null,
          createdAt: "2022-07-02T19:36:40.000Z",
          updatedAt: "2022-07-02T19:36:40.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurantDashboard(restaurantId);
  },
  methods: {
    fetchRestaurantDashboard(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);
      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant;
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category.name,
        commentsLength: Comments.length,
        viewCounts,
      };
    },
  },
};
</script>
