import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/store/modules/products/products.module';
import cart from '@/store/modules/cart/cart.module';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    cart
  }
})
