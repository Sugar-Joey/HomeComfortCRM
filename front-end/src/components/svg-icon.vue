<template>
  <svg
    :class="className"
    :style="{ width, height: _height, color, marginRight: '2px' }"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" fill="currentColor"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  width: { type: String, default: '16px' },
  height: { type: String },
  color: { type: String, default: 'currentColor' },
  className: { type: String },
})

const _height = computed(() => props.height || props.width)
const iconName = computed(() => `#${props.name}`)
</script>

<style scoped>
svg {
  vertical-align: middle;
}
</style>
