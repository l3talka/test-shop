<template>
  <div>
    <div v-if="isEmpty">Корзина пуста :(</div>
    <div v-else class="cart-container">
      <table width="100%">
        <thead>
          <tr align="left">
            <td>Наименование</td>
            <td>Количество</td>
            <td>Цена</td>
            <td>Действие</td>
          </tr>
        </thead>
        <tbody>
         <tr align="left" v-for="(product, index) in cart" :key="index">
           <td width="50%">{{product.name}}</td>
           <td>
             <input type="tel"
                    v-maska="'#####'"
                    :class="product.count > product.availableCount ? 'error' : ''"
                    v-model="product.count"
                    @input="changeCount({ ...product, id: index })"/>
           </td>
           <td>{{product.price | convertToRubles(course.value)}}</td>
           <td class="action"> <div  @click="changeCount({ ...product, count: null, id: index })">Удалить</div></td>
         </tr>
         <tr align="left">
           <td>Общая стоимость: {{amount | convertToRubles(course.value)}}</td>
         </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import { DELETE_PRODUCT, CHANGE_COUNT_PRODUCT} from "@/store/modules/cart/actions.type";
import { mapGetters } from 'vuex';
export default {
  name: 'Cart',
  computed: {
    isEmpty: function() {
      return Object.keys(this.cart).length === 0
    },
    ...mapGetters(['cart', 'course', 'amount'])
  },
  methods: {
    changeCount: function (product) {
      if(!product.count) {
        this.$store.dispatch(DELETE_PRODUCT, product.id);
      } else {
        this.$store.dispatch(CHANGE_COUNT_PRODUCT, { product, count: product.count});
      }
    }
  },
}
</script>

<style lang="scss">
  .cart-container {
    font-size: 13px;
  }
  .action {
    cursor: pointer;
  }
  .error {
    border-color: red;
  }
</style>
