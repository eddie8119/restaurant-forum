"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[76],{4385:function(t,a,s){s.d(a,{Z:function(){return c}});var r=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],e=s(1001),n={},o=(0,e.Z)(n,r,i,!1,null,"1565426b",null),c=o.exports},76:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[a("NavTabs"),a("h1",{staticClass:"mt-5"},[t._v(" 人氣餐廳 ")]),t.isLoading?a("SpinneR"):[a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},t._l(t.restaurants,(function(s){return a("div",{key:s.id,staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"card-img",attrs:{src:t._f("emptyImage")(s.image)}})])]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(" "+t._s(s.name)+" ")]),a("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(s.FavoriteCount))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(s.description)+" ")]),a("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"dashboard",params:{id:s.id}}}},[t._v("Show")]),s.isFavorited?a("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteFavorite(s.id)}}},[t._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addFavorite(s.id)}}},[t._v(" 加到最愛 ")])],1)])])})),0)]],2)},i=[],e=(s(1703),s(4839)),n=s(3459),o=s(4818),c=s(8390),u=s(6163),d=s(4385),l={name:"RestaurantsTop",components:{NavTabs:e.Z,SpinneR:d.Z},mixins:[n.L],data(){return{restaurants:[],isLoading:!0}},created(){this.getRestaurantsTop()},methods:{async getRestaurantsTop(){try{const t=await o.Z.getRestaurantsTop();if("OK"!==t.statusText)throw new Error("無法載入人氣餐廳，請稍後再試");this.restaurants=t.data.restaurants,this.isLoading=!1}catch(t){this.isLoading=!1,u.F.fire({icon:"error",title:"無法取得人氣餐廳"})}},async addFavorite(t){try{const{data:a}=await c.Z.addFavorite({restaurantId:t});if("success"!==a.status)throw new Error(a.message);this.restaurants=this.restaurants.map((a=>a.id===t?{...a,isFavorited:!0,FavoriteCount:a.FavoriteCount+1}:a))}catch(a){u.F.fire({icon:"error",title:"無法加到我的最愛，請稍後再試"})}},async deleteFavorite(t){try{const{data:a}=await c.Z.deleteFavorite({restaurantId:t});if("success"!==a.status)throw new Error(a.message);this.restaurants=this.restaurants.map((a=>a.id===t?{...a,isFavorited:!1,FavoriteCount:a.FavoriteCount-1}:a))}catch(a){u.F.fire({icon:"error",title:"無法從我的最愛刪除，請稍後再試"})}}}},v=l,p=s(1001),f=(0,p.Z)(v,r,i,!1,null,null,null),m=f.exports}}]);
//# sourceMappingURL=76.77b66939.js.map