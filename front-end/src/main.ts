// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/fonts/index.css'
import './assets/css/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/svg-icon.vue'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
