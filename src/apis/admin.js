import { apiHelper } from "./../utils/helpers";

export default {
  categories:{
    get() {
      return apiHelper.get(`/admin/categories`);
    },    
    create({name}) {
      return apiHelper.post(`/admin/categories`, {name}); //formData不包了{} 但這就包{} 奇怪
    }, 
    update({categoryId, name}) {
      return apiHelper.put(`/admin/categories/${categoryId}`,{name});
    },
    delete({categoryId}) {
      return apiHelper.delete(`/admin/categories/${categoryId}`);
    },
  },
  restaurants: {
    get() {
      return apiHelper.get(`/admin/restaurants`);
    }, 
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    create ({ formData }) {
      return apiHelper.post(`/admin/restaurants`, formData)
    },
    update ({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData) //formData包了{} 會失敗
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    }
  },  
  user: {
    get() {
      return apiHelper.get('/admin/users')
    },
    update({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
    }
  } 
};



