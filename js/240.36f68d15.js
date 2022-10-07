"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[240],{4854:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("h1",[t._v("餐廳後台")]),e("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")])],1)},i=[],r=a(1001),n={},o=(0,r.Z)(n,s,i,!1,null,null,null),c=o.exports},4385:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"spinner"},[e("div",{staticClass:"bouncing-loader"},[e("div"),e("div"),e("div")])])}],r=a(1001),n={},o=(0,r.Z)(n,s,i,!1,null,"1565426b",null),c=o.exports},8240:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("AdminNav"),e("form",{staticClass:"my-4"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col-auto"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:!0===t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory.apply(null,arguments)}}},[t._v(" "+t._s(t.isProcessing?"處理中":"新增")+" ")])])])]),t.isLoading?e("SpinneR"):e("table",{staticClass:"table"},[e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Category Name")]),e("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])]),e("tbody",t._l(t.categories,(function(a){return e("tr",{key:a.id},[e("th",{attrs:{scope:"row"}},[t._v(" "+t._s(a.id)+" ")]),e("td",{staticClass:"position-relative"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(" "+t._s(a.name)+" ")]),e("input",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:a.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(e){return t.handleCancel(a.id)}}},[t._v(" ✕ ")])]),e("td",{staticClass:"d-flex justify-content-between"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleIsEditing(a.id)}}},[t._v(" Edit ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.updateCategory({categoryId:a.id,name:a.name})}}},[t._v(" Save ")]),e("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteCategory(a.id)}}},[t._v(" Delete ")])])])})),0)])],1)},i=[],r=(a(1703),a(4854)),n=a(4711),o=a(6163),c=a(4385),l={name:"AdminCategories",components:{AdminNav:r.Z,SpinneR:c.Z},data(){return{categories:[],newCategoryName:"",isLoading:!0,isProcessing:!1}},created(){this.fetchCategories()},methods:{async fetchCategories(){try{const t=await n.Z.categories.get();if("OK"!==t.statusText)throw new Error("無法載入餐廳分類，請稍後再試");console.log(t.data.categories),this.categories=t.data.categories.map((t=>({...t,isEditing:!1,nameCached:""}))),this.isLoading=!1}catch(t){this.isLoading=!1,o.F.fire({icon:"error",title:"無法載入餐廳分類，請稍後再試"})}},async createCategory(){try{if(!this.newCategoryName.trim())return void o.F.fire({icon:"warning",title:"請輸入餐廳類別"});this.isProcessing=!0;const{data:t}=await n.Z.categories.create({name:this.newCategoryName});if("error"===t.status)throw new Error(t.message);this.categories.push({id:t.categoryId,name:this.newCategoryName,isEditing:!1,nameCached:""}),this.newCategoryName="",this.isProcessing=!1}catch(t){console.log(t),this.isProcessing=!1,this.newCategoryName="",o.F.fire({icon:"error",title:"無法新增餐廳分類，請稍後再試"})}},async deleteCategory(t){try{const{data:e}=await n.Z.categories["delete"]({categoryId:t});if("success"!==e.status)throw new Error(e.message);this.categories=this.categories.filter((e=>e.id!==t)),o.F.fire({icon:"success",title:"成功刪除該餐廳類別"})}catch(e){console.log(e),o.F.fire({icon:"error",title:"無法刪除餐廳類別，請稍後再試"})}},toggleIsEditing(t){this.categories=this.categories.map((e=>e.id===t?{...e,isEditing:!e.isEditing,nameCached:e.name}:e))},async updateCategory({categoryId:t,name:e}){try{const{data:a}=await n.Z.categories.update({categoryId:t,name:e});if("success"!==a.status)throw new Error(a.message);this.toggleIsEditing(t)}catch(a){console.log(a),o.F.fire({icon:"error",title:"無法更新餐廳分類，請稍後再試"})}},handleCancel(t){this.categories=this.categories.map((e=>e.id===t?{...e,name:e.nameCached}:e)),this.toggleIsEditing(t)}}},d=l,u=a(1001),g=(0,u.Z)(d,s,i,!1,null,"623e0ca7",null),m=g.exports},4711:function(t,e,a){var s=a(6163);e["Z"]={categories:{get(){return s.l.get("/admin/categories")},create({name:t}){return s.l.post("/admin/categories",{name:t})},update({categoryId:t,name:e}){return s.l.put(`/admin/categories/${t}`,{name:e})},delete({categoryId:t}){return s.l["delete"](`/admin/categories/${t}`)}},restaurants:{get(){return s.l.get("/admin/restaurants")},getDetail({restaurantId:t}){return s.l.get(`/admin/restaurants/${t}`)},create({formData:t}){return s.l.post("/admin/restaurants",t)},update({restaurantId:t,formData:e}){return s.l.put(`/admin/restaurants/${t}`,e)},delete({restaurantId:t}){return s.l["delete"](`/admin/restaurants/${t}`)}},user:{get(){return s.l.get("/admin/users")},update({userId:t,isAdmin:e}){return s.l.put(`/admin/users/${t}`,{isAdmin:e})}}}}}]);
//# sourceMappingURL=240.36f68d15.js.map