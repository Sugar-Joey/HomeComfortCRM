<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <!-- 左侧导航栏 -->
      <el-aside width="200px" class="aside">
        <Sidebar />
      </el-aside>

      <!-- 右侧 -->
      <el-container>
        <!-- 右上header -->
        <el-header class="header">
          <div class="header-left">
            <el-button type="text" class="back-btn" @click="goBack">
              <component
                :is="'v-icon'"
                small
                class="white-color"
                color="white"
                style="margin: -2px 5px 0px 0"
                >home</component
              >
              <!-- 使用 Vuetify 的自定义图标（通过 v-icon 映射） -->
            </el-button>
          </div>

          <el-page-header :icon="ArrowLeft">
            <template #content>
              <span class="title"> Title </span>
            </template>
          </el-page-header>
        </el-header>

        <!-- 右下main区域 -->
        <el-main class="main">
          <!-- 这里放路由出口，路由切换的组件会渲染到这里 -->
          <router-view />
          <div>You did it!</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

// 使用延迟组件导入来避免静态类型检查对 SFC 默认导出的限制
const Sidebar = defineAsyncComponent(() => import('./components/Sidebar.vue'))
const router = useRouter()
const goBack = () => {
  // 使用 router.back() 回退，若不可回退可考虑 router.push('/')
  router.back()
}
</script>

<style lang="scss">
.aside {
  margin: 0;
  padding: 0;
}

.header {
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  font-family: 'HCSans';
  font-style: normal;
  color: #cfd3dc;
}

.main {
  padding: 20px;
  text-align: center;
}
</style>
