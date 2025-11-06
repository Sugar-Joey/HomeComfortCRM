<template>
  <div>
    <el-menu class="el-menu" router>
      <el-menu-item v-for="item in items" :key="item.path" :index="item.path">
        <el-icon>
          <component :is="getIcon(item.icon)" :size="18" />
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue'
import type { DefineComponent } from 'vue'

export default defineComponent({
  name: 'AppSidebar',
  setup() {
    // 从 inject 中获取图标映射（类型为 Record<string, DefineComponent>）
    const iconMap = inject<Record<string, DefineComponent>>(
      'icons',
      {} as Record<string, DefineComponent>,
    )
    const items = computed(() => [
      { path: '/home', title: 'Home', icon: 'home' }, // icon 对应 iconMap 的 key
    ])
    // 通过 key 从 iconMap 中获取图标组件
    const getIcon = (key: string): DefineComponent | null => {
      return iconMap?.[key] || null
    }
    return {
      items,
      getIcon,
    }
  },
})
</script>

<style scoped></style>
