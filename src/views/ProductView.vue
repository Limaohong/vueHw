<template>
  <h1>單一產品頁面</h1>
  <div class="container">
    <div class="d-flex justify-content-center">
      <img :src="`${product.imageUrl}`" :alt="`${product.content}`">
    </div>
    <table class="table table-primary">
      <thead>
        <tr>
          <th scope="col">種類</th>
          <th scope="col">產品名稱</th>
          <th scope="col">描述</th>
          <th scope="col">原價</th>
          <th scope="col">現價</th>
          <th scope="col">數量</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{{ product.category }}</th>
          <td>{{ product.content }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.origin_price }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.num }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      this.$http({
        url: `product/${this.$route.params.id}`,
        method: 'get',
        crossdomain: true,
      }).then((res) => {
        this.product = res.data.product;
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
