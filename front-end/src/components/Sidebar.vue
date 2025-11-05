<template>
  <div>
    <!-- class="mb-2" -->
    <h5>Default colors</h5>
    <el-menu class="el-menu" router>
      <el-menu-item index="/home">
        <el-icon><location /></el-icon>
        <span>HOME</span>
      </el-menu-item>
    </el-menu>
    <el-menu class="el-menu" router>
      <el-menu-item index="/test">
        <el-icon><location /></el-icon>
        <span>TEST</span>
      </el-menu-item>
    </el-menu>
  </div>

  <!-- 菜单项 -->
  <!-- <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span class="nav">Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>
              <span class="nav">item four</span>
            </template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu> -->
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>

<script lang="ts">
import { defineComponent } from 'vue'

// Provide a default export with a multi-word name to satisfy TS and ESLint rules
export default defineComponent({
  name: 'AppSidebar',
})
</script>

<style scoped></style>
