"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[199],{4854:function(t,e,a){a.d(e,{Z:function(){return o}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("h1",[t._v("餐廳後台")]),e("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")])],1)},r=[],n=a(1001),i={},u=(0,n.Z)(i,s,r,!1,null,null,null),o=u.exports},4385:function(t,e,a){a.d(e,{Z:function(){return o}});var s=function(){var t=this;t._self._c;return t._m(0)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"spinner"},[e("div",{staticClass:"bouncing-loader"},[e("div"),e("div"),e("div")])])}],n=a(1001),i={},u=(0,n.Z)(i,s,r,!1,null,"1565426b",null),o=u.exports},9199:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("AdminNav"),e("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/admin/restaurants/new"}},[t._v(" New Restaurant ")]),e("AdminRestaurantsTable")],1)},r=[],n=a(4854),i=function(){var t=this,e=t._self._c;return t.isLoading?e("SpinneR"):e("table",{staticClass:"table"},[e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Category")]),e("th",{attrs:{scope:"col"}},[t._v("Name")]),e("th",{attrs:{scope:"col",width:"300"}},[t._v("操作")])])]),e("tbody",t._l(t.restaurants,(function(a){return e("tr",{key:a.id},[e("th",{attrs:{scope:"row"}},[t._v(" "+t._s(a.id)+" ")]),e("td",[t._v(t._s(a.Category?a.Category.name:"未分類"))]),e("td",[t._v(t._s(a.name))]),e("td",{staticClass:"d-flex justify-content-between"},[e("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant",params:{id:a.id}}}},[t._v("Show")]),e("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant-edit",params:{id:a.id}}}},[t._v("Edit")]),e("button",{staticClass:"btn btn-link",attrs:{type:"button",disabled:!0===t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteRestaurant(a.id)}}},[t._v(" Delete ")])],1)])})),0)])},u=[],o=(a(1703),a(4711)),l=a(6163),d=a(4385),c={name:"AdiminRestaurantsTable",components:{SpinneR:d.Z},data(){return{restaurants:[],isProcessing:!1,isLoading:!1}},created(){this.fetchRestaurants()},methods:{async fetchRestaurants(){try{this.isLoading=!0;const t=await o.Z.restaurants.get();if("OK"!==t.statusText)throw new Error("無法顯示餐廳，請稍後再試");this.restaurants=t.data.restaurants,this.isLoading=!1}catch(t){this.isLoading=!1,console.log(t),l.F.fire({icon:"error",title:"無法取得餐廳清單，請稍後再試"})}},async deleteRestaurant(t){try{this.isProcessing=!0;const{data:e}=await o.Z.restaurants["delete"]({restaurantId:t});if("success"!==e.status)throw new Error(e.message);this.restaurants=this.restaurants.filter((e=>e.id!==t)),this.isProcessing=!1,l.F.fire({icon:"success",title:"刪除餐廳成功"})}catch(e){this.isProcessing=!1,console.log(e),l.F.fire({icon:"error",title:"無法取得餐廳清單，請稍後再試"})}}}},m=c,f=a(1001),g=(0,f.Z)(m,i,u,!1,null,null,null),v=g.exports,_={components:{AdminNav:n.Z,AdminRestaurantsTable:v}},h=_,p=(0,f.Z)(h,s,r,!1,null,null,null),b=p.exports},4711:function(t,e,a){var s=a(6163);e["Z"]={categories:{get(){return s.l.get("/admin/categories")},create({name:t}){return s.l.post("/admin/categories",{name:t})},update({categoryId:t,name:e}){return s.l.put(`/admin/categories/${t}`,{name:e})},delete({categoryId:t}){return s.l["delete"](`/admin/categories/${t}`)}},restaurants:{get(){return s.l.get("/admin/restaurants")},getDetail({restaurantId:t}){return s.l.get(`/admin/restaurants/${t}`)},create({formData:t}){return s.l.post("/admin/restaurants",t)},update({restaurantId:t,formData:e}){return s.l.put(`/admin/restaurants/${t}`,e)},delete({restaurantId:t}){return s.l["delete"](`/admin/restaurants/${t}`)}},user:{get(){return s.l.get("/admin/users")},update({userId:t,isAdmin:e}){return s.l.put(`/admin/users/${t}`,{isAdmin:e})}}}}}]);
//# sourceMappingURL=199.3fe35b9e.js.map