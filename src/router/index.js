import Vue from "vue";
import VueRouter from "vue-router";

import SignIn from "../views/SignIn.vue";
import NotFound from "../views/NotFound.vue";
import RestaurantS from "../views/RestaurantS.vue";

import store from "./../store"

Vue.use(VueRouter)

// 處理非管理者 直接透過路由進入管理頁面
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }

  next()
}

//注意順序
const routes =  [
  {
    path: "/",
    name: "root",
    redirect: "/signin",
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "sign-up",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: RestaurantS,
  },
  {
    path: "/restaurants/feeds",
    name: "restaurants-feeds",
    component: () => import("../views/RestaurantsFeeds.vue"),
  },
  {
    path: "/restaurants/top",
    name: "restaurants-tops",
    component: () => import("../views/RestaurantsTop.vue"),
  },
  {
    path: "/restaurants/:id",
    name: "restaurant",
    component: () => import("../views/RestauranT.vue"),
  }, 
  {
    path: "/restaurants/:id/dashboard",
    name: "restaurant-dashboard",
    component: () => import("../views/RestaurantDashboard.vue"),
  }, 
  {
    path: "/users/top",
    name: "users-top",
    component: () => import("../views/UsersTop.vue"),
  },
  {
    path: "/users/:id",
    name: "user",
    component: () => import("../views/UseR.vue"),
  },
  {
    path: "/users/:id/edit",
    name: "user-edit",
    component: () => import("../views/UserEdit.vue"),
  },
  {
    path: "/admin",
    exact: true,
    redirect: "/admin/restaurants" //注意這個不用authorizeIsAdmin    
  },
  {
    path: "/admin/restaurants",
    name: "admin-restaurants",
    component: () => import("../views/AdminRestaurants.vue"),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: "/admin/restaurants/new",
    name: "admin-restaurant-new",
    component: () => import("../views/AdminRestaurantNew.vue"),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: "/admin/restaurants/:id",
    name: "admin-restaurant",
    component: () => import("../views/AdminRestaurant.vue"),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: "/admin/restaurants/:id/edit",
    name: "admin-restaurant-edit",
    component: () => import("../views/AdminRestaurantEdit.vue"),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: "/admin/categories",
    name: "admin-categories",
    component: () => import("../views/AdminCategories.vue"),
    beforeEnter: authorizeIsAdmin
  },
  // {
  //   path: '/admin/users',
  //   name: 'admin-users',
  //   component: () => import('../views/AdminUsers.vue'),
  //   beforeEnter: authorizeIsAdmin
  // },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
] 

const router = new VueRouter({
  routes,
  linkExactActiveClass: "active"  
})

// 監聽"全域"的「切換路由」事件
router.beforeEach(async (to, from, next) => {  
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated
  
  if(tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // 不一樣就需要重新驗證
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // // 如果有 token 的話才驗證->改為token change才驗證
  // if (token) {
  //   // 取得驗證成功與否
  //   // dispatch 改變mutations
  //   // 使用 dispatch 呼叫 Vuex 內的 actions
  //   isAuthenticated = await store.dispatch('fetchCurrentUser') // function name
  // }

  const pathsWithoutAuthentication = ['sign-up', 'sign-in']

  if (!isAuthenticated  && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  if (isAuthenticated  && pathsWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }  

  next()
})

export default router
