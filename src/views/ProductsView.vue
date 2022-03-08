<template>
  <h1>產品頁面</h1>
  <div class="container">
    <div class="row row-cols-1 row-cols-lg-4 g-3">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card h-100" style="width: 18rem">
          <img :src="product.imageUrl" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">
              {{ product.description }}
            </p>
          </div>
          <div class="card-footer">
          <router-link class="btn btn-primary" :to="`/product/${product.id}`">詳細資料</router-link>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: {},
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
