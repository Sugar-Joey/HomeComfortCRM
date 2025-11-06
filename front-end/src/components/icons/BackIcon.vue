<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    :aria-label="ariaLabel"
    v-bind="attrs"
    :class="className"
  >
    <title>{{ title || 'back icon' }}</title>
    <path
      d="M17,13H8.75L12,16.25L11.34,17L6.84,12.5L11.34,8L12,8.75L8.75,12H17V13M2,12.5C2,7.25 6.25,3 11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5M3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4C6.81,4 3,7.81 3,12.5Z"
    />
  </svg>
</template>

<script setup lang="ts">
import { useAttrs, defineProps } from 'vue'

// 定义 props 并解构为顶级变量以供模板直接使用
const { size, className, title, ariaLabel } = defineProps({
  size: { type: [Number, String], default: 20 },
  className: { type: String, default: '' },
  title: { type: String, default: '' },
  ariaLabel: { type: String, default: 'back icon' },
})

// 使用 useAttrs 获取传递给组件的额外属性
const attrs = useAttrs()
</script>
