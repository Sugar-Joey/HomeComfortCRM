<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <!-- 左侧导航栏 -->
      <!-- 上 -->
      <el-aside width="220px" class="aside">
        <el-affix>
          <div class="fixed-menu" @click="goHome" style="cursor: pointer">
            <svg-icon name="logo" width="42px" color="#fff" />
            <div class="logo-text">
              <div class="top-text">
                <span class="home">Home</span>
                <span class="comfort">Comfort</span>
              </div>
              <div class="bottom-text">
                <span class="crm">CRM</span>
                <span class="system">SYSTEM</span>
              </div>
            </div>
          </div>
        </el-affix>
        <!-- 下 -->
        <Sidebar />
      </el-aside>

      <!-- 右侧 -->
      <el-container direction="vertical">
        <el-affix>
          <el-header class="custom-header">
            <!-- 左侧返回图标 -->
            <div class="header-left" @click="goBack">
              <svg-icon name="arrow-left-circle" width="36px" color="#fff" />
            </div>

            <!-- 右侧欢迎文字 -->
            <div class="header-right">
              <span>欢迎，</span>
              <span class="username">Jiayi</span>
              <el-dropdown>
                <svg-icon name="chevron-down" width="36px" color="#fff" />
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>
                      <svg-icon name="logout" width="24px" color="#fff" />退出登录</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </el-header>
        </el-affix>

        <!-- 右下main区域 -->
        <el-main class="main">
          <router-view />
          <!-- <div>You did it!</div> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'

const Sidebar = defineAsyncComponent(() => import('../components/Sidebar.vue'))
const router = useRouter()
const goHome = () => {
  router.push('/home')
}
const goBack = () => {
  window.history.back()
}
</script>

<style lang="scss">
.fixed-menu {
  display: flex;
  align-items: center;
  background-color: #141414;
  padding: 8px 20px;
  height: 60px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    .top-text {
      display: flex;
      align-items: center;
      gap: 5px;

      .home {
        color: #ffffff;
        font-size: 18px;
      }

      .comfort {
        color: #ff8a00;
        font-size: 18px;
      }
    }

    .bottom-text {
      display: flex;
      align-items: center;
      gap: 3px;
      margin-top: 2px; // 可微调上下间距

      .crm,
      .system {
        color: #979797;
        font-size: 12px;
      }
    }
  }
}

.aside {
  margin: 0;
  padding: 0;
  background-color: #181818;
}
.custom-header {
  display: flex;
  justify-content: space-between; /* 左右分开 */
  align-items: center; /* 垂直居中 */
  padding: 15px;
  height: 60px; /* 可调整高度 */
  font-size: 12px;
  border-bottom: 2px solid #2b2b2b;
  width: 100%;
}
.header-left {
  cursor: pointer;
}

.header-right {
  color: #fff;
  display: flex;
  align-items: center;

  .username {
    color: #ff8a00;
    margin-left: 2px;
    margin-right: 8px;
  }
}

.el-dropdown {
  outline: none !important;
  margin-right: 15px;

  &:hover,
  &:focus,
  &:focus-visible {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  .el-tooltip__trigger {
    &:hover,
    &:focus,
    &:focus-visible {
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
    }
  }

  .el-dropdown-selfdefine {
    &:hover,
    &:focus,
    &:focus-visible {
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
    }
  }
}
/* 自定义 el-dropdown-menu 深色主题 */
.el-dropdown-menu {
  background-color: #000 !important; /* 黑色背景 */
  border: 1px solid #2b2b2b !important; /* 边框略微可见 */
  color: #fff !important; /* 字体默认白色 */
  gap: 2px;

  .el-dropdown-menu__item {
    color: #fff !important;
    background-color: transparent !important;
    transition: background-color 0.2s ease;
    gap: 2px;

    &:hover {
      background-color: #303030 !important; /* 悬浮时略亮 */
      color: #fff !important; /* 悬浮时文字高亮 */
    }

    &:focus {
      background-color: #2b2b2b !important;
      color: #fff !important;
    }
  }

  /* 去掉默认的阴影 */
  box-shadow: none !important;
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
