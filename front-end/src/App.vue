<template>
  <div id="app">
    <!-- 根据路由 meta 判断是否使用 PageLayout -->
    <PageLayout v-if="useLayout">
      <router-view />
    </PageLayout>
    <router-view v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'

// 异步加载布局
const PageLayout = defineAsyncComponent(() => import('./components/PageLayout.vue'))

const route = useRoute()

// 如果路由 meta.layout !== false，就使用 PageLayout
const useLayout = computed(() => route.meta.layout !== false)
</script>

<style lang="scss"></style>
