import { h } from 'vue'
import HomeIcon from './HomeIcon.vue'
import BackIcon from './BackIcon.vue'

// 导出命名组件以便在其他地方直接引用
export { HomeIcon, BackIcon }

// 同时导出一个 iconMap，供 provide 或其他运行时代码使用
export const iconMap = {
  home: HomeIcon,
  back: BackIcon,
}

// Vuetify 期待的 icon set 形状：每个键对应一个有 component 属性的对象
// 使用函数包装 SFC（返回 VNode），可更好地匹配 Vuetify 类型期望
export const iconSet = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  home: { component: (props: any) => h(HomeIcon, props) },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  back: { component: (props: any) => h(BackIcon, props) },
}
