import VueDisqus from 'vue-disqus'

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/css/main.css'
import '~/assets/css/prism/duotone-sea.css'

export default function (Vue, { router, head, isClient }) {
  head.bodyAttrs = { class: 'light-theme bg-primary text-second-primary' }

  Vue.use(VueDisqus)
  Vue.component('Layout', DefaultLayout)
}
