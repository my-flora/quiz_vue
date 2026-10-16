const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 资源改为相对路径，使 dist 构建产物可部署到任意子路径（如 GitHub Pages /仓库名/）
  publicPath: './'
})
