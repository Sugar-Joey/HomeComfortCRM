import { createVuetify } from 'vuetify'
import * as Icons from '@/components/icons/index'
import { h } from 'vue'

// 提供一个通用的 component 渲染函数给 Vuetify 的 icon set。
// Vuetify 在渲染某个 icon 时会传入 props.icon（即图标名称），
// 我们用 Icons.iconMap 查找对应组件并渲染它。
const customSet = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const map: Record<string, any> = (Icons as any).iconMap || {}
    const Comp = map[props.icon]
    if (!Comp) return null
    return h(Comp, props)
  },
}

const vuetify = createVuetify({
  icons: {
    defaultSet: 'custom',
    sets: {
      custom: customSet,
    },
  },
})

export default vuetify
