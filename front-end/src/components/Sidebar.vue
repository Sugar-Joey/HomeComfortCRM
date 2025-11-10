<template>
  <div>
    <el-menu
      class="el-menu"
      router
      background-color="#181818"
      text-color="#fff"
      active-text-color="#ff8a00"
    >
      <!-- 一级菜单 -->
      <template v-for="item in items" :key="item.path">
        <!-- 没有子菜单 -->
        <el-menu-item v-if="!item.children" :index="item.path">
          <svg-icon :name="item.icon" width="20px" color="#fff" style="margin-right: 8px" />
          <span>{{ item.title }}</span>
        </el-menu-item>

        <!-- 有子菜单 -->
        <el-sub-menu v-else :index="item.path">
          <template #title>
            <svg-icon :name="item.icon" width="20px" color="#fff" style="margin-right: 8px" />
            <span>{{ item.title }}</span>
          </template>

          <!-- 子菜单项 -->
          <el-menu-item v-for="sub in item.children" :key="sub.path" :index="sub.path">
            <svg-icon :name="sub.icon" width="20px" color="#fff" style="margin-right: 8px" />
            <span>{{ sub.title }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const items = computed(() => [
  { path: '/home', title: '主页', icon: 'home' },
  {
    path: '/storeManage',
    title: '零售门店管理',
    icon: 'clipboard-check',
    children: [
      { path: '/storeMainData', title: '门店主数据页面', icon: 'monitor' },
      { path: '/storeManage/create', title: '创建门店', icon: 'clipboard-check' },
      { path: '/storeManage/report', title: '门店报表', icon: 'clipboard-check' },
    ],
  },
  { path: '/settings', title: '设置', icon: 'settings' },
  {
    path: '/promotion',
    title: '促销活动',
    icon: 'clipboard-check',
    children: [
      { path: '/promotion/list', title: '活动列表', icon: 'clipboard-check' },
      { path: '/promotion/create', title: '创建活动', icon: 'clipboard-check' },
      { path: '/promotion/report', title: '活动报表', icon: 'clipboard-check' },
    ],
  },
])
</script>

<style scoped>
/* .el-menu {
  border-right: none;
  background-color: #181818;
}

.el-sub-menu__title:hover,
.el-menu-item:hover {
  background-color: #2b2b2b !important;
} */
</style>
