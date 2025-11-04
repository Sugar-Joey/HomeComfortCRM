<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <!-- 左侧导航栏 -->
      <!-- <el-aside width="200px" class="aside"> -->
      <Sidebar />
      <!-- </el-aside> -->

      <!-- 右侧 -->
      <el-container>
        <!-- 右上header -->
        <el-header class="header">
          <el-page-header :icon="ArrowLeft">
            <template #content>
              <span class="text-large font-600 mr-3"> Title </span>
            </template>
          </el-page-header>
        </el-header>

        <!-- 右下main区域 -->
        <el-main class="main">
          <div>You did it!</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'

// 使用延迟组件导入来避免静态类型检查对 SFC 默认导出的限制
const Sidebar = defineAsyncComponent(() => import('./components/Sidebar.vue'))

// 这里将来可以引入 Sidebar、Navbar 组件或控制逻辑
</script>

<style lang="scss" scoped>
.aside {
  background-color: #d3dce6;
  text-align: center;
  line-height: 200px;
  font-weight: bold;
}

.header {
  background-color: #409eff;
  color: white;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}

.el-page-header {
  ::v-deep(.el-page-header__title) {
    font-size: 20px !important;
    font-weight: 600;
  }

  ::v-deep(svg) {
    width: 20px !important;
    // height: 20px !important;
    vertical-align: middle;
  }
}

.main {
  background-color: #e9eef3;
  padding: 20px;
  text-align: center;
}
</style>
