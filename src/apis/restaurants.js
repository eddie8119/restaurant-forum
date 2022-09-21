import { apiHelper } from "./../utils/helpers";

export default {
  getRestaurants({page, categoryId}) {
    // JavaScript 原生 URLSearchParams() 方法
    // URLSearchParams() 為物件建構子，在使用時要用 new 的方式來產生實例，再透過 URLSearchParams.toString() 來產生 queryString。
    const searchParams = new URLSearchParams({page, categoryId})
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`)
  },
  getRestaurantsTop() {
    return apiHelper.get(`/restaurants/top`)
  },
  getRestaurant ({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
}
