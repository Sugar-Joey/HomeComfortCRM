// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/fonts/index.css'
import './assets/css/index.css'
import * as Icons from '@/components/icons/index'
import vuetify from '@/plugins/vuetify'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(vuetify)

// 使用 provide 将 iconMap 传递到 Vue 的上下文中
app.provide('icons', Icons.iconMap)

// 使用 globalProperties 使所有组件都能通过 this.$icons 访问
app.config.globalProperties.$icons = Icons.iconMap

app.mount('#app')
