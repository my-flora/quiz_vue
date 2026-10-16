<template>
  <el-container class="app-container">
    <!-- 顶部栏 -->
    <el-header class="app-header">
      <span>Quiz后台管理</span>
    </el-header>

    <el-container>
      <!-- 左侧导航栏 -->
      <el-aside width="200px" class="app-aside">
        <el-menu :default-active="activeMenu" router class="app-menu">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>系统信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/users">用户管理</el-menu-item>
              <el-menu-item index="/questions">题目管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 右侧内容区 -->
      <el-main class="app-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // 根据当前路由高亮左侧对应菜单项
    activeMenu() {
      return this.$route.path
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.app-header {
  background-color: rgb(238, 241, 246);
  line-height: 60px;
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  border-bottom: 1px solid #e6e6e6;
}

.app-aside {
  background-color: rgb(238, 241, 246);
  border-right: 1px solid #e6e6e6;
}

.app-menu {
  border-right: none;
  background-color: transparent;
}

.app-main {
  background-color: #fff;
  padding: 20px;
  text-align: left;
}
</style>
