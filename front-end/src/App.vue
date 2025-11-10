<template>
  <div>
    <PageLayout />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { ref, reactive } from 'vue'

// 使用延迟导入以避免静态类型检查对 SFC 默认导出的影响
const PageLayout = defineAsyncComponent(() => import('./components/PageLayout.vue'))
// 类型定义（推荐定义接口）
// interface LinkItem {
//   icon: string
//   text: string
//   name?: string
//   link?: string
//   params?: Record<string, any>
//   sub?: LinkItem[]
// }
// 状态定义
// const userData = reactive<Record<string, any>>({})

// links 为主菜单项
// const links = reactive<LinkItem[]>([
//   { icon: 'mdi-home', text: '首页', name: 'Home' },
//   {
//     icon: '$store',
//     text: '零售门店管理',
//     sub: [
//       { icon: '$store', text: '门店主数据', name: 'StoresList' },
//       { icon: '$sales', text: '门店促销员管理', name: 'AssistantsList' },
//       { icon: '$target', text: '门店销售目标制定', name: 'SalesTargetList' },
//     ],
//   },
//   {
//     icon: 'mdi-account-cog',
//     text: '系统管理',
//     sub: [
//       { icon: '', text: '用户管理', name: 'UserAuthonty' },
//       { icon: '', text: '角色管理', name: 'RoleManagement' },
//       { icon: '', text: '模块管理', name: 'StoreManageMent' },
//       { icon: '', text: '销售人员更改管理', name: 'SalesChange' },
//       { icon: '', text: '访问列表', name: 'LoginRecord' },
//     ],
//   },
// ])
</script>

<style lang="scss"></style>
