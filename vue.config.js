const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/`,
  },
});
