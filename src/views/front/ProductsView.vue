<template>
  <!-- Loading Layout -->
  <div class="vl-parent">
    <VLoading
      v-model:active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    />
  </div>
  <!-- 產品列表 -->
  <h3 class="mt-5 mb-3 text-center">商品列表</h3>
  <div class="vl-parent">
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productList" :key="product.id" :ref="product.id">
          <td style="width: 200px">
            <img
              :src="product.imageUrl"
              :alt="`${product.title}圖片`"
              style="height: 100px; object-fit: cover"
              class="w-100"
            />
          </td>
          <td>{{ product.title }}</td>
          <td>
            <div class="h5" v-if="product.origin_price === product.price">
              {{ product.price }}元
            </div>
            <div v-else>
              <del class="h6">原價{{ product.origin_price }}元</del>
              <div class="h5">現在只要{{ product.price }}元</div>
            </div>
          </td>
          <td>
            <RouterLink
              :to="`/product/${product.id}`"
              class="me-3 btn btn-outline-primary"
              >查看更多</RouterLink
            >

            <button
              type="button"
              class="btn btn-outline-danger"
              :disabled="loadingItem === product.id"
              @click="addToCart(product.id)"
            >
              加入購物車
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      productList: [],
      loadingItem: "",
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/products`)
        .then((res) => {
          this.productList = res.data.products;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToCart(product_id, qty = 1) {
      const data = { product_id, qty };
      this.loadingItem = product_id;
      this.isLoading = true;
      this.$http
        .post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
        .then(() => {
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loadingItem = "";
        });
    },
  },
  mounted() {
    this.getProducts();
  },
  components: { RouterLink },
};
</script>
