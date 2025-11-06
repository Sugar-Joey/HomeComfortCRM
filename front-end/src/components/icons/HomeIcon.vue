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
    <title>{{ title || 'home icon' }}</title>
    <path
      d="M11.5,7C12.88,7 14,8.12 14,9.5C14,10.88 12.88,12 11.5,12C10.12,12 9,10.88 9,9.5C9,8.12 10.12,7 11.5,7M11.5,8C10.67,8 10,8.67 10,9.5C10,10.33 10.67,11 11.5,11C12.33,11 13,10.33 13,9.5C13,8.67 12.33,8 11.5,8M6.8,12.36L11.5,20.09L16.2,12.36V12.36C16.71,11.5 17,10.55 17,9.5C17,6.46 14.54,4 11.5,4C8.46,4 6,6.46 6,9.5C6,10.55 6.29,11.5 6.8,12.36V12.36M17.05,12.88L11.5,22L5.95,12.88V12.88C5.35,11.89 5,10.74 5,9.5C5,5.91 7.91,3 11.5,3C15.09,3 18,5.91 18,9.5C18,10.74 17.65,11.89 17.05,12.88V12.88Z"
      fill="currentColor"
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
  ariaLabel: { type: String, default: 'home icon' },
})

// 使用 useAttrs 获取传递给组件的额外属性
const attrs = useAttrs()
</script>
