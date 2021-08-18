<template>
  <div class="products-container">
    <div class="group-container" v-for="(products, group) in products" :key="group">
      <div class="group-title">{{group}}</div>
      <div class="product-item"  @click="addToCart(product)" v-for="product in products" :key="product.name">
        <div class="product-name">{{product.name}} ({{product.availableCount}})</div>
        <div :class="`course-${course.state}`" class="product-price">{{product.price | convertToRubles(course.value)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_PRODUCTS } from "@/store/modules/products/actions.type";
import { ADD_PRODUCT} from "@/store/modules/cart/actions.type";
import { mapGetters } from 'vuex';
export default {
  name: 'Products',
  async created() {
    await this.$store.dispatch(FETCH_PRODUCTS);
    this.isLoading = false;
  },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    addToCart: function (product) {
      this.$store.dispatch(ADD_PRODUCT, { product, count: 1});
    }
  },
  computed: {
    ...mapGetters(['products', 'course'])
  }
}
</script>

<style lang="scss">
  .course-up {
    color: green;
  }
  .course-down {
    color: darkred;
  }
  .products-container {
    display: flex;
    flex-wrap: wrap;
  }
  .group-container {
    width: 100%;
    border: 1px solid black;
    margin-bottom: 20px;
    .group-title {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ECECEC;
      font-size: 13px;
      border-bottom: 1px solid black;
      min-height: 20px;
    }
    .product-item {
      display: flex;
      margin-left: 1%;
      justify-content: space-between;
      font-size: 11px;
      .product-name {
        text-align: left;
        width: 80%;
      }
    }
    .product-item:hover {
      background-color: #ECECEC;
      cursor: pointer;
    }
  }
</style>
