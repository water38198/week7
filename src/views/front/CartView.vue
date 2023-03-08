<template>
  <!-- Loading Layout -->
  <div class="vl-parent">
    <VLoading
      v-model:active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    />
  </div>
  <h3 class="mt-5 mb-3 text-center">購物車</h3>
  <table class="table mt-5 align-middle">
    <thead>
      <tr>
        <th></th>
        <th>商品名稱</th>
        <th>數量/單位</th>
        <th class="text-end">單價</th>
        <th class="text-end">總價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts?.length">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              :disabled="loadingItem === item.id"
              @click="deleteCartItem(item.id)"
            >
              X
            </button>
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <select
              name=""
              id=""
              class="form-select"
              v-model="item.qty"
              @change="updateItemNum(item)"
            >
              <option :value="i" v-for="i in 15" :key="i + '123'">
                {{ i }}
              </option>
            </select>
          </td>
          <td class="text-end">{{ item.product.price }}</td>
          <td class="text-end">{{ item.final_total }}</td>
        </tr>
      </template>
      <template v-else>
        <tr>
          <td colspan="5" class="text-center">目前購物車中沒有東西喔</td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr v-if="cart.carts?.length">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="text-end">
          <button
            type="button"
            class="btn btn-outline-danger"
            :disabled="loadingItem === 'all'"
            @click="deleteCartAll()"
          >
            清空全部
          </button>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="text-end">總金額</td>
        <td class="text-end">{{ cart.total }}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="text-end">付款金額</td>
        <td class="text-end">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>
  <OrderForm :cart="cart" :get-cart="getCart"></OrderForm>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import OrderForm from "../../components/OrderForm.vue";
export default {
  data() {
    return {
      cart: {},
      loadingItem: "",
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCartItem(id) {
      this.loadingItem = id;
      this.$http
        .delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`)
        .then(() => {
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCartAll() {
      this.loadingItem = "all";
      this.$http
        .delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`)
        .then(() => {
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateItemNum(item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.$http
        .put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, {
          data,
        })
        .then(() => {
          this.getCart();
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getCart();
  },
  components: { OrderForm },
};
</script>
