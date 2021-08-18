<template>
  <div class="shop-container">
    <products class="products"/>
    <cart class="cart"/>
  </div>
</template>

<script>
import Products from "../products/Products";
import Cart from '../cart/Cart';
import { FETCH_PRODUCTS, FETCH_COURSE } from "@/store/modules/products/actions.type";
export default {
  name: 'Shop',
  components: {Products, Cart},
  async created() {
    setInterval(() => {
      this.$store.dispatch(FETCH_PRODUCTS);
      this.$store.dispatch(FETCH_COURSE);
    }, 15000)
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
  .shop-container {
    display: flex;
    justify-content: space-between;
    .products, .cart {
      width: 49%;
    }
  }
</style>
