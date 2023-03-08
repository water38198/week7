<template>
  <!-- Loading Layout -->
  <div class="vl-parent">
    <VLoading
      v-model:active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    />
  </div>
  <h1 class="text-center mb-3">{{ product.title }}</h1>
  <div class="row mb-5">
    <div class="col-5">
      <div class="text-center">
        <img :src="product.imageUrl" alt="" class="img-fluid" />
      </div>
      <div class="mt-2">
        <img
          :src="i"
          alt=""
          v-for="i in product.imagesUrl"
          :key="i"
          class="product-images me-1"
        />
      </div>
    </div>
    <div class="col-7 d-flex flex-column">
      <div class="h3">內容物:</div>
      <p class="p-2">{{ product.content }}</p>
      <div class="h3">商品敘述:</div>
      <p class="p-2">{{ product.description }}</p>
      <div class="h3">價格:</div>
      <div class="h5 p-2" v-if="product.origin_price === product.price">
        {{ product.price }}元
      </div>
      <div v-else class="p-2">
        <del class="h6 text-secondary">原價{{ product.origin_price }}元</del>
        <div class="h4">現在只要{{ product.price }}元</div>
      </div>
      <div class="h3">剩餘數量:</div>
      <p class="p-2">{{ product.num }} {{ product.unit }}</p>
      <div class="input-group mt-auto mb-3 w-75">
        <select class="form-select" v-model="qty">
          <option v-for="i in product.num" :key="i" :value="i">
            {{ i }}
          </option>
        </select>
        <button
          type="button"
          class="btn btn-danger"
          :disabled="this.loadingItem === product.id"
          @click="addToCart(product.id)"
        >
          加入購物車
        </button>
      </div>
      <div class="text-start">
        <button
          class="btn btn-outline-secondary w-25"
          @click="this.$router.go(-1)"
        >
          返回
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      loader: {},
      loadingItem: "",
      qty: 1,
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
    addToCart(product_id, qty = 1) {
      const data = { product_id, qty };
      this.loadingItem = product_id;
      this.$http
        .post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
        .then(() => {
          alert("加入成功");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.loadingItem = ""));
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
<style>
.product-images {
  width: 150px;
}
</style>
