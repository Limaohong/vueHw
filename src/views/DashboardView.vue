<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin">隨便逛逛</router-link>
      <router-link class="navbar-brand" to="/admin">後台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products"
              >後台產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon"
              >後台優惠券列表</router-link
            >
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="logout" class="nav-link">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      status: false,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api)
      .then((res) => {
        if (res.data.success) {
          this.status = true;
        }
      }).catch(() => {
        this.$router.push('/');
      });
  },
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http.post(api)
        .then((response) => {
          alert('登出');
          if (response.data.success) {
            this.$router.push('/');
          }
        }).catch((error) => {
          alert(error.response);
        });
    },
  },
};
</script>
